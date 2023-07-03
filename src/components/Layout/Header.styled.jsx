import styled from "styled-components";

export const StyledHeader = styled.header`
	background-color: transparent;
`

export const Shape = styled.div`
	content: '';
	position: absolute;
	width: 55%;
	height: 435px;
	top: 0;
	right: 0;
	background-color: var(--light-grayish);
	border-bottom-left-radius: 100px;
	z-index: -10;

	@media (min-width: 768px) {
		width: 75%;
		height: 500px;
	}

	@media (min-width: 1200px) {
		width: 55%;
	}

`