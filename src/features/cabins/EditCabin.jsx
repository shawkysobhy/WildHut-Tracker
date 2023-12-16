import { useState } from 'react';
import CreateCabinForm from './CreateCabinForm';
import { Modal } from '../../ui/Modal';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
export const EditCabin = ({ cabin, onCloseHandler }) => {
	return (
			<Modal onClose={onCloseHandler}>
				<CreateCabinForm onClose={onCloseHandler} editableCabin={cabin} />
			</Modal>
	);
};
