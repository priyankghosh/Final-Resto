import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/">
						<img
							src="https://cdn.dribbble.com/users/1456628/screenshots/4916933/media/c8bb4ebe3476b95d4dea39a64418eee7.gif"
							height={"45"}
							borderRadius={"50%"}
							className="ml-1 pr-4"
						/>
					</NavLink>
					<NavLink to="/about" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
						About
					</NavLink>
					<NavLink to="/contact" activeStyle>
						Contact Us
					</NavLink>
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
