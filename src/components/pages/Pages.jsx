import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipie from "./Recipie";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
  return (
    <AnimatePresence >
    <Routes  >
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipie/:name" element={ <Recipie />} />

      {/* <Route path="/" element={ <Home />} /> */}
    </Routes>
    </AnimatePresence>
  );
}

export default Pages;
