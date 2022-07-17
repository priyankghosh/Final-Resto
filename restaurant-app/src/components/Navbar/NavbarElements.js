import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: linear-gradient(45deg, #000850 0%, #000320 100%), radial-gradient(100% 225% at 100% 0%, #FF6928 0%, #000000 100%), linear-gradient(225deg, #FF7A00 0%, #000000 100%), linear-gradient(135deg, #CDFFEB 10%, #CDFFEB 35%, #009F9D 35%, #009F9D 60%, #07456F 60%, #07456F 67%, #0F0A3C 67%, #0F0A3C 100%);
background-blend-mode: screen, overlay, hard-light, normal;
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.4rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #b9d611;
display: flex;
align-items: center;
font-family: "Monospace", Lucida Console;
font-size: 19px;
text-decoration: none;
padding: 0 2.5rem;
margin: 0rem;
height: 100%;
cursor: pointer;
&.active {
	color: #fc5203;
	font-family: "Sans-serif", Helvetica;
	font-size: 28px;
	text-decoration: none;
	background-color: powderblue;
	margin-top : 10px;
	border-radius: 25px;
	height: 70px;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;