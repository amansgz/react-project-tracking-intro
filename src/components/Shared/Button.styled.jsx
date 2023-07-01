import styled from "styled-components";

export const Button = styled.button`
	width: 40vw;
	max-width: 180px;
	padding: 1em;
	font-size: clamp(14px, 1.5vw, 16px);
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 1px;
	background-color: var(--red);
	color: var(--light-gray);
	border: none;
	border-radius: 6px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
	transition: opacity 0.1s ease;
	position: relative;

	:after {
		content: 'to see a preview';
		position: absolute;
		right: -90%;
		font-weight: 400;
		color: var(--light-grayish-blue);
		letter-spacing: 2px;
	}

	&:hover,
	&:focus {
		opacity: 0.7;
		cursor: pointer;
	}

`