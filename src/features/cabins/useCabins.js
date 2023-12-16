import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/cabinsApi';
import toast from 'react-hot-toast';

export const useCabins = () => {
	const {
		data: cabins,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['cabins'],
		queryFn: getCabins,
		onError: (error) => toast.error(error.message),
	});
	return { isLoading, error, cabins };
};
