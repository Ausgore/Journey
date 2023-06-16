import AdminPanel from "../../components/AdminPanel";
import Map from "../../components/Map";

export default function BusStops() {
	return (
		<AdminPanel>
			<Map width={400} height={400} />
		</AdminPanel>
	);
}
