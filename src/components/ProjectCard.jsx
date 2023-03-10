import styled from 'styled-components';

export function ProjectCard(props) {
	return (
		<CardContainer>
			<CardDiv>
				<img src={props.img} alt='#' />
				<InfoWrapper>
					<StyledH3> {props.title}</StyledH3>
					<StyledP1>{props.paragraph}</StyledP1>
					<a href={props.link} target='_blank' rel='noreferrer'>
						<button>SE LIVE VERSJON</button>
					</a>
				</InfoWrapper>
			</CardDiv>
		</CardContainer>
	);
}

const CardContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
	width: 85%;
	line-height: 1.5;
	@media (max-width: 768px) {
		max-width: 100%;
	}
`;

const CardDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 1em;
	margin: 3em auto;
	img {
		max-width: 60%;
		max-height: 100%;
		border-radius: 25px;
		object-fit: contain;
		box-shadow: 0px 0px 5px #fff;
	}
	@media (max-width: 768px) {
		max-width: 100%;
	}
`;

const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin: 0 0 0 4em;
	padding: 2em 0.5em;
	a {
		margin-top: 3em;
	}
	button {
		background: green;
		color: white;
		border: none;
		border-radius: 10px;
		padding: 15px;
		min-height: 30px;
		min-width: 120px;
		font-weight: 600;
		@media (max-width: 768px) {
			font-size: 2vw;
			max-width: 100%;
		}
		&:hover {
			transform: translateY(+1px);
			transition: 0.3s;
			cursor: pointer;
		}
	}
`;

const StyledH3 = styled.h3`
	font-size: 2em;
	margin-top: 0;
	color: #66fcf1;
`;
const StyledP1 = styled.p`
	text-align: left;
`;
