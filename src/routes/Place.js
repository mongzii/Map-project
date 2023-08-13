import { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setMarker } from "../redux/store.js";

const MapComponent = lazy(() => import("./Map.js"));

const TotalStyled = styled.section`
  /* background-color: #f8f0e5; */
  background-color: #f1f0e8;
  /* border: 5px solid black; */
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
  flex-direction: column;
  flex-grow: 6.5;
  align-items: center;
  justify-content: center;
  > button {
    width: 220px;
    height: 35px;
    border-radius: 3px;
    border: 1px solid white;
    margin-top: 20px;
    cursor: pointer;
    font-size: 18px;
  }
  > button:hover {
    /* background-color: #b8e7e1; */
    background-color: #75c2f6;
  }
`;

function Place() {
  // console.log(markerdata);
  const [shoplist, setShoplist] = useState([]);
  const dispatch = useDispatch();
  const [select, setSelect] = useState("");

  const navigator = useNavigate();

  const markerGroup = () => {
    axios
      .get(`http://localhost:8080/place`)
      .then(res => {
        // console.log(res.data.dummyData); //여기에 데이터가 배열로 들어있다.
        setShoplist(res.data.dummyData); //
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    markerGroup();
  }, []);

  const handleSelect = () => {
    dispatch(setMarker(select));
    navigator("/Map-project/pay");
  };

  return (
    <>
      <TotalStyled>
        <MapTitleStyled>
          {select && select.title !== null ? (
            <p>{select.title}</p>
          ) : (
            <p>픽업 매장을 선택하세요</p>
          )}
        </MapTitleStyled>
        <MapBodyStyled>
          <Suspense fallback={<div>loading</div>}>
            <MapComponent shoplist={shoplist} setSelect={setSelect} />
          </Suspense>
          <button onClick={handleSelect}>선 택</button>
        </MapBodyStyled>
      </TotalStyled>
    </>
  );
}
export default Place;
