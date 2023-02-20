import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { IoLogoNodejs } from 'react-icons/io';
import { FiFigma } from 'react-icons/fi';
import HtmlLogo from '../images/html.png';
import CssLogo from '../images/css.png';
import JsLogo from '../images/js.png';
import ReactLogo from '../images/react.png';
import JoarBilde from '../images/joar.jpg';

const About = () => {
	return (
		<AboutContainer>
			<AboutMe>
				<PictureOfMe src={JoarBilde} alt='bilde' />
				<AboutText>
					<h2 id='Om'>LITT OM MEG</h2>
					<p>
						Jeg heter {<span>Joar</span>} og er en {<span>juniorutvikler</span>}{' '}
						og tidligere
						{<span> elektriker</span>}. På grunn av en yrkesskade måtte jeg
						tenke nytt og da falt valget på {<span>koding</span>}, noe som har
						blitt en ny lidenskap. I og med at jeg liker å løse problemer passer
						programmering perfekt.{<br />}
						{<br />} Tommel opp for koding.
					</p>
					<p>
						Jeg går nå på et kurs som heter Kodehode, der jeg lærer
						Frontend-utvikling og jeg har fått god kontroll på{' '}
						<span style={{ color: '#E24B24' }}>{<b>HTML</b>}</span>,{' '}
						<span style={{ color: '#1B73B9' }}>{<b>CSS</b>}</span>,{' '}
						<span style={{ color: '#D4B830' }}>{<b>Javascript</b>}</span> og{' '}
						<span style={{ color: '#53B2CD' }}>{<b>React</b>}</span>. Når det
						kommer til hobbyer går det i alt fra gaming, gitar og å google
						"hvordan sentrere en div".
					</p>
					<LogoWrapper>
						<LogoImg src={HtmlLogo} alt='html' />
						<LogoImg src={CssLogo} alt='css' />
						<LogoImg src={JsLogo} alt='javascript' />
						<LogoImg src={ReactLogo} alt='react' />
						<AiFillGithub size={55} style={{ color: '#D4B830' }} />
						<IoLogoNodejs size={55} style={{ color: '#1B73B9' }} />
						<FiFigma size={55} style={{ color: '#E24B24' }} />
					</LogoWrapper>
				</AboutText>
			</AboutMe>
		</AboutContainer>
	);
};

export default About;

const AboutContainer = styled.div`
	max-width: 100%;
	margin: 0 auto;
	padding: 5em 0;
	background: linear-gradient(
		0deg,
		rgba(27, 29, 30, 1) 0%,
		rgba(0, 0, 0, 1) 100%
	);
	color: white;
`;

const AboutMe = styled.section`
	display: flex;
	justify-content: space-around;
	width: 90%;
	margin: 1em auto;
	line-height: 1.5em;
	span {
		color: #53b2cd;
		font-weight: bolder;
	}
	@media (max-width: 768px) {
		grid-template-columns: 1, fr;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-size: 2vw;
		margin: 0 auto;
		max-width: 100%;
	}
`;

const PictureOfMe = styled.img`
	height: 620px;
	object-fit: contain;
	box-shadow: 0px 0px 20px #fff;
	border-radius: 20px;
	@media (max-width: 768px) {
		box-shadow: none;
		max-width: 100%;
		height: 20%;
		width: 30%;
	}
`;

const AboutText = styled.div`
	width: 50%;
	h2 {
		padding: 1em;
		text-decoration: underline;
		text-underline-offset: 0.3em;
		font-size: 2em;
	}
	h3 {
		text-align: center;
	}
	p {
		padding: 1em;
		font-size: 1.3em;
	}
	@media (max-width: 768px) {
		text-decoration: none;
		font-size: 1em;
		max-width: 100%;
	}
`;

const LogoWrapper = styled.div`
	text-align: center;
	svg {
		margin: 0 1em;
		color: white;
	}
`;

const LogoImg = styled.img`
	height: 50px;
	width: 50px;
	margin: 0 1em;
	object-fit: contain;
`;
