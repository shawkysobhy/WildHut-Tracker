import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getSettings } from '../../services/apiSettings';

function useSettings() {
    const queryClient = useQueryClient();

	const {
		data: settingsData,
		isLoading: isLoadingSettings,
		error: settingsError,
	} = useQuery({
		queryKey: ['settings'],
		queryFn: getSettings,
		onSuccess: () => {
			// Invalidate and refetch
			queryClient.invalidateQueries({ queryKey: ['todos'] });
		},
	});
	return { settingsData, isLoadingSettings, settingsError };
}

export default useSettings;
