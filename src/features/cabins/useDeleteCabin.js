import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCabins } from '../../services/cabinsApi';
import toast from 'react-hot-toast';

export function  useDeleteCabin() {
	const queryClient = useQueryClient();
	const { mutate: deleteCabin, isLoading: isDeleting } = useMutation({
		mutationFn: (id) => deleteCabins(id),
		onSuccess: () => {
			queryClient.invalidateQueries('[cabin]');
			toast.success(`cabin name deleted`);
		},
		onError: (error) => toast.error(error.message),
	});

	return{ deleteCabin, isDeleting};
}

