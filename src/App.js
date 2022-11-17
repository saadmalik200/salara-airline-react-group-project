import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
