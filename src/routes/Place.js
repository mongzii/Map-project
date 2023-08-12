// import axios from "axios";
// import { useEffect } from "react";
import markerdata from "../data.js";
import styled from "styled-components";
import Map from "./Map.js";

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
  /* border: 5px solid blue; */
  display: flex;
  /* flex-direction: column; */
  flex-grow: 6.5;
  justify-content: center;
  align-items: center;
`;

function Place() {
  //console.log(markerdata);
  return (
    <>
      <TotalStyled>
        <MapTitleStyled>지도의 원하는 지점을 클릭해주세요</MapTitleStyled>
        <MapBodyStyled>
          <Map />
        </MapBodyStyled>
      </TotalStyled>
    </>
  );
}
export default Place;
