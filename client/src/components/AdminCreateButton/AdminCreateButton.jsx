import Button from "@mui/material/Button";
import styles from "./AdminCreateButton.module.scss";
import { useEffect, useState } from 'react';

export default function AdminCreateButton({ onClick, children }) {
	const [isDarkMode, setIsDarkMode] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);
	useEffect(function() {
		const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
		mediaQueryList.addEventListener("change", e => setIsDarkMode(e.matches));
	});

	return (
		<Button variant={isDarkMode ? "outlined" : "contained"} className={isDarkMode ? styles.darkMode : styles.lightMode} sx={{ fontSize: 17 }} onClick={onClick}>
			<span className={styles.icon}> + </span> {children}
		</Button>
	)
}