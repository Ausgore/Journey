import CustTemplate from "../../components/CustTemplate";
import Typography from "@mui/material/Typography";


export default function About() {
	return (
		<CustTemplate>
			<Typography variant="h1" component="p" sx={{ padding: "1em"}}>
				About Journey Page
			</Typography>
		</CustTemplate>
	);
}