import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./routes/Map";
import Home from "./routes/Home";
import Place from "./routes/Place";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Map-project" element={<Home />} />
          <Route path="/Map-project/map" element={<Map />} />
          <Route path="/Map-project/place" element={<Place />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
