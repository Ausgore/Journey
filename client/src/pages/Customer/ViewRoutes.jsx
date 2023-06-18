import CustTemplate from "../../components/CustTemplate";
import Typography from "@mui/material/Typography";


export default function ViewRoutes() {
	return (
		<CustTemplate>
			<Typography variant="h1" component="p" sx={{ padding: "1em"}}>
				View Routes Page
			</Typography>
		</CustTemplate>
	);
}