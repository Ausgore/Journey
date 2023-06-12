import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import Loading from "./pages/Loading.jsx";
import "./main.scss";
import { StyledEngineProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<StyledEngineProvider injectFirst>
			<Router>
				<Suspense fallback={<Loading />}>
					<App />
				</Suspense>
			</Router>
		</StyledEngineProvider>
	</StrictMode>
);