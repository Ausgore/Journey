import ChevronLeft from "@mui/icons-material/ChevronLeft";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import styles from "./MenuButton.module.scss";

export default function MenuButton({ handleDrawerToggle }) {
	const Header = styled("div")(({ theme }) => ({
		display: "flex",
		alignItems: "center",
		paddingRight: 6,
		...theme.mixins.toolbar,
		justifyContent: "flex-end"
	}));

	return (
		<Header>
			<IconButton onClick={handleDrawerToggle} className={styles.button}>
				<ChevronLeft />
			</IconButton>
		</Header>
	);
}