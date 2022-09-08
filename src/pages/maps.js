import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import "../assets/styles/map.css";
import IconImg from '../images/icon.png';

const AnyReactComponent = ({ text }) => {
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
      <div  tabIndex={0}
      onBlur={() => setShow(false)} 
      >
      {/* <div> */}
        <div className="circle" onClick={() => setShow(true)} style={{ color: 'red' }}></div>
        {show ?
        <a onClick={() => onClickHandler()}  target="_blank">
        <div className="popup">
          <div className="popupContent">
            <img className="popupImage" src={ IconImg } />
            <span className="title">Size 12</span>
            <span className="artist">Size 18</span>
            <a onClick={() => onClickMoreHandler()} className="more">More by this artist</a>
          </div>
        </div> </a>: ""}
      </div>
    </>
  )
};

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 7
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '80vh', width: '80%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={12.979275042131206}
          lng={77.5896855944257}
          text="Bangalore"
        />

        <AnyReactComponent
          lat={13.67202239899338}
          lng={77.7043123530219}
          text="Gudibande"
        />
      </GoogleMapReact>
    </div>
  );
}