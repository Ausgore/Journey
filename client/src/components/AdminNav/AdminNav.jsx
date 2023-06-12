import React from "react";

import Box from "@mui/material/Box";

import Item from "./components/Item";
import Category from "./components/Category";
import NavHeader from "./components/NavHeader";
import NavBody from "./components/NavBody";

import Bus from "@mui/icons-material/DirectionsBus";
import Discount from '@mui/icons-material/Discount';
import Flag from "@mui/icons-material/Flag";
import Person from "@mui/icons-material/Person";
import Replay from '@mui/icons-material/Replay';
import Route from '@mui/icons-material/Route';

export default function AdminNav() {
	const width = 200;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

	return (
		<Box sx={{ width: { sm: width }, flexShrink: { sm: 0 } }}>
			<NavHeader width={width} handleDrawerToggle={handleDrawerToggle} />
			<NavBody width={width} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} >
				<Category title="User Experience">
					<Item icon={<Person />} to="/"> Users </Item>
					<Item icon={<Discount />} to="/admin"> Rewards </Item>
					<Item icon={<Replay />} to="/"> Refunds </Item>
				</Category>
				<Category title="Routing">
					<Item icon={<Bus />} to="/"> Buses </Item>
					<Item icon={<Flag />} to="/admin"> Bus Stops </Item>
					<Item icon={<Route />} to="/"> Routes </Item>
				</Category>
			</NavBody>
		</Box>
	);
}
