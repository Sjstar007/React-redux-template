import React, { useState, Suspense } from "react";
import Header from "./header/header.jsx";
import SideBar from "./sidebar/sidebar.jsx";
import classes from "./layout.module.scss";
import routingConfig from "../../../routes/index";
import { GlobalContext } from "../../../context/globalContext";
import { Routes, Route } from "react-router-dom";

export default function Layout() {

  const [globalContext, setGlobalContext] = useState({
    language: "",
    useToekn: "",
    colorTheme: "",
  });
  const [sideBarOpen,setSideBarOpen] = useState(false);


  return (
    <div className={classes.layoutContainer}>
      {/* ======================= Header ==================== */}
      <Header />
      {/* ======================= Sidebar ==================== */}
      <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      {/* ======================= pageContent ======================= */}

      <div className={`${classes.pageContainer} ${sideBarOpen && classes.activePageContainer}`}>
        <div className={classes.pageContent}>
          <GlobalContext.Provider value={{ globalContext, setGlobalContext }}>
            {/* <Header /> */}
            <Routes>
              {routingConfig.map((routePorps, index) => {
                const {
                  component: Component,
                  path,
                  ...otherprops
                } = routePorps;
                return (
                  <Route
                    key={index}
                    {...otherprops}
                    path={path}
                    element={
                      <Suspense
                        fallback={
                          <img src="https://lottiefiles.com/97739-loader"></img>
                        }
                      >
                        <Component />
                      </Suspense>
                    }
                  />
                );
              })}
            </Routes>
          </GlobalContext.Provider>
        </div>
      </div>
    </div>
  );
}
