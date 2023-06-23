import React, { useState, useCallback } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

export default function Map({ width, height, marker, setMarker, clickedAddress, setClickedAddress }) {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: import.meta.env.VITE_GOOGLEMAPS_APIKEY
	});

	const setMap = useState(null)[1];
	const onLoad = useCallback(function callback(map) {
		map.fitBounds(new window.google.maps.LatLngBounds({ lat: 1.3521, lng: 103.8198 }));
		setMap(map);
		setTimeout(() => map.setZoom(11), 100);
	});
	const onUnmount = React.useCallback(() => setMap(null));

	const handleMarkerClick = async function (event) {
		try {
			const { latLng } = event;
			const geocoder = new window.google.maps.Geocoder();
			const response = await new Promise(function (resolve) {
				geocoder.geocode({ location: latLng }, function([result], stat) {
					if (stat == window.google.maps.GeocoderStatus.OK) resolve(result.formatted_address);
				});
			});
			setClickedAddress(response);
			setMarker({ lat: latLng.lat(), lng: latLng.lng() });
		}
		catch (error) {
			console.error("Geocoding error: ", error);
		}
	}

	return isLoaded ? (
		<GoogleMap
				onClick={handleMarkerClick}
				mapContainerStyle={{ width: width, height: height }}
				onLoad={onLoad}
				zoom={10}
				onUnmount={onUnmount}
				options={{mapTypeControlOptions: { mapTypeIds: ["roadmap"]} }}
			>
				{marker && <Marker position={marker} />}
		</GoogleMap>
	) : <></>
}