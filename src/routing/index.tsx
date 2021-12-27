import { Navbar } from "components/Navbar";
import { ROUTE } from "enums/routes";
import { Favourites } from "pages/Favourites";
import { RandomDish } from "pages/RandomDish";
import { HashRouter, Route, Routes } from "react-router-dom";

export function Routing() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path={ROUTE.HOME} element={<RandomDish />} />
        <Route path={ROUTE.RANDOM} element={<RandomDish />} />
        <Route path={ROUTE.FAVOURITES} element={<Favourites />} />
      </Routes>
    </HashRouter>
  );
}
