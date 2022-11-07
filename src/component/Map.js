/*global kakao*/
import React from 'react'
import { useEffect } from 'react';

const Map = () => {

    // 카카오 맵..!!
    useEffect(() => {
        let container = document.getElementById('map');
        let options = {
            center: new kakao.maps.LatLng(37.652812005973814, 127.05164602532378 ),
            level: 3
        };
        let map = new kakao.maps.Map(container, options);

        let markerPosition = new kakao.maps.LatLng(37.652812005973814, 127.05164602532378 );
       
        let marker = new kakao.maps.Marker({
            position: markerPosition,
        });
        marker.setMap(map);
    }, [])


    return (
        <div>
            <div id="map" style={{ width: "500px", height: "400px" }}></div>
        </div>
    )
}

export default Map