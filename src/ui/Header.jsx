import styled from 'styled-components';

const StyledHeader = styled.header`
	background-color: var(--color-grey-0);
	padding: 1.2rem 4.8rem;
	border-bottom: 1px solid var(--color-grey-100);
	display: flex;
	gap: 2.4rem;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: end;
`;
function Header() {
	return <StyledHeader></StyledHeader>;
}

export default Header;
