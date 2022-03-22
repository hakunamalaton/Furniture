import React, { useState, useEffect } from "react";
import axios from "axios";
import Map, { Marker } from "react-map-gl";
// import Geocoder from "react-mapbox-gl-geocoder";
import location from "../Image/location.png";

function Mapbox() {
    const [viewport, setViewport] = useState({
        longitude: 106.7557953,
        latitude: 10.851061,
        zoom: 18,
    });

    const addressdata = [
        {
            id: 2,
            address: "số 20 đường trần quốc tuấn phường tứ hạ thị xã hương trà tỉnh thừa thiên huế",
        },
        {
            id: 1,
            address: "đường võ văn ngân phường linh chiểu thành phố thủ đức",
        },
    ];

    const [addressMarker, setaddressMarker] = useState([]);

    useEffect(() => {
        addressdata.map((address) => {
            axios
                .get(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${address.address}.json?access_token=pk.eyJ1IjoibG9uZ21haTEwNiIsImEiOiJjbDB4ajZ3cWwwOGxiM2lwajN2MG9kN2p1In0.4PE7Yoc48wF6IEmKGWT--Q`
                )
                .then(function (response) {
                    console.log(response);
                    setaddressMarker((addressMarker) => [
                        ...addressMarker,
                        {
                            ...address,
                            longitude: response.data.features[0].center[0],
                            latitude: response.data.features[0].center[1],
                        },
                    ]);
                });
        });
    }, []);

    return (
        <Map
            initialViewState={{ ...viewport }}
            style={{ width: "100vw", height: "100vh" }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={(viewport) => setViewport(viewport)}
            mapboxAccessToken="pk.eyJ1IjoibG9uZ21haTEwNiIsImEiOiJjbDB4ajZ3cWwwOGxiM2lwajN2MG9kN2p1In0.4PE7Yoc48wF6IEmKGWT--Q"
        >
            {addressMarker.map((addressmk) => (
                <Marker
                    key={addressmk.id}
                    longitude={addressmk.longitude}
                    latitude={addressmk.latitude}
                    mapboxAccessToken="pk.eyJ1IjoibG9uZ21haTEwNiIsImEiOiJjbDB4ajZ3cWwwOGxiM2lwajN2MG9kN2p1In0.4PE7Yoc48wF6IEmKGWT--Q"
                >
                    <img
                        src={location}
                        alt="marker"
                        style={{ height: 50, width: 50, cursor: "pointer" }}
                    />
                </Marker>
            ))}
        </Map>
    );
}

export default Mapbox;

// import "mapbox-gl/dist/mapbox-gl.css";
// import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import React, { useState, useRef, useCallback } from "react";
// import Map from "react-map-gl";
// import Geocoder from "react-map-gl-geocoder";

// const MAPBOX_TOKEN =
//     "pk.eyJ1IjoibG9uZ21haTEwNiIsImEiOiJjbDB4ajZ3cWwwOGxiM2lwajN2MG9kN2p1In0.4PE7Yoc48wF6IEmKGWT--Q";

// const Mapbox = () => {
//     const [viewport, setViewport] = useState({
//         latitude: 37.7577,
//         longitude: -122.4376,
//         zoom: 8,
//     });
//     const mapRef = useRef();
//     const handleViewportChange = useCallback((newViewport) => setViewport(newViewport), []);

//     // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
//     const handleGeocoderViewportChange = useCallback(
//         (newViewport) => {
//             const geocoderDefaultOverrides = { transitionDuration: 1000 };

//             return handleViewportChange({
//                 ...newViewport,
//                 ...geocoderDefaultOverrides,
//             });
//         },
//         [handleViewportChange]
//     );

//     return (
//         <div style={{ height: "100vh" }}>
//             <Map
//                 ref={mapRef}
//                 {...viewport}
//                 width="100%"
//                 height="100%"
//                 onViewportChange={handleViewportChange}
//                 mapboxAccessToken={MAPBOX_TOKEN}
//             >
//                 <Geocoder />
//             </Map>
//         </div>
//     );
// };

// export default Mapbox;
