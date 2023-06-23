import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import styles from "./AdminModal.module.scss";

export default function AdminModal({ open, onClose, title, children }) {
	const [isDarkMode, setIsDarkMode] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);
	useEffect(function () {
		const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
		mediaQueryList.addEventListener("change", e => setIsDarkMode(e.matches));
	});

	return (
		<Modal open={open} onClose={onClose}>
			<Box sx={{
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				boxShadow: 24,
				width: "80%",
				maxHeight: "80%",
				overflow: "auto",
				backgroundColor: isDarkMode ? "#1A2020" : "white",
			}}>
				<Box sx={{ backgroundColor: isDarkMode ? "" : "#1A2020", p: 2}}>
					<Typography variant="h6" component="h2" sx={{ color: isDarkMode ? "#11CD99" : "white" }} id="modal-title"> {title} </Typography>
				</Box>
				<Divider sx={{ backgroundColor: "#11CD99", display: isDarkMode ? "block" : "none" }}/>
				{children}
			</Box>
		</Modal>
	)
}