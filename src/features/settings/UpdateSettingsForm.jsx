// import Form from '../../ui/Form';
// import FormRow from '../cabins/FormRow';
// import Input from '../../ui/Input';
// import useSettings from './useSettings';
// import Spinner from '../../ui/Spinner';
// function UpdateSettingsForm() {
// 	const {
// 		settingsData: {
// 			minBookingLength,
// 			maxBookingLength,
// 			maxGuestPerBooking,
// 			breakfastPrice,
// 		} = {},
// 		isLoadingSettings,
// 	} = useSettings();
// 	if (isLoadingSettings) return <Spinner />;
// 	return (
// 		<Form>
// 			<FormRow label='Minimum nights/booking'>
// 				<Input
// 					type='number'
// 					id='minBookingLength'
// 					defaultValue={minBookingLength}
// 				/>
// 			</FormRow>
// 			<FormRow label='Maximum nights/booking'>
// 				<Input
// 					type='number'
// 					id='maxBookingLength'
// 					defaultValue={maxBookingLength}
// 				/>
// 			</FormRow>
// 			<FormRow label='Maximum guests/booking'>
// 				<Input
// 					type='number'
// 					id='maxGuestPerBooking'
// 					defaultValue={maxGuestPerBooking}
// 				/>
// 			</FormRow>
// 			<FormRow label='Breakfast price'>
// 				<Input
// 					type='number'
// 					id='breakfastPrice'
// 					defaultValue={breakfastPrice}
// 				/>
// 			</FormRow>
// 		</Form>
// 	);
// }

// export default UpdateSettingsForm;
import Form from '../../ui/Form';
import FormRow from '../cabins/FormRow';
import Input from '../../ui/Input';
import useSettings from './useSettings';
import Spinner from '../../ui/Spinner';
import { useForm } from 'react-hook-form';
function UpdateSettingsForm() {
	const {
		settingsData,
		isLoadingSettings,
	} = useSettings();

  const {register}=useForm({
    defaultValues:settingsData,
  })
  console.log(register('minBookingLength'));
  console.log(settingsData)
	if (isLoadingSettings) return <Spinner />;
	return (
		<Form>
			<FormRow label='Minimum nights/booking'>
				<Input
					type='number'
					id='minBookingLength'
					// defaultValue={minBookingLength}
					{...register('minBookingLength')}
				/>
			</FormRow>
			<FormRow label='Maximum nights/booking'>
				<Input
					type='number'
					id='maxBookingLength'
					{...register('maxBookingLength')}
				/>
			</FormRow>
			<FormRow label='Maximum guests/booking'>
				<Input
					type='number'
					id='maxGuestPerBooking'
					{...register('maxGuestPerBooking')}
				/>
			</FormRow>
			<FormRow label='Breakfast price'>
				<Input
					type='number'
					id='breakfastPrice'
					{...register('breakfastPrice')}
				/>
			</FormRow>
		</Form>
	);
}

export default UpdateSettingsForm;

