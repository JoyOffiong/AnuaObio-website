import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const MapReport = () => {
  const defaultCenter = [5.015825382375328, 7.887846954694571];

  // Fix: Explicitly set marker icon
  const DefaultIcon = new L.Icon({
    iconUrl,
    iconRetinaUrl,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <MapContainer center={defaultCenter} zoom={20} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Ensure Marker uses the correct icon */}
      <Marker position={defaultCenter} icon={DefaultIcon}>
          <Popup> Default Marker at {defaultCenter.join(", ")} </Popup>
        </Marker>

        <CircleMarker center={defaultCenter} color="green" fillColor="red" radius={10} fillOpacity={0.5}>
          <Popup> Highlighted Location </Popup>
        </CircleMarker>
    </MapContainer>
  );
};

export default MapReport;
