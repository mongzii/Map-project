import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./routes/Map";
import Home from "./routes/Home";
import Place from "./routes/Place";
import Pay from "./routes/Pay";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Map-project" element={<Home />} />
          {/* <Route path="/Map-project/map" element={<Map />} /> */}
          <Route path="/Map-project/place" element={<Place />} />
          <Route path="/Map-project/pay" element={<Pay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
