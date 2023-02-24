import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { publicRoutes } from "../routes";
import { MAINPAGE_ROUTE } from "../utils/consts";
import { a } from "react-spring";


const AppRouter = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])


  return (
    <div>
        <a.div>
          <Routes>
            {publicRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={MAINPAGE_ROUTE} replace />} />
          </Routes>
        </a.div>
    
    </div>
  );
};

export default AppRouter;
