import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Map, LeafletMap } from 'react-leaflet'
import "../assets/styles/openstreetmap.css";
// import "../assets/styles/openstreetmap_1.css";

const OpenStreetMap = () => {
    return (
        <MapContainer center={[10.99835602, 77.01502627]} zoom={3} >

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
        // <Map center={[51, -1]} zoom={3}>
        //     <TileLayer
        //         url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        //         attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        //     />
        //     <Marker position={[10.99835602, 77.01502627]}>
        //         <Popup>
        //             I am a pop-up!
        //         </Popup>
        //     </Marker>
        // </Map>
    );
}

export default OpenStreetMap;
