import styled from "styled-components";

export const StyledNavbar = styled.nav`
	padding: 2em;

	@media (min-width: 768px) {
		display: flex;
		flex-direction: row;	
		justify-content: space-between;
	}

	@media (min-width: 1024px) {
		padding-right: 7em;
		padding-left: 6em;
	}	
`

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const Hamburger = styled.div`
	@media (min-width: 768px) {
		display: none;
	}
`

export const ListLinks = styled.ul`
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 102%;
	padding: 1em;
	margin-top: 2em;
	background-color: white;
	text-transform: uppercase;
	font-weight: 700;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
	z-index: 100;

	@media (min-width: 768px) {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		width: 80%;
		margin: 0;
		box-shadow: none;
		background-color: transparent;
	}

	li {
		margin: 1em .5em;

		@media (min-width: 768px) {
			margin: 1.5em;
		}
	}
	
	li:nth-child(3) {
		position: relative;
		width: 100%;
		text-align: center;

		@media (min-width: 768px) {
			margin-right: 4em;
			width: auto;
		}		
	}

	li:nth-child(3):after {
		content:'';
		width: 90%;
		height: 1px;
		background-color: var(--light-gray);
		position: absolute;
		top: 190%;
		left: 5%;

		@media (min-width: 768px) {
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background-color: var(--light-gray);
			top: 5px;
			left: 120px;
		}
	}
	li:nth-child(4) a {
		color: var(--grayish-blue);
	}
	a {
		color: var(--dark-grayish-blue);
		transition: .3s ease;
	}
	a:hover,
	a:focus {
		text-decoration: underline;
	}
	
`