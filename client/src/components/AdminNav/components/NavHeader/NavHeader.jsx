import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import styles from "./NavHeader.module.scss";

export default function NavHeader({ width, handleDrawerToggle }) {
	return (
		<AppBar position="fixed" sx={{ width: { sm: `calc(100%-${width}px)` }, display: { xs: "block", sm: "none", backgroundColor: "#101815" } }}>
			<Toolbar className={styles.toolbar}>
				{/* Burger Menu Button */}
				<div style={{paddingLeft: 5 }}>
					<IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
						<Menu className={styles.iconSize} />
					</IconButton>
				</div>
				{/* Header Title */}
				<Typography variant="h4" pt={1} pb={1} component={Link} to="/" className={styles.title}>
					J<span>o</span>urney
				</Typography>
			</Toolbar>
		</AppBar>
	);
}