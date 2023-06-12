import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import styles from "./Item.module.scss";
import { Link } from "react-router-dom";

export default function Item({ icon, to, children }) {
	return (
		<ListItem key={children} disablePadding>
			<ListItemButton className={styles.button} component={Link} to={to}>
				<ListItemIcon className={styles.icon}> {icon} </ListItemIcon>
				<ListItemText primary={children} className={styles.text} />
			</ListItemButton>
		</ListItem>
	);
}