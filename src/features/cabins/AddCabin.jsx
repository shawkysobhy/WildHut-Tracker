import { useState } from 'react';
import CreateCabinForm from './CreateCabinForm';
import { Modal } from '../../ui/Modal';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
export const AddCabin = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	return (
		<div>
			<Row>
				<Button
					variation={'primary'}
					size={'large'}
					onClickHandler={() => setIsOpenModal((state) => true)}>
					{'Create Form'}
				</Button>
			</Row>
			;
			{isOpenModal && (
				<Modal onClose={() => setIsOpenModal(false)}>
					<CreateCabinForm onClose={() => {setIsOpenModal(false)
					console.log('close')}} />
				</Modal>
			)}
		</div>
	);
};
