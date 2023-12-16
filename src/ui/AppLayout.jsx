import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';
import styled from 'styled-components';
const StyledAppLayout = styled.div`
	display: grid;
	height: 100vh;
	background-color: var(--color-grey-200);
	grid-template-columns: 25rem 1fr;
	grid-template-rows: 8rem auto;
`;
const Main = styled.main`
	padding: 4rem 4.8rem 6rem;
	overflow: scroll;
	background-color: var(--color-grey-50);
`;
	const Container = styled.div`
		max-width: 120rem;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	`;
function AppLayout() {
	return (
		<StyledAppLayout>
			<SideBar />
			<Header />
				<Main>
			<Container>
					<Outlet />
			</Container>
				</Main>
		</StyledAppLayout>
	);
}

export default AppLayout;
