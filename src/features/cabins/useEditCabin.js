import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createCabin } from '../../services/cabinsApi';

function useEditCabin() {
	const queryClient = useQueryClient();
	const {
		mutate: editCabin,
		isLoading: isEditing,
		error: editingError,
	} = useMutation({
		mutationFn: ({ cabin, id }) => createCabin(cabin, id),
		onSuccess: () => {
			toast.success(` Cabin edited ✅`);
			queryClient.invalidateQueries('cabins');
		},
		onError: () => {
			toast.error(editingError);
			throw new Error('edit fail');
		},
	});

  return {editCabin,isEditing,editingError}
}

export default useEditCabin;
