import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
//import {  } from 'react-router-dom';

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
			<NavLink to="/about" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
				About
			</NavLink>
			<NavLink to="/contact" activeStyle>
				Contact Us
			</NavLink>
			{/* <NavLink to="/Order" activeStyle>
				Order
			</NavLink> */}
			<NavLink to="/blogs" activeStyle>
				Blogs
			</NavLink>
			<NavLink to="/Login" activeStyle>
				Login
			</NavLink>
		</NavMenu>
	</Nav>
	</>
    );
};

export default Navbar;
