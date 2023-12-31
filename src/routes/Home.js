import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainStyle = styled.div`
  /* border: 10px solid black; */
  background-color: #f1f0e8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-size: 20px;
  > button {
    background-color: #daf5ff;
    border: 1px solid #daf5ff;
    margin-top: 20px;
    width: 130px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
  }
  > button:hover {
    background-color: #75c2f6;
  }
`;

function Home() {
  const navigator = useNavigate();

  return (
    <>
      <MainStyle>
        <span>👇밑의 버튼을 제발 눌러주세요👇</span>
        <button onClick={() => navigator("/Map-project/place")}>지도</button>
      </MainStyle>
    </>
  );
}
export default Home;
