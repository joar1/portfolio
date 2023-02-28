import styled from 'styled-components';
import CV from '../assets/joarCv.pdf';
import { Link } from 'react-scroll';

export const Navbar = () => {
	return (
		<>
			<StyledNavbar>
				<StyledLogo>JR</StyledLogo>
				<ListContainer>
					<ul>
						<li>
							<StyledLink link='true' to='Om' smooth={true} duration={500}>
								OM
							</StyledLink>
						</li>
						<li>
							<StyledLink
								link='true'
								to='Prosjekter'
								smooth={true}
								duration={1000}
							>
								PROSJEKTER
							</StyledLink>
						</li>
						<li>
							<StyledLink
								link='true'
								to='Kontakt'
								smooth={true}
								duration={1500}
							>
								KONTAKT
							</StyledLink>
						</li>
						<li>
							<StyledA href={CV} download>
								CV
							</StyledA>
						</li>
					</ul>
				</ListContainer>
			</StyledNavbar>
		</>
	);
};

const StyledNavbar = styled.nav`
	max-width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5em 8em;
	background: black;
	color: #66fcf1;
	font-size: 1.3em;
	@media (max-width: 768px) {
		font-size: 2vh;
		max-width: 100%;
	}
`;

const StyledLogo = styled.p`
	padding-left: 1em;
	font-size: 1.5em;
`;

const ListContainer = styled.div`
	display: flex;
	align-items: center;
	li {
		list-style: none;
		display: inline-block;
	}
`;
const StyledLink = styled(Link)`
	padding: 0 2em 0 0;
	text-decoration: none;
	color: #66fcf1;
	&:hover {
		text-decoration: underline;
		text-underline-offset: 0.4em;
		text-decoration-thickness: 0.1em;
		cursor: pointer;
	}
`;

const StyledA = styled.a`
	padding: 0 2em 0 0;
	text-decoration: none;
	color: #66fcf1;
	&:hover {
		text-decoration: underline;
		text-underline-offset: 0.4em;
		text-decoration-thickness: 0.1em;
		cursor: pointer;
	}
`;
