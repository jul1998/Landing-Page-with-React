import React from "react";
import Navbar from "./navbar.jsx"
import Cards from "./cards.jsx"
import Footer from "./footer.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<Cards/>
		<Footer/>
		</>
	);
};

export default Home;
