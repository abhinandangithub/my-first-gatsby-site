import React, { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, Map, LeafletMap } from 'react-leaflet'
import "../assets/styles/openstreetmap.css";
// import "../assets/styles/openstreetmap_1.css";
import IconImg from '../images/icon.png';

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
    // className: 'leaflet-div-icon'

});

const AnyReactComponent = ({ position }) => {
    const [show, setShow] = useState(false);
    function showPopup() {
        setShow(true);
    }

    function onClickHandler() {
        window.open('https://support.wwf.org.uk', "_blank");
    }

    function onClickMoreHandler() {
        window.open('https://stackoverflow.com/questions/32553158/detect-click-outside-react-component', "_blank");
    }

    return (
        <>
            <Marker position={position}
                icon={customMarkerIcon}
                eventHandlers={{
                    click: (e) => {
                        console.log('marker clicked', e)
                    },
                }}>
                <Popup>
                    <div className="popup">
                        <div className="popupContent">
                            <img className="popupImage" src={IconImg} />
                            <span className="title">Size 12</span>
                            <span className="artist">Size 18</span>
                            <a onClick={() => onClickMoreHandler()} className="more">More by this artist</a>
                        </div>
                    </div>
                </Popup>
            </Marker>
        </>
    )
};

const DotComponent = () => {
    const [show, setShow] = useState(false);

    return (
        <div className={show ? "circle-blue" : "circle"} onClick={() => { console.log('aaa'); setShow(true) }}></div>
    )
}

const iconMarkup = renderToStaticMarkup(
    <div className="circle"></div>
);
const customMarkerIcon = divIcon({
    html: iconMarkup
});

// const iconMarkupBlue = renderToStaticMarkup(
//     <div className="circle-blue"></div>
// );
// const customMarkerIconBlue = divIcon({
//     html: iconMarkupBlue
// });

const OpenStreetMap = () => {
    const [show, setShow] = useState(false);
    function showPopup() {
        setShow(true);
    }

    function onClickHandler() {
        window.open('https://support.wwf.org.uk', "_blank");
    }

    function onClickMoreHandler() {
        window.open('https://stackoverflow.com/questions/32553158/detect-click-outside-react-component', "_blank");
    }


    return (
        <MapContainer center={[10.99835602, 77.01502627]} zoom={3} >

            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <AnyReactComponent position={[10.99835602, 77.01502627]} />
            <AnyReactComponent position={[13.67202239899338, 77.7043123530219]} />

            {/* <Marker
                position={[10.99835602, 77.01502627]}
                eventHandlers={{
                    click: (e) => {
                        console.log('marker clicked', e)
                    },
                }}>
                <Popup>
                    <AnyReactComponent />
                </Popup>
            </Marker>

            <Marker position={[13.67202239899338, 77.7043123530219]}
                icon={customMarkerIcon}
                eventHandlers={{
                    click: (e) => {
                        console.log('marker clicked', e)
                    },
                }}>
                <Popup>
                    <AnyReactComponent />
                </Popup>
            </Marker> */}

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
