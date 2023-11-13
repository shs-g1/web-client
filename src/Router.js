import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Login from "./pages/Login";
import Management from "./pages/Management";
import Mypage from "./pages/Mypage";
import Client from "./pages/Client";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/management" element={<Management />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/client" element={<Client />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
