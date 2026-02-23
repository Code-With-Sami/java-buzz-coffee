"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapPin, Car, Navigation } from 'lucide-react';

// Fix for default marker icons in Leaflet + Next.js
const icon = L.icon({ iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png', shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png', iconSize: [25, 41], iconAnchor: [12, 41] });

export default function MapSection() {
  const position: [number, number] = [40.7128, -74.0060]; // Example: NYC coordinates

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-primary mb-12 text-center">Visit the Buzz</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/5">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={position} icon={icon}>
                <Popup>Java Buzz Coffee <br /> Best brews in town.</Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Location Info (Required by PDF) */}
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="bg-accent/10 p-4 rounded-2xl text-accent"><MapPin size={30} /></div>
              <div>
                <h3 className="text-2xl font-bold text-primary">Our Address</h3>
                <p className="text-gray-600">123 Espresso Street, Coffee District, Metro City 10001</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="bg-accent/10 p-4 rounded-2xl text-accent"><Navigation size={30} /></div>
              <div>
                <h3 className="text-2xl font-bold text-primary">Directions</h3>
                <p className="text-gray-600">Located just two blocks east of the Metro Station. Look for the green awning.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="bg-accent/10 p-4 rounded-2xl text-accent"><Car size={30} /></div>
              <div>
                <h3 className="text-2xl font-bold text-primary">Parking Information</h3>
                <p className="text-gray-600">Free street parking available after 6 PM. Dedicated valet parking behind the building for customers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}