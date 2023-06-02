import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import Loading from "./pages/Loading.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Suspense fallback={<Loading />}>
			<Router>
				<App />
			</Router>
		</Suspense>
	</StrictMode>
);
