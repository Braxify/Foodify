import { Navbar } from "components/Navbar";
import { Favourites } from "pages/Favourites";
import { RandomDish } from "pages/RandomDish";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export function Routing() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RandomDish />} />
        <Route path="/random" element={<RandomDish />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </Router>
  );
}
