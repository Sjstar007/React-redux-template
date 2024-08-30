import React, { useState } from "react";
import classes from "./sidebar.module.scss";
import Submenu from "./subMenu";
import { useNavigate } from "react-router-dom";

function Sidebar({ sideBarOpen, setSideBarOpen }) {
  let DashboardIcon =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACPElEQVR4nO2cb2oCMRBHc5D62QusvZl1wBNVBI/QXegFSnIMFeMFtsT+gyK7wppkTN6DfN7svJ1faRxiDAAAAAAAAAAAwBBrOzPitkbs2Yjr4y57Niu7M8uP+a1Smu4wW7R+27T+vOh8H3OFZzTtade8+5v3d4fi20P8wrv/63h59g3Fb1p/iF34KyKO4dnxBVy+/OTF77+7YTO2vfDlpy7+r4TObxIISBE77vpaWT+2vRSxM9AFPoGAXF+/+1oj5Cr+z0JAhwA6ICpEUE8EDUAE8Uc4MkRQTwQNQAQRQZEhgnoiaAAiiAiqO4KajIdxi86fYpf/AQScdtlOQzv/ioB3Pw8/jqQv/mn//LZ/ql7A769ind+E8/nohW+9D19+muI/QASVDwIyg4DMICAzCMgMAjKDgMwgIDOPIGCte3a1bAFr3bOr5QsQ3bOrFQiwqmdXKxDgdO8PAQ4BdMAUtLe4KN/fZLS/oCjfHwIcAuiAKWhvcVG+v8nk/EdH3PjcTfECwsFTthe043M3xQsIp37h4Cn1i63s3rx8jI9+FC/g78Rxczn7iF94f/nybyl+NQI0IwhAQNUIHYCAqhE6AAFVI3QAAmKj+k42KbwD1N/JJoULUH8nmxQuQP2dbFK4gFzFX3wvBCCgpwOGIIKIoKgQQY4IGoQIIoKiQgQ5ImgQIogIigoR5IigqiNI/Z1sonx2dboA5XeyrZTPrk4WoP1OtqXy2dW7SNB+J9ta8ewqAAAAAAAAAACYWvkEtp9lyJyIZRUAAAAASUVORK5CYII=";

  let history = useNavigate();
  const path = window.location.pathname;

  const sideRoteInfo = [
    {
      name: "Dashboard",
      routeName: "/dashboard",
      isActive: path.includes("dashboard") || path == "/" ? classes.active : "",
    },
    {
      name: "Calender",
      routeName: "/calender",
    },
    {
      name: "Meet",
      subMenu: [
        {
          name: "Instant Meet",
          routeName: "/new-meet",
        },
        {
          name: "Schedule Meet",
          routeName: "/schedule-meet",
        },
      ],
    },
    {
      name: "Todo",
      routeName: "/todo",
    },
    {
      name: "chat",
      routeName: "/chatbox",
    },
  ];

  const handleSideBarNav = () => {
    setSideBarOpen(!sideBarOpen);
  };

  const handleRoute = (route) => {
    history(route);
  };

  return (
    <div
      className={`${classes.sidebarContainer} ${
        sideBarOpen && classes.activeSidebarContainer
      }`}
    >
      <div className={classes.logo}>
        Logo
        <div onClick={handleSideBarNav} className={classes.openCloseIcon}>
          {sideBarOpen ? "<" : ">"}
        </div>
      </div>
      <div className={classes.module}>
        <ul>
          {sideRoteInfo.map((routeInfo) => {
            return (
              <>
                {!!routeInfo.subMenu ? (
                  <Submenu
                    key={routeInfo.name}
                    icon={DashboardIcon}
                    title={routeInfo.name}
                    subMenuList={routeInfo.subMenu}
                    route={routeInfo.routeName}
                    handleRoute={handleRoute}
                    handleSideBarNav={handleSideBarNav}
                  />
                ) : (
                  <li
                    key={routeInfo.name}
                    className={routeInfo?.isActive}
                    onClick={() => handleRoute(routeInfo.routeName)}
                  >
                    <img src={DashboardIcon} />
                    <span>{routeInfo.name}</span>
                  </li>
                )}
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
