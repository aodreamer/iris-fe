import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapJabar = () => {
  return (
    <>
      <div className="h-full row-span-1 text-center text-xl font-bold text-iris-dark-grey bg-iris-grey content-center">PETA SEBARAN PENDIDIKAN SEKOLAH DASAR DAN LITERASI JABAR</div>
      <div className="row-span-7 rounded-lg">
        <MapContainer style={{ height: "100%", borderRadius: "8px" }} center={[-6.875574, 107.5999551]} zoom={8} scrollWheelZoom={true}>
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>' />
        </MapContainer>
      </div>
    </>
  );
};

export default MapJabar;
