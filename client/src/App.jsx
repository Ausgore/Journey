import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const Accounts = lazy(() => import("./pages/Admin/Accounts"));
const ChargingStations = lazy(() => import("./pages/Admin/ChargingStations"));
const ParkingSpots = lazy(() => import("./pages/Admin/ParkingSpots"));
const Refunds = lazy(() => import("./pages/Admin/Refunds"));
const Vehicles = lazy(() => import("./pages/Admin/Vehicles"));

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/admin/accounts" element={<Accounts />} />
			<Route path="/admin/chargingstations" element={<ChargingStations />} />
			<Route path="/admin/parkingspots" element={<ParkingSpots />} />
			<Route path="/admin/refunds" element={<Refunds />} />
			<Route path="/admin/vehicles" element={<Vehicles />} />
		</Routes>
	);
}

export default App;