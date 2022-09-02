import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import "../assets/styles/map.css";

const AnyReactComponent = ({ text }) => {
//   const [show, setShow] = useState(false);
//   function showPopup() {
//     setShow(true);
//   }
  return (
    <>
      {/* <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} style={{ color: 'red' }}>{text}</div> */}
        <div className="circle"></div>
      {/* {show ? <div style={{ color: 'green' }}>
        DETAILS
      </div> : ""} */}
    </>
  )
};

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '80vh', width: '80%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }} // to do
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={12.979275042131206}
          lng={77.5896855944257}
          text="Bangalore"
        />

        {/* <AnyReactComponent
          lat={13.67202239899338}
          lng={77.7043123530219}
          text="Gudibande"
        /> */}
      </GoogleMapReact>
    </div>
  );
}