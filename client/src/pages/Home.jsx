import React from "react";
import { Link } from "react-router-dom";
import CustTemplate from "../components/CustTemplate";
import Typography from "@mui/material/Typography";

function Home() {
	return (
		<>
			<CustTemplate>
				<Typography variant="h1" component="p" sx={{ padding: "1em" }}>
					Home Page
				</Typography>
			</CustTemplate>
		</>
	);
}

export default Home;