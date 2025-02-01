import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSingup from "./pages/UserSingup";
import Captainlogin from "./pages/Captainlogin";
import CaptainSingup from "./pages/CaptainSingup";
import UnderHome from "./pages/UnderHome";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSingup />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<CaptainSingup />} />
      </Routes>
      {/* <UnderHome /> */}
    </div>
  );
};

export default App;
