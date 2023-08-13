import { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import styled from "styled-components";
import Map from "./Map.js";
import markerdata from "../data.js";

const MapComponent = lazy(() => import("./Map.js"));

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
  // console.log(markerdata);
  const [shoplist, setShoplist] = useState([]);
  const handleSelect = () => {
    axios.get(`http://localhost:8080/place`).then(res => {
      // console.log(res.data.dummyData); //여기에 데이터가 배열로 들어있다.
      setShoplist(res.data.dummyData); //
    });
    // console.log("선택되었다");
  };
  useEffect(() => {
    handleSelect();
  }, []);

  return (
    <>
      <TotalStyled>
        <MapTitleStyled>지도의 원하는 지점을 클릭해주세요</MapTitleStyled>
        <MapBodyStyled>
          <Suspense fallback={<div>loading</div>}>
            <MapComponent shoplist={shoplist} />
          </Suspense>
          {/* <Map shoplist={shoplist} /> */}
          {/* <button onClick={handleSelect}>선 택</button> */}
          <button>선 택</button>
          {/* {console.log(shoplist)} */}
        </MapBodyStyled>
      </TotalStyled>
    </>
  );
}
export default Place;
