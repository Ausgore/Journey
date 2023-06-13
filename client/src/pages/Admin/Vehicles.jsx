import AdminPanel from "../../components/AdminPanel";
import Typography from "@mui/material/Typography";
import http from "@http";

function Vehicles() {
	console.log(http);
	return (
		<AdminPanel>
			<Typography variant="h1" paragraph>
					Vehicles Page
				</Typography>
		</AdminPanel>
	);
}

export default Vehicles;