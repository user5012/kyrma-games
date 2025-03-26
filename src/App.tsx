import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Games from "./pages/Games/Games";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About instagram={"https://instagram.com"} tiktok={"https://tiktok.com"} />} />
      <Route path="/games" element={<Games />} />
    </Routes>
  );
}

export default App;
