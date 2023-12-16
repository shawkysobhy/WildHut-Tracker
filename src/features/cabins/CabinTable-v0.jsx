import styled from 'styled-components';
import CabinRow from './CabinRow';
import Spinner from '../../ui/Spinner';
import Heading from '../../ui/Heading';
import { useCabins } from './useCabins';
const Table = styled.div`
	border: 1px solid var(--color-grey-200);
	font-size: 1.4rem;
	background-color: var(--color-grey-0);
	border-radius: 7px;
	overflow: hidden;
`;

const TableHeader = styled.header`
	display: grid;
	grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
	column-gap: 2.4rem;
	align-items: center;

	background-color: var(--color-grey-50);
	border-bottom: 1px solid var(--color-grey-100);
	text-transform: uppercase;
	letter-spacing: 0.4px;
	font-weight: 600;
	color: var(--color-grey-600);
	padding: 1.6rem 2.4rem;
`;
function CabinTable() {
	const { cabins, isLoading, error } = useCabins();
	if (isLoading) return <Spinner />;
	if (error) {
		return <Heading>Error: {error.message}</Heading>;
	}

	return (
		<Table>
			<TableHeader>
				<div>image</div>
				<div>cabin name</div>
				<div>max Capacity</div>
				<div>price</div>
				<div>discount</div>
				<div>delete</div>
			</TableHeader>
			{cabins.map((cabinItem) => (
				<CabinRow cabin={cabinItem} key={cabinItem.id} />
			))}
		</Table>
	);
}
export default CabinTable;
