import { useNavigate } from "react-router-dom";

function Home() {
  const navigator = useNavigate();

  return (
    <>
      <span>Home이다</span>
      <button onClick={() => navigator("/Map-project/map")}>지도</button>
    </>
  );
}
export default Home;
