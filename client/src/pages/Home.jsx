import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<>
			<Link to="/admin/accounts"> Accounts Page </Link>
			<h1> Home Page </h1>
		</>
	);
}

export default Home;