import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
import "./openstreetmap";

const OpenStreetMap = () => {
    return (
        <MapContainer center={[10.99835602, 77.01502627]} zoom={7} >

            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[10.99835602, 77.01502627]}>
                <Popup>
                    I am a pop-up!
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default OpenStreetMap;
