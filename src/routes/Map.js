import { useEffect } from "react";
// import markerdata from "../data.js";

function MapComponent({ shoplist, setSelect }) {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(
        37.32569664033685,
        127.10734442799804
      ), //죽전역
      level: 5,
    };
    const map = new window.kakao.maps.Map(container, options);

    //사용자 현재위치 정보
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude,
          lon = position.coords.longitude;

        const locPosition = new window.kakao.maps.LatLng(lat, lon),
          message = "<div>현재위치</div>";

        displayMarker(locPosition, message);
      });
    } else {
      const locPosition = new window.kakao.maps.LatLng(
          37.57022168346011,
          126.98314742271637
        ), //종각역
        message = "<div>여기아니에요</div>";

      displayMarker(locPosition, message);
    }

    function displayMarker(locPosition, message) {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: locPosition,
      });
      const iwContent = message,
        iwRemoveable = true;

      const infowindow = new window.kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });
      infowindow.open(map, marker);
      map.setCenter(locPosition);
    }
    // console.log(shoplist);
    shoplist.forEach(el => {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(el.lat, el.lng),
        data: el.data,
      });

      const content =
        '<div className="overlayContainer" style="background-color: white; border:3px solid black">' +
        `<div style="color: black;" >${el.title}</div>` +
        `<div className="shopPhone">${el.phone}</div>` +
        "</div>";

      const customOverlay = new window.kakao.maps.CustomOverlay({
        content: content,
        position: new window.kakao.maps.LatLng(el.lat, el.lng),
      });

      window.kakao.maps.event.addListener(marker, "mouseover", () => {
        customOverlay.setMap(map);
      });

      window.kakao.maps.event.addListener(marker, "mouseout", () => {
        customOverlay.setMap(null);
      });
      window.kakao.maps.event.addListener(marker, "click", () => {
        setSelect(el);
      });
    });
  }, [shoplist]);
  return (
    <>
      <div id="map" style={{ width: "800px", height: "500px" }}></div>
      {/* {console.log(markerdata)} */}
      {/* {console.log(shoplist)} */}
    </>
  );
}
export default MapComponent;
