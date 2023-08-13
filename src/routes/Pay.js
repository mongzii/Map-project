import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainStyle = styled.div`
  border: 1px solid black;
  background-color: #f1f0e8;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

function Pay() {
  const navigator = useNavigate();

  return (
    <>
      <MainStyle>
        원래 결제창이 뜹니다.....😭😭😭
        <button onClick={() => navigator("/Map-project")}>Home</button>
      </MainStyle>
    </>
  );
}

export default Pay;
