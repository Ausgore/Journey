import AdminCreateButton from '../../components/AdminCreateButton';
import AdminPanel from "../../components/AdminPanel";
import Box from "@mui/material/Box";
import Map from "../../components/Map";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useState } from 'react';
import AdminModal from '../../components/AdminModal/AdminModal';


export default function BusStops() {
	const [isModalOpen, setModalOpen] = useState(false);
	const handleOpen = () => setModalOpen(true);
	const handleClose = () => setModalOpen(false);
	const [clickedAddress, setClickedAddress] = useState(null);
	const [marker, setMarker] = useState(null);

	return (
		<AdminPanel>
			{/* Modal */}
			<AdminModal open={isModalOpen} onClose={handleClose} title="Creating Bus Stop">
				<Map width={400} height={400} marker={marker} setMarker={setMarker} clickedAddress={clickedAddress} setClickedAddress={setClickedAddress} />
				<p> Address: {clickedAddress}<br/> Lat Long: {marker?.lat} {marker?.lng} </p>
			</AdminModal>
			{/* Main Panel */}
			<Box sx={{ p: 2, pl: { sm: 4, xs: 2 }, pr: { sm: 4 }, display: "flex", alignItems: "center" }}>
				<Typography variant="h5"> Bus Stops </Typography>
				<Box sx={{ marginLeft: "auto" }}>
					<AdminCreateButton onClick={handleOpen}> Create Bus Stop </AdminCreateButton>
				</Box>
			</Box>
		</AdminPanel>
	);
}