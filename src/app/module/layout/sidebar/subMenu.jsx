import React, { useState } from "react";
import classes from "./sidebar.module.scss";

function SubMenu(props) {
  const { subMenuList, title, icon, route, handleRoute, handleSideBarNav } =
    props;
  const [isOpen, setIsOpen] = useState(false);

  const handlesubMenu = () => {
    handleSideBarNav();
    handleRoute(route);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <li onClick={handlesubMenu}>
        <img src={icon} /> <span>{title}</span>
      </li>
      {isOpen && (
        <div className={classes.subMenuContainer}>
          <ul>
            {subMenuList.map((list, index) => {
              return (
                <>
                  <li
                    key={list.name}
                    onClick={() => handleRoute(list.routeName)}
                  >
                    {list.name}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default SubMenu;
