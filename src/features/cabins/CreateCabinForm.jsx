import { useForm } from 'react-hook-form';
import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import FormRow from './FormRow';
import useCreateCabin from './useCreateCabin';
import useEditCabin from './useEditCabin';
function CreateCabinForm({ editableCabin = {}, onClose }) {
	const { createCabinMutate, isCreating } = useCreateCabin();
	const { editCabin, isEditing } = useEditCabin();
	const { id: editableCabinId, ...editCabinValues } = editableCabin;
	const isEditForm = Boolean(editableCabinId);
	const { register, handleSubmit, getValues, formState, reset } = useForm({
		defaultValues: isEditForm ? editCabinValues : {},
	});
	const { errors } = formState;
	console.log(errors);
	const onSubmit = (data) => {
		const image =
			typeof data.cabinImage === 'string'
				? data.cabinImage
				: data.cabinImage[0];
		if (isEditForm) {
			editCabin(
				{ cabin: { ...data, cabinImage: image }, id: editableCabinId },
				{
					onSuccess: () => {
						reset();
						onClose?.();
					},
				}
			);
		} else {
			createCabinMutate(
				{ ...data, cabinImage: image },
				{
					onSuccess: () => {
						reset();
						onClose?.();
					},
				}
			);
		}
	};
	const isSending = isEditing || isCreating;
	return (
		<Form
			onSubmit={handleSubmit(onSubmit)}
			type={onClose ? 'modal' : 'regular'}>
			<FormRow label={'Cabin Name'} error={errors?.name?.message}>
				<Input
					type='text'
					id='name'
					disabled={isSending}
					{...register('name', { required: "can't be empty" })}
				/>
			</FormRow>
			<FormRow label={'Maximum capacity'} error={errors?.maxCapacity?.message}>
				<Input
					id='maxCapacity'
					disabled={isSending}
					{...register('maxCapacity', {
						required: "can't be empty",
						min: {
							value: 1,
							message: "capacity can't be less than one",
						},
						max: {
							value: 15,
							message: 'currently cabins can not reach more than 15',
						},
						pattern: {
							value: /^[0-9]*$/,
							message: 'Please enter only numeric values',
						},
					})}
				/>
			</FormRow>
			<FormRow label={'Regular Price'} error={errors?.price?.message}>
				<Input
					id='price'
					disabled={isSending}
					{...register('price', {
						required: "can't be empty",
						min: {
							value: 0,
							message: "price can't be small than zero",
						},
						pattern: {
							value: /^[0-9]*$/,
							message: 'Please enter only numeric values',
						},
					})}
				/>
			</FormRow>
			<FormRow error={errors?.discount?.message} label={'Discount'}>
				<Input
					disabled={isSending}
					id='discount'
					defaultValue={0}
					{...register('discount', {
						required: "can't be empty",
						validate: (value) =>
							value <= getValues('price') ||
							'Discount should be less than regular price',
						min: {
							value: 0,
							message: 'discount can not be less than zero',
						},
						pattern: {
							value: /^[0-9]*$/,
							message: 'Please enter only numeric values',
						},
					})}
				/>
			</FormRow>
			<FormRow
				disabled={isSending}
				error={errors?.description?.message}
				label={'Description for website'}>
				<Textarea
					id='description'
					defaultValue=' '
					disabled={isSending}
					{...register('description', { required: "can't be empty" })}
				/>
			</FormRow>
			<FormRow label={'Cabin photo'} error={errors?.cabinImage?.message}>
				<FileInput
					disabled={isSending}
					id='cabinImage'
					accept='image/*'
					{...register('cabinImage', {
						required: isEditForm ? false : 'must upload image',
					})}
				/>
			</FormRow>
			<FormRow>
				<Button
					variation='secondary'
					onClickHandler={() => {
						onClose?.();
					}}>
					Cancel
				</Button>
				<Button type='submit'>{isEditForm ? 'Edit' : 'Create'}</Button>
			</FormRow>
		</Form>
	);
}
export default CreateCabinForm;
