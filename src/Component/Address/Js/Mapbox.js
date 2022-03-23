import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import axios from "axios";
import React, { useState, useRef, useCallback } from "react";
import MapGL, { FullscreenControl, GeolocateControl, Marker } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import location from "../Image/location.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/fontawesome-free-solid";

const MAPBOXACCESSTOKEN =
    "pk.eyJ1IjoibG9uZ21haTEwNiIsImEiOiJjbDB4ajZ3cWwwOGxiM2lwajN2MG9kN2p1In0.4PE7Yoc48wF6IEmKGWT--Q";
function Mapbox() {
    const [viewport, setViewport] = useState({
        longitude: 106.8053733958996,
        latitude: 10.880560770336665,
        zoom: 14,
    });

    const mapRef = useRef();
    const handleViewportChange = useCallback((newViewport) => setViewport(newViewport), []);

    const handleGeocoderViewportChange = useCallback(
        (newViewport) => {
            const geocoderDefaultOverrides = { transitionDuration: 2000 };

            return handleViewportChange({
                ...newViewport,
                ...geocoderDefaultOverrides,
            });
        },
        [handleViewportChange]
    );

    const [locateb, setLocateb] = useState();
    // const [flag, setFlag] = useState(0);

    //-----------------------------------------------------------------------------------------------------------

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

    const checkDistance = (url) => {
        axios
            .get(url)
            .then(function (response) {
                console.log(response.data.routes[0].distance / 1000);
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
    };

    // useEffect(() => {
    //     if (!flag) getlocate("số 1 đường võ văn ngân phường linh chiểu thành phố thủ đức");
    // }, [flag]);

    return (
        <div>
            <MapGL
                ref={mapRef}
                {...viewport}
                width="100vw"
                height="100vh"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={handleViewportChange}
                onNativeClick={(e) => {
                    if (
                        e.target.className !== "mapboxgl-ctrl-geocoder--input" &&
                        e.target.className !== "mapboxgl-ctrl-icon"
                    )
                        handleClick(e.lngLat[0], e.lngLat[1]);
                }}
                mapboxApiAccessToken={MAPBOXACCESSTOKEN}
                transitionDuration={20}
            >
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
                            icon={faCrosshairs}
                            size="2x"
                            color="rgb(192, 55, 55)"
                            spin
                        />
                    </Marker>
                ) : (
                    <></>
                )}
                <Geocoder
                    mapRef={mapRef}
                    onViewportChange={handleGeocoderViewportChange}
                    position="top-left"
                    mapboxApiAccessToken={MAPBOXACCESSTOKEN}
                    reverseGeocode={true}
                    enableHighAccuracy={true}
                />

                <FullscreenControl style={{ right: 10, top: 10 }} />
                <GeolocateControl
                    style={{ right: 10, top: 50 }}
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                    auto
                />
            </MapGL>
        </div>
    );
}

export default Mapbox;
