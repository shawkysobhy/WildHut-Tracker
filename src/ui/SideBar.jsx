import styled from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';
import Uploader from '../data/Uploader';

const StyledSideBar = styled.aside`
	grid-row: -1/1;
	background-color: white;
	background-color: var(--color-grey-0);
	padding: 3.2rem 2.4rem;
	border-right: 1px solid var(--color-grey-100);
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;
function SideBar() {
	return (
		<StyledSideBar>
			<Logo />
			<MainNav />
			<Uploader />
		</StyledSideBar>
	);
}

export default SideBar;
