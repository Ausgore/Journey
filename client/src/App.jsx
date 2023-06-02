import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const Admin = lazy(() => import("./pages/Admin"));

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/admin" element={<Admin />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;