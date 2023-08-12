// import axios from "axios";
// import { useEffect } from "react";
import { useState } from "react";
import markerdata from "../data";

// import selectMarket from "../selectMarket.js";
import styled from "styled-components";
import Map from "./Map.js";
import { useDispatch } from "react-redux";
import { setMarker } from "../redux/store.js";

const TotalStyled = styled.section`
  border: 5px solid black;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MapTitleStyled = styled.div`
  /* border: 5px solid red; */
  width: 500px;
  height: 50px;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: flex-end;
  margin-top: 80px;
  font-size: 30px;
  font-weight: 500;
`;

const MapBodyStyled = styled.div`
  border: 5px solid blue;
  display: flex;
  flex-direction: column;
  flex-grow: 6.5;
  align-items: center;
  justify-content: center;
  > button {
    width: 200px;
  }
`;

function Place() {
  console.log(markerdata);

  const [shoplist, setShopList] = useState([]);
  const [select, setSelect] = useState(null);
  // const [selectedMarker, setSelectedMarker] = useState(null);

  const dispatch = useDispatch();

  const handleMarkerClick = markerInfo => {
    dispatch(setMarker(markerInfo));
  };

  const handleSelect = () => {
    // setSelect(select);
    // dispatch(setMarker(select));
    // console.log(select);
    console.log("선택되었다");
  };

  return (
    <>
      <TotalStyled>
        <MapTitleStyled>지도의 원하는 지점을 클릭해주세요</MapTitleStyled>
        <MapBodyStyled>
          <Map onMarkerClick={handleMarkerClick} />
          <button onClick={handleSelect}>선 택</button>
        </MapBodyStyled>
      </TotalStyled>
    </>
  );
}
export default Place;
