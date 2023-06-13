import AdminNav from "./AdminNav";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function AdminPanel({ children }) {
	return (
		<Box sx={{ display: "flex" }}>
			<AdminNav width={205} />
			<Box component="main" sx={{ flexGrow: 1, p: 1 }}>
				<Toolbar sx={{ display: { xs: "block", sm: "none" }}} />
				{children}
			</Box>
		</Box>
	);
}