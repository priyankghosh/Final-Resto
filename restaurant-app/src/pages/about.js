import React from "react";

const sectionStyle = {
	margin: '5',
	padding: '5',
	border: '2',
	outline:'0',
	display: 'block'
}

const About = () => {
return (
	<div style={
		{marginLeft: "15px", 
		backgroundImage: "url('')", 
		backgroundposition: "center", 
		backgroundRepeat: "no-repeat"}
		}>		
		
		<h2 style={{margin: "40px", padding: "35px", color: "yellow"}}>ABOUT US </h2>
		<p style={{color: "#00ff00", margin: "40px"}}>
				Chef and Restaurateur Adriano Paganini grew up near Milan in a family of tailors who used their hands to create beautiful things, 
				and a mother who was an exceptional cook. Many of the dishes on our menu were inspired by meals she prepared for her family, 
				and our logo was inspired by the label that was stitched into each piece of clothing that came from the Paganini's shop. 
		</p>
		<p style={{color: "#ff4040", margin: "40px"}}>
				We pay homage to their family legacy with every meal we serve here at The Tailor's Son.
		</p>		
	</div>
	);
};

export default About;
