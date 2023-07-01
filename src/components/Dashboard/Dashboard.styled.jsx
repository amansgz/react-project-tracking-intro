import styled from "styled-components";

export const StyledDashboard = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (min-width: 992px) {
		display: flex;
		flex-direction: row-reverse;
		padding: 4em;	
		padding-right: 0;
	}
`
export const ImageContainer = styled.div`
	overflow: hidden;

	img {
		width: 138%;
	}
`

export const Wrapper = styled.div`
	align-self: flex-start;	
	padding: 2em;

	@media (min-width: 992px) {
		width: 50vw;
		align-self: center;
	}
`

export const Product = styled.h1`
	font-size: clamp(12px, 1vw, 16px);
	font-weight: 400;
	text-transform: uppercase;
	color: var(--light-grayish-blue);
	letter-spacing: 3px;
	word-spacing: 3px;

	:before {
		content: 'New';
		width: 50px;
		left: -50%;
		padding: .3em .7em;
		margin-right: 1.5em;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 1px;
		background-color: var(--dark-grayish-blue);
		color: var(--light-gray);	
		border-radius: 12px;
	}
`

export const Title = styled.h2`
	margin-top: .5em;
	font-size: clamp(38px, 5vw, 60px);
	font-weight: 700;
	text-transform: uppercase;
	color: var(--dark-grayish-blue);
	line-height: 1.15;

	@media (min-width: 992px) {
		max-width: 450px;
	}

`

export const Text = styled.p`
	width: 68vw;	
	margin: 1em 0 3em;
	font-size: clamp(16.78px, 1.2vw, 24px);
	color: var(--grayish-blue);
	line-height: 1.5;

	@media (min-width: 992px) {
		max-width: 270px;
	}
`