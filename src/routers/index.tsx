import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/prod/Home";
import DevHome from "../pages/dev/DevHome";

export const HomeRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export const DevRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DevHome />} />
    </Routes>
  );
};
