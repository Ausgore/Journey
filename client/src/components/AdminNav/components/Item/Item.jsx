import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Link, useLocation } from "react-router-dom";
import styles from "./Item.module.scss";

export default function Item({ icon, to, children }) {
	const location = useLocation();
	return (
		<ListItem key={children} disablePadding component={Link} to={to} className={`${location.pathname == to ? styles.active : ""} ${styles.item}`}>
			<ListItemButton>
				<ListItemIcon className={styles.icon}> {icon} </ListItemIcon>
				<ListItemText primary={children} className={styles.text} />
			</ListItemButton>
		</ListItem>
	);
}