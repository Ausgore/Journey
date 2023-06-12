import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import MenuButton from "./MenuButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function NavBody({ mobileOpen, width, handleDrawerToggle, children }) {
	return (
		<Box component="nav" sx={{ width: { sm: width }, flexShrink: { sm: 0 } }}>
			{/* For mobile display */}
			<Drawer
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{ keepMounted: true }}
				sx={{ display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: width, backgroundColor: "#1A2020" } }}
			>
				<MenuButton handleDrawerToggle={handleDrawerToggle} />
				<Divider />
				{children}
			</Drawer>
			{/* For desktop display */}
			<Drawer
				variant="permanent"
				sx={{ display: { xs: "none", sm: "block" }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: width, backgroundColor: "#1A2020" } }}
				open
			>
				<Toolbar style={{ paddingLeft: 17 }}>
					<Typography variant="h5" noWrap component="div" sx={{ paddingTop: 2 }} style={{ color: "white" }}> J<span style={{ color: "#11CD99" }}>o</span>urney </Typography>
				</Toolbar>
				{children}
			</Drawer>
		</Box>
	);
}