import { Header } from "../components/common/Header";
import Footer from "../components/common/Footer";
import 'leaflet/dist/leaflet.css';
import { Circle } from "lucide-react";

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { Button } from "../components/ui/button";
import { createClient } from "@supabase/supabase-js";

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
  const [currentPosition, setCurrentPosition] = useState(null)
  const [isClosed, setIsClosed] = useState(false);
  const [moving, setMoving] = useState(false);
  const [circlePos, setCirclePos] = useState(null);
  const animationRef = React.useRef(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const {latitude, longitude} = position.coords
          setCurrentPosition([latitude, longitude])
        },
        (error) => {
          console.error(error.message)
          setCurrentPosition([-23.55052, -46.633308])
        }
      )
    } else {
      console.warn("Geolocalização não suportada neste navegador.")
      setCurrentPosition([-23.55052, -46.633308]);
    }
  })

  useEffect(() => {
    if (currentPosition) {
      const container = document.getElementById("marker-root");
      if (container) {
        import("react-dom/client").then(({ createRoot }) => {
          const root = createRoot(container);
          root.render(
            <CircleIcon className="w-6 h-6 text-red-600 drop-shadow-md" />
          );
        });
      }
    }
  }, [currentPosition]);

  const animateMovement = () => {
    if (!markers.length || moving) return;
    setMoving(true);

    const points = [currentPosition, ...markers];
    let segment = 0;
    let progress = 0;
    const speed = 0.001; // controle da velocidade

    const animate = () => {
      if (segment >= points.length - 1) {
        setMoving(false);
        cancelAnimationFrame(animationRef.current);
        console.log("Percurso concluído");
        return;
      }

      const [startLat, startLng] = points[segment];
      const [endLat, endLng] = points[segment + 1];

      const lat = startLat + (endLat - startLat) * progress;
      const lng = startLng + (endLng - startLng) * progress;

      setCirclePos([lat, lng]);
      progress += speed;

      if (progress >= 1) {
        progress = 0;
        segment++;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  async function handleCoord(){
    animateMovement();

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
            .insert({id: i + 1, coord_lat: markers[i][0], coord_long: markers[i][1]})
    
          if(error) throw error
    
        } catch (err) {
          console.error("Erro ao registrar:", err.message);
        }
      }
    
    
  }

  const handleMapClick = (coords) => {
    if (!currentPosition) return;
    if (isClosed) return;
  
    let newMarkers = [...markers];
  
    if (newMarkers.length === 0) {
      newMarkers.push(currentPosition);
    }

    const [firstLat, firstLng] = newMarkers[0];
    const [clickedLat, clickedLng] = coords;
    const tolerance = 0.0001;
    const isNearFirst =
      Math.abs(firstLat - clickedLat) < tolerance &&
      Math.abs(firstLng - clickedLng) < tolerance;
  
    if (isNearFirst && newMarkers.length > 1) {
      newMarkers.push(newMarkers[0]);
      setMarkers(newMarkers);
      setIsClosed(true);
      console.log("Trajeto fechado.");
      return;
    }
  
    newMarkers.push(coords);
    setMarkers(newMarkers);
  };

  const customIcon = L.divIcon({
    className: "custom-marker",
    html: `
      <div class="relative flex items-center justify-center">
        <!-- Aura externa -->
        <div class="absolute w-[32px] h-[32px] bg-blue-400 opacity-30 rounded-full animate-pulse"></div>
        <!-- Círculo central -->
        <div class="w-[24px] h-[24px] bg-blue-600 rounded-full border-[2px] border-white shadow-md"></div>
      </div>
    `,
    iconSize: [44, 44],
    iconAnchor: [12, 12],
  });

  return (
    <div>
      <Header />
      <main className="h-[100dvh] pt-[5rem] flex flex-col items-center justify-center">
      {currentPosition ? (
          <MapContainer
            center={currentPosition}
            zoom={15}
            className="relative z-0 h-full w-full"
          >
            {circlePos && (circlePos[0] !== currentPosition[0] || circlePos[1] !== currentPosition[1]) ? (
              <Marker position={circlePos} icon={customIcon} />
            ) : (
              <Marker position={currentPosition} icon={customIcon} />
            )}
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
        ) : (
          <p className="text-center mt-10 text-gray-500">
            Obtendo sua localização...
          </p>
        )}

        <div className="absolute md:bottom-10 md:left-10 bottom-10 flex items-center justify-center gap-4 mt-4 bg-[#fff] h-[5rem] px-[2rem] rounded-[0.5rem]">
          <Button
            className="cursor-pointer text-[black] bg-[--bg-info] border-0 bg-"
            onClick={handleCoord}
          >
            {moving ? "MOVENDO..." : "INICIAR"}
          </Button>

          <Button
            className="bg-red-600 text-white cursor-pointer"
            onClick={() => {
              setMarkers([]);
              setIsClosed(false);
              setCirclePos(currentPosition);
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
