import { Link } from "react-router-dom";

function NotFound() {
	return (
		<>
			<Link to="/"> Home Page </Link>
			<br />
			<Link to="/admin/accounts"> Accounts Page </Link>
			<h1> 404 - This is not the web page you are looking for. </h1>
		</>
	)
}

export default NotFound;