import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { publicRoutes } from "../routes";
import { MAINPAGE_ROUTE } from "../utils/consts";
import { a, useTransition } from "react-spring";

const AppRouter = () => {
  const location = useLocation();
  const transition = useTransition(location.pathname, {
    config: {  duration: 600,  mass: 1, tension: 120, friction: 14 },
    // from: { opacity: 0, transform: "scale3d(0,0,0)" },
    // enter: { opacity: 1, transform: "scale3d(1,1,1)" },
    // leave: { opacity: .1, transform: "scale3d(0,0,0)" },
    from: {
      opacity: 0,
      position: "absolute",
      width: " 0%",
      left: " 0%",
    
      // transform: `translate3d(100%, 0, 0)`
    },
    enter: {
      config: {  duration: 700 },
      opacity: 1,
      width: " 100%",
       

      //  transform: 'translate3d(0, 0, 0)'
    },
    update: {
      config: {  duration: 400 },
      opacity: 1,
      width: " 100%",
      

      //  transform: 'translate3d(0, 0, 0)'
    },
    leave: {
      opacity: 0,
      width: "  0%",
     

      // transform: `translate3d(-50%, 0, 0)`
    },
  });

  return (
    <div>
      {transition((styles) => (
        <a.div style={styles}>
          <Routes>
            {publicRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={MAINPAGE_ROUTE} replace />} />
          </Routes>
        </a.div>
      ))}
    </div>
  );
};

export default AppRouter;
