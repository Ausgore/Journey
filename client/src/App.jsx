import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const ViewRoutes = lazy(() => import("./pages/Customer/ViewRoutes"));
const About = lazy(() => import("./pages/Customer/About"));
const Forums = lazy(() => import("./pages/Customer/Forums"));
const FAQ = lazy(() => import("./pages/Customer/FAQ"));
const Accounts = lazy(() => import("./pages/Admin/Accounts"));
const BusStops = lazy(() => import("./pages/Admin/BusStops"));
const Refunds = lazy(() => import("./pages/Admin/Refunds"));

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/user/viewroutes" element={<ViewRoutes />} />
			<Route path="/user/about" element={<About />} />
			<Route path="/user/forums" element={<Forums />} />
			<Route path="/user/faq" element={<FAQ />} />
			<Route path="/admin/accounts" element={<Accounts />} />
			<Route path="/admin/busstops" element={<BusStops />} />
			<Route path="/admin/refunds" element={<Refunds />} />
		</Routes>
	);
}

export default App;