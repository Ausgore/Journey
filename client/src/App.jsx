import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const Accounts = lazy(() => import("./pages/Admin/Accounts"));
const BusStops = lazy(() => import("./pages/Admin/BusStops"));
const Refunds = lazy(() => import("./pages/Admin/Refunds"));

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/admin/accounts" element={<Accounts />} />
			<Route path="/admin/busstops" element={<BusStops />} />
			<Route path="/admin/refunds" element={<Refunds />} />
		</Routes>
	);
}

export default App;