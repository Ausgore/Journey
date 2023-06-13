import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import styles from "./Category.module.scss";

export default function Category({ title, children }) {
	return (
		<List dense>
			<Typography variant="subtitle1" className={styles.category}> {title} </Typography>
			{children}
		</List>
	)
}