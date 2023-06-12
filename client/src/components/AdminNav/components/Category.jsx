import List from "@mui/material/List";
import Typography from "@mui/material/Typography";

export default function Category({ title, children }) {
	return (
		<List dense>
			<Typography variant="subtitle1" style={{ paddingLeft: "17px", fontWeight: "bold", color: "#11CD99"}}> {title} </Typography>
			{children}
		</List>
	)
}