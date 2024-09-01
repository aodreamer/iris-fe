import React, { useEffect, useState, useRef, useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Papa from "papaparse";
import L from "leaflet";
import { MapContext } from "../contexts/MapContext";

import kotaKoordinatJabarCSV from "../kota_koordinat_jabar.csv";

const MapJabar = () => {
  const [locations, setLocations] = useState([]);
  const { selectedCity } = useContext(MapContext);
  const mapRef = useRef(null);
  const markerRefs = useRef({});
  const [activeMarker, setActiveMarker] = useState(null);

  useEffect(() => {
    Papa.parse(kotaKoordinatJabarCSV, {
      download: true,
      header: true,
      delimiter: ";",
      complete: (result) => {
        const data = result.data.map((item) => {
          // Parse latitude and longitude
          const lat = parseFloat(item.latitude) / 1000000;
          const lng = parseFloat(item.longitude) / 1000000;

          // Check if lat and lng are valid numbers
          if (isNaN(lat) || isNaN(lng)) {
            console.error(`Invalid coordinates for ${item.bps_kota_nama}: lat=${lat}, lng=${lng}`);
            return null;
          }

          return {
            id: item.id,
            name: item.bps_kota_nama,
            lat: lat,
            lng: lng,
            jumlahSDNegeri: item["Jumlah SD Negeri"],
            jumlahSDSwasta: item["Jumlah SD Swasta"],
            totalSD: item["Total SD"],
            jumlahPerpusUmum: item["Jumlah Perpustakaan Umum"],
            jumlahPerpusDigital: item["Jumlah Perpustakaan Digital"],
            jumlahPemustaka: item["Jumlah Pemustaka"],
            jumlahMengulang: item["Jumlah Mengulang Sekolah"],
            jumlahPutus: item["Jumlah Putus Sekolah"],
          };
        });
        setLocations(data);

        // Filter out any null values
        setLocations(data.filter((item) => item !== null));
      },
    });
  }, []);

  const getCoordinatesByCity = (cityName) => {
    const city = locations.find((location) => location.name.toLowerCase() === cityName.toLowerCase());
    return city ? { lat: city.lat, lng: city.lng } : null;
  };

  const coordinates = getCoordinatesByCity(selectedCity);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      const city = locations.find((location) => location.name.toLowerCase() === selectedCity.toLowerCase());
      if (coordinates) {
        map.setView([coordinates.lat, coordinates.lng], 9.5);
        setActiveMarker(city.name);
      } else {
        map.setView([-6.875574, 107.5999551], 8.5);
        setActiveMarker(null); // Default center and zoom
      }
    }
  }, [coordinates]);

  return (
    <>
      <div className="h-full row-span-1 text-center text-xl font-bold text-white bg-iris-grey content-center">
        PETA SEBARAN PENDIDIKAN SEKOLAH DASAR DAN LITERASI JABAR
        <br />
        {selectedCity ? (
          coordinates ? (
            <div>
              <p>Nama Kota: {selectedCity}</p>
            </div>
          ) : (
            ""
          )
        ) : (
          "\nTidak ada kota dipilih"
        )}
      </div>
      <div className="row-span-7 rounded-lg">
        <MapContainer
          style={{ height: "100%", borderRadius: "8px" }}
          center={[-6.875574, 107.5999551]}
          zoom={8.5}
          scrollWheelZoom={true}
          ref={mapRef} // Attach map reference
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>' />
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={[location.lat, location.lng]}
              eventHandlers={{
                click: () => {
                  if (activeMarker === location.name) {
                    // If the active marker is clicked, do nothing or handle it
                  } else {
                    // Otherwise, handle the marker click
                  }
                },
              }}
              icon={L.icon({
                iconUrl: "/images/pinpoint.png",
                iconSize: [40, 90], // Menyesuaikan ukuran ikon agar proporsional
                iconAnchor: [25, 90], // Anchor di bagian tengah bawah ikon
                popupAnchor: [0, -125], // Menyesuaikan popup agar muncul di atas ikon
              })}
            >
              <Popup>
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2 text-blue-700">{location.name}</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 12V9H7v3H4v2h3v3h2v-3h3v-2H9z" />
                      </svg>
                      <span>
                        Jumlah SD Negeri: <span className="font-semibold">{location.jumlahSDNegeri}</span>
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 12V9H7v3H4v2h3v3h2v-3h3v-2H9z" />
                      </svg>
                      <span>
                        Jumlah SD Swasta: <span className="font-semibold">{location.jumlahSDSwasta}</span>
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-purple-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 12V9H7v3H4v2h3v3h2v-3h3v-2H9z" />
                      </svg>
                      <span>
                        Total SD: <span className="font-semibold">{location.totalSD}</span>
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 12V9H7v3H4v2h3v3h2v-3h3v-2H9z" />
                      </svg>
                      <span>
                        Jumlah Perpustakaan Umum: <span className="font-semibold">{location.jumlahPerpusUmum}</span>
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-teal-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 12V9H7v3H4v2h3v3h2v-3h3v-2H9z" />
                      </svg>
                      <span>
                        Jumlah Perpustakaan Digital: <span className="font-semibold">{location.jumlahPerpusDigital}</span>
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 12V9H7v3H4v2h3v3h2v-3h3v-2H9z" />
                      </svg>
                      <span>
                        Jumlah Pemustaka: <span className="font-semibold">{location.jumlahPemustaka}</span>
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 12V9H7v3H4v2h3v3h2v-3h3v-2H9z" />
                      </svg>
                      <span>
                        Jumlah Mengulang Sekolah: <span className="font-semibold">{location.jumlahMengulang}</span>
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-cyan-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 12V9H7v3H4v2h3v3h2v-3h3v-2H9z" />
                      </svg>
                      <span>
                        Jumlah Putus Sekolah: <span className="font-semibold">{location.jumlahPutus}</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default MapJabar;
