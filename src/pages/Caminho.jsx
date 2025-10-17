import { Header } from "../components/common/Header";
import Footer from "../components/common/Footer";
import 'leaflet/dist/leaflet.css';

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { Button } from "../components/ui/button";
import { createClient } from "@supabase/supabase-js";

// Corrige os ícones do Leaflet no React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

const LocationMarker = ({ onMapClick }) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      onMapClick([lat, lng]);
    },
  });

  return null;
};

export function Caminho() {
  const [markers, setMarkers] = useState([]);
  const [isClosed, setIsClosed] = useState(false);

  async function handleCoord(){
    try {
      const { error } = await supabase.rpc('truncate_robots')
      if (error) {
        console.error("Erro ao truncar:", error.message)
      } else {
        console.log("Tabela truncada com sucesso!")
      }
    } catch (err) {
      console.error("Erro inesperado:", err.message)
    }

    for(let i = 0; i <= markers.length; i++){

        try{
          const { error } = await supabase
            .from('robots')
            .insert({id: i + 1, name: 'teste', coord_lat: markers[i][0], coord_long: markers[i][1], iduser: null })
    
          if(error) throw error
    
        } catch (err) {
          console.error("Erro ao registrar:", err.message);
        }
      }
  }

  const handleMapClick = (coords) => {
    if (isClosed) return; // Se o caminho foi fechado, não adiciona mais pontos

    if (markers.length > 0) {
      const [firstLat, firstLng] = markers[0];
      const [clickedLat, clickedLng] = coords;

      const tolerance = 0.0001;
      const isNearFirst =
        Math.abs(firstLat - clickedLat) < tolerance &&
        Math.abs(firstLng - clickedLng) < tolerance;

      if (isNearFirst) {
        // Fecha o trajeto adicionando o ponto inicial novamente
        setMarkers([...markers, markers[0]]);
        setIsClosed(true);
        console.log("Trajeto fechado.");
        return;
      }
    }

    setMarkers([...markers, coords]);
  };

  return (
    <div>
      <Header />
      <main className="h-[100dvh] pt-[5rem] flex flex-col items-center justify-center">
        <MapContainer
          center={[-23.55052, -46.633308]}
          zoom={13}
          className="relative z-0 h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          <LocationMarker onMapClick={handleMapClick} />
          {markers.map((position, idx) => (
            <Marker key={idx} position={position} />
          ))}
          {markers.length > 1 && (
            <Polyline positions={markers} color="blue" />
          )}
        </MapContainer>

        <div className="absolute md:bottom-10 md:left-10 bottom-10 flex items-center justify-center gap-4 mt-4 bg-[#fff] h-[5rem] px-[2rem] rounded-[0.5rem]">
          <Button
            className="cursor-pointer text-[black] bg-[--bg-info] border-0 bg-"
            onClick={handleCoord}
          >
            INICIAR
          </Button>

          <Button
            className="bg-red-600 text-white cursor-pointer"
            onClick={() => {
              setMarkers([]);
              setIsClosed(false);
            }}
          >
            REINICIAR
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
