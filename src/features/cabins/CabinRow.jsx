/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import styled from 'styled-components';
import { formatCurrency } from '../../utils/helpers';
import { useState } from 'react';
import { useDeleteCabin } from './useDeleteCabin';
import useCreateCabin from './useCreateCabin';
import toast from 'react-hot-toast';
import { EditCabin } from './EditCabin';
import ConfirmDelete from '../../ui/ConfirmDelete';
export const TableRow = styled.div`
	display: grid;
	grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
	column-gap: 2.4rem;
	align-items: center;
	padding: 1.4rem 2.4rem;

	&:not(:last-child) {
		border-bottom: 1px solid var(--color-grey-100);
	}
`;

const Img = styled.img`
	display: block;
	width: 6.4rem;
	aspect-ratio: 3 / 2;
	object-fit: cover;
	object-position: center;
	transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
	font-size: 1.6rem;
	font-weight: 600;
	color: var(--color-grey-600);
	font-family: 'Sono';
`;

const Price = styled.div`
	font-family: 'Sono';
	font-weight: 600;
`;

const Discount = styled.div`
	font-family: 'Sono';
	font-weight: 500;
	color: var(--color-green-700);
`;
function CabinRow({ cabin }) {
	const {
		id: cabinId,
		name,
		maxCapacity,
		price,
		discount,
		cabinImage,
		description,
	} = cabin;
	const { deleteCabin, isDeleting } = useDeleteCabin();
	const [isOpenEditCabin, setEditOpenCabin] = useState(false);
	const { isCreating, createCabinMutate } = useCreateCabin();
	const duplicateCabinHandler = () => {
		createCabinMutate({
			name,
			maxCapacity,
			price,
			discount,
			cabinImage,
			description,
		});
	};
	const showToastMessage = () => {
		toast.success('editing ...💫');
	};
const [isOpenDeleteModal,setDeleteModal]=useState(false)
	return (
		<>
			{isCreating && showToastMessage()}
			<TableRow>
				<Img src={cabinImage} />
				<Cabin>{name}</Cabin>
				<div>fits up to {maxCapacity} guests</div>
				<Price>{formatCurrency(price)}</Price>
				<Discount>{formatCurrency(discount)}</Discount>
				<div>
					<button onClick={() => setEditOpenCabin((state) => true)}>
						{isOpenEditCabin ? 'discard' : 'edit'}
					</button>
					<button onClick={()=>setDeleteModal(true)}>
						delete
					</button>

					<button disabled={isCreating} onClick={duplicateCabinHandler}>
						duplicate
					</button>
				</div>
			</TableRow>
			{isOpenEditCabin && (
				<EditCabin
					cabin={cabin}
					onCloseHandler={() => setEditOpenCabin(false)}
				/>
			)}
			{isOpenDeleteModal && (
				<ConfirmDelete
				onConfirm={() => deleteCabin(cabinId)}
					disabled={isDeleting}
					resourceName={cabin.name}
					onCloseHandler={() => setDeleteModal(false)}
				/>
			)}
		</>
	);
}
export default CabinRow;
