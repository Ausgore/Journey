import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function NavHeader({ width, handleDrawerToggle }) {
	return (
		<AppBar position="fixed" sx={{ width: { sm: `calc(100%-${width}px)` }, display: { xs: "block", sm: "none", backgroundColor: "#101815" } }}>
			<Toolbar style={{ justifyContent: "center", display: "flex", width: "81%" }}>
				{/* Burger Menu Button */}
				<div style={{paddingLeft: 5 }}>
					<IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
						<Menu style={{ fontSize: "1.8rem" }} />
					</IconButton>
				</div>
				{/* Header Title */}
				<Typography variant="h4" pt={1} pb={1} component={Link} to="/" style={{ margin: "auto", textDecoration: "none", color: "white" }}>
					J<span style={{ color: "#11CD99"}}>o</span>urney
				</Typography>
			</Toolbar>
		</AppBar>
	);
}