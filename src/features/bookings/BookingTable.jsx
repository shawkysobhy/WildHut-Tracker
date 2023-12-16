import styled from 'styled-components';
import BookingRow from './BookingRow';
import Spinner from '../../ui/Spinner';
// import Heading from '../../ui/Heading';
// import { useSearchParams } from 'react-router-dom';
import Pagination from '../../ui/Pagination';
import  useBookings  from './useBookings';
import Empty from '../../ui/Empty';
const Table = styled.div`
	border: 1px solid var(--color-grey-200);
	font-size: 1.4rem;
	background-color: var(--color-grey-0);
	border-radius: 7px;
	overflow: hidden;
`;

const TableHeader = styled.header`
	display: grid;
	grid-template-columns: 0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem;
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
function BookingTable() {
	const { bookingData, isBookingLoading ,count,bookingError} = useBookings();
	console.log(bookingData)
	if (isBookingLoading) return <Spinner />;
	if (!bookingData?.length) return <Empty resourceName={'Bookings'} />;

  console.log(bookingData)
	return (
			<Table>
				<TableHeader>
					<div>Cabin</div>
					<div>Guest</div>
					<div>Dates</div>
					<div>Status</div>
					<div>Amount</div>
					<div></div>
				</TableHeader>
				{bookingData.map((booking) => (
					<BookingRow booking={booking} key={booking.id} />
				))}
			<Pagination count={count}/>
			</Table>
	);
}
export default BookingTable;
