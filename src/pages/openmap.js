import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
// import { useHasMounted } from "gatsby-theme-catalyst-core"

import L from 'leaflet';

const iconPerson = new L.Icon({

    // width: "10px",
    // height: "10px",
    // background: "red",
    // borderRadius: "50%"

    // iconUrl: require('../images/icon.png'),
    // iconRetinaUrl: require('../images/icon.png'),
    // iconAnchor: null,
    // popupAnchor: null,
    // shadowUrl: null,
    // shadowSize: null,
    // shadowAnchor: null,
    // iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'

});
const Map = () => {
    return (
        <div>
            {true && (
                <MapContainer
                    center={[51.505, -0.09]}
                    zoom={13}
                    style={{ height: "400px" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            )}
        </div>
    )
}

export default Map