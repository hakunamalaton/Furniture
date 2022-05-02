import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import axios from "axios";
import "../mapbox.css";
import React, { useState, useRef, useCallback, useEffect } from "react";
import Geocoder from "react-map-gl-geocoder";
import MapGL, {
    FullscreenControl,
    GeolocateControl,
    Marker,
    NavigationControl,
    Popup,
} from "react-map-gl";
import location from "../Image/location.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStreetView } from "@fortawesome/fontawesome-free-solid";

const MAPBOXACCESSTOKEN =
    "pk.eyJ1IjoibG9uZ21haTEwNiIsImEiOiJjbDB4ajZ3cWwwOGxiM2lwajN2MG9kN2p1In0.4PE7Yoc48wF6IEmKGWT--Q";

function Mapbox(props) {
    // Set initial viewport for Mapbox
    const [viewport, setViewport] = useState({
        longitude: 106.8053733958996,
        latitude: 10.880560770336665,
        zoom: 14,
    });

    const mapRef = useRef();
    const handleViewportChange = useCallback((newViewport) => setViewport(newViewport), []);

    const handleGeocoderViewportChange = useCallback((newViewport) => {
        const geocoderDefaultOverrides = { transitionDuration: 1000 };

        return handleViewportChange({
            ...newViewport,
            ...geocoderDefaultOverrides,
        });
    }, []);
    //---------------------------------------------------------------------------------------------

    const [locateb, setLocateb] = useState();
    const [fullScreenFlag, setFullScreenFlag] = useState(false);

    // Get Address from Coordinates Function
    const [choosenAdd, setChoosenAdd] = useState("");
    const getAddress = (lng, lat) => {
        axios
            .get(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${MAPBOXACCESSTOKEN}`
            )
            .then(function (response) {
                setChoosenAdd(response.data.features[0].place_name);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    //-----------------------------------------------------------------------------------------------------------
    // Get Coordinates from Address Function

    // const getlocate = (addre) => {
    //     axios
    //         .get(
    //             `https://api.mapbox.com/geocoding/v5/mapbox.places/"${addre}".json?country=vn&access_token=${MAPBOXACCESSTOKEN}`
    //         )
    //         .then(function (response) {
    //             setLocateb({
    //                 longitude: response.data.features[0].center[0],
    //                 latitude: response.data.features[0].center[1],
    //             });
    //             // setFlag(1);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // };

    //-----------------------------------------------------------------------------------------------------------

    const [distance, setDistance] = useState(0);
    const checkDistance = (url) => {
        axios
            .get(url)
            .then(function (response) {
                setDistance(response.data.routes[0].distance / 1000);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleClick = (lng, lat) => {
        checkDistance(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${lng},${lat};106.8053733958996,10.880560770336665,?geometries=geojson&access_token=${MAPBOXACCESSTOKEN}`
        );
        setLocateb({ longitude: lng, latitude: lat });
        getAddress(lng, lat);
    };

    const gotoChoosenPlace = () => {
        setViewport({
            longitude: locateb.longitude,
            latitude: locateb.latitude,
            zoom: 14,
        });
    };

    useEffect(() => {
        if (choosenAdd && distance) props.ParentcallbackFunction({ choosenAdd, distance });
    }, [choosenAdd, distance]);

    return (
        <div>
            <MapGL
                ref={mapRef}
                {...viewport}
                width="100%"
                height="40vh"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={handleViewportChange}
                onNativeClick={(e) => {
                    if (e.target.className === "overlays") {
                        handleClick(e.lngLat[0], e.lngLat[1]);
                    }
                    if (e.target.className === "mapboxgl-ctrl-icon") {
                        setFullScreenFlag(!fullScreenFlag);
                    }
                }}
                mapboxApiAccessToken={MAPBOXACCESSTOKEN}
                transitionDuration={20}
            >
                <Geocoder
                    mapRef={mapRef}
                    onViewportChange={handleGeocoderViewportChange}
                    mapboxApiAccessToken={MAPBOXACCESSTOKEN}
                    position="top-left"
                    reverseGeocode={true}
                    country="vn"
                />
                <Marker
                    longitude={106.80618697610669}
                    latitude={10.879752117974931}
                    mapboxApiAccessToken={MAPBOXACCESSTOKEN}
                    offsetLeft={-25}
                    offsetTop={-40}
                >
                    <img src={location} alt="marker" style={{ height: 50, width: 50 }} />
                </Marker>
                {locateb ? (
                    <Marker
                        longitude={locateb && locateb.longitude}
                        latitude={locateb && locateb.latitude}
                        draggable={true}
                        mapboxApiAccessToken={MAPBOXACCESSTOKEN}
                        onDragEnd={(e) => handleClick(e.lngLat[0], e.lngLat[1])}
                        offsetLeft={-15}
                        offsetTop={-25}
                    >
                        <FontAwesomeIcon
                            icon={faStreetView}
                            size="2x"
                            color="#04CE6D"
                            className="animationMarker"
                        />
                    </Marker>
                ) : (
                    <></>
                )}

                <FullscreenControl style={{ right: 10, bottom: 10 }} />
                <NavigationControl style={{ right: 10, bottom: 50 }} />

                <GeolocateControl
                    style={{ right: 10, bottom: 150 }}
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                    auto
                />
                <button
                    className="choosen-position"
                    onClick={gotoChoosenPlace}
                    style={{ position: "absolute", right: 10, bottom: 190 }}
                    title="Find My Choosen Location"
                >
                    <FontAwesomeIcon
                        icon={faStreetView}
                        color="#04CE6D"
                        style={{ width: "25px" }}
                    />
                </button>

                {locateb && fullScreenFlag ? (
                    <Popup
                        className="font-weight-bold"
                        longitude={locateb && locateb.longitude}
                        latitude={locateb && locateb.latitude}
                        closeButton={false}
                        anchor="bottom"
                        offsetTop={-25}
                    >
                        <div>{props.address ? props.address : choosenAdd}</div>
                        <div>{`Distance: ${distance.toFixed(2)} km`}</div>
                        <div>{`Price: ${10}$`}</div>
                    </Popup>
                ) : (
                    <></>
                )}
            </MapGL>
        </div>
    );
}

export default Mapbox;
