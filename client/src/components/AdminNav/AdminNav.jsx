import React from "react";

import Box from "@mui/material/Box";

import Item from "./components/Item";
import Category from "./components/Category";
import NavHeader from "./components/NavHeader";
import NavBody from "./components/NavBody";

import Location from '@mui/icons-material/LocationOn';
import Person from "@mui/icons-material/Person";
import Replay from '@mui/icons-material/Replay';

export default function AdminNav({ width }) {
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

	return (
		<Box sx={{ width: { sm: width }, flexShrink: { sm: 0 } }}>
			<NavHeader width={width} handleDrawerToggle={handleDrawerToggle} />
			<NavBody width={width} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} >
				<Category title="User Management">
					<Item icon={<Person />} to="/admin/accounts"> Accounts </Item>
					<Item icon={<Replay />} to="/admin/refunds"> Refunds </Item>
				</Category>
				<Category title="Routing">
					<Item icon={<Location />} to="/admin/busstops"> Bus Stops </Item>
				</Category>
			</NavBody>
		</Box>
	);
}
