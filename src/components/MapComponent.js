import React, { useEffect, useRef } from 'react';
import '../styles/mapComponent.css';

const MapComponent = ({ address }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // 카카오맵 API 로드 체크
    if (window.kakao && window.kakao.maps) {
      initMap();
    } else {
      // 카카오맵 API 스크립트 동적 로드
      const script = document.createElement('script');
      script.async = true;
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_API_KEY&libraries=services&autoload=false`;
      document.head.appendChild(script);
      
      script.onload = () => {
        window.kakao.maps.load(initMap);
      };
    }
  }, [address]);

  const initMap = () => {
    if (!mapRef.current) return;

    const { kakao } = window;
    
    // 기본 위치 (서울시청)
    const defaultPosition = new kakao.maps.LatLng(37.5665, 126.9780);
    
    const options = {
      center: defaultPosition,
      level: 3
    };

    const map = new kakao.maps.Map(mapRef.current, options);
    
    // 주소 검색
    if (address) {
      const geocoder = new kakao.maps.services.Geocoder();
      
      geocoder.addressSearch(address, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          
          // 마커 생성
          const marker = new kakao.maps.Marker({
            map: map,
            position: coords
          });

          // 인포윈도우 생성
          const infowindow = new kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;">${address}</div>`
          });
          
          infowindow.open(map, marker);
          
          // 지도 중심을 마커 위치로 이동
          map.setCenter(coords);
        }
      });
    }
  };

  return (
    <div className="map-wrapper">
      <div ref={mapRef} className="kakao-map"></div>
    </div>
  );
};

export default MapComponent;