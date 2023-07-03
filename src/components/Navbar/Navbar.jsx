import { useState } from 'react';
import { StyledNavbar, Wrapper, Hamburger, ListLinks } from "./Navbar.styled";
import { logo, iconClose, iconHamburger } from "../../assets/index";
import '../../index.css';


const Navbar = () => {

	const [toggle, setToggle] = useState(false);

	return(
		<StyledNavbar>
			<Wrapper>
				<div>
					<img src=	{logo} alt="logo"/>
				</div>
				<Hamburger>
					<img src= {toggle ? iconClose : iconHamburger}
					alt=""
					onClick= {() => setToggle((prev) => !prev)}
					/>
				</Hamburger>			
			</Wrapper>	
		
			<ListLinks className= {`${!toggle ? "hidden" : "flex"}`}>
				<li>
					<a href="#">
						Product
					</a>
				</li>
				<li>
					<a href="#">
						Features
					</a>
				</li>
				<li>
					<a href="#">
						Pricing
					</a>
				</li>
				<li>
					<a href="#">
						Login
					</a>
				</li>
			</ListLinks>
		</StyledNavbar>
	);
}

export default Navbar;