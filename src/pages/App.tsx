import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useScrollSmooth } from "../hooks/useScrollSmooth";
import { Home } from "./Home";

export const App: React.FC = () => {
  useScrollSmooth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
