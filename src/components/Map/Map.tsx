import { FunctionComponent } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";
import { useAppContext } from "../../hooks/useAppContext";
import "./Map.scss";

interface MapProps {
    long: number;
    lat: number;
}

const Map: FunctionComponent<MapProps> = ({ lat, long }) => {
    const { isLoaded } = useAppContext();
    const center = { lat: lat, lng: long };
    console.log(center);
    return (
        <div className="Map">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={20}
                >
                    <Marker
                        position={{
                            lat: 43.78709226329809,
                            lng: -79.18961737715792,
                        }}
                    />
                </GoogleMap>
            )}
        </div>
    );
};

export default Map;
