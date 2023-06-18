import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";
import RootWrapper from "../components/RootWrapper";
import Main from "../views/Main";

const RouteWrapper: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.main} element={<RootWrapper />}>
        <Route path={ROUTES.main} element={<Main />} />
      </Route>
      <Route path="*" element={<Navigate to={ROUTES.main} />} />
    </Routes>
  );
};

export default RouteWrapper;
