import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsPersonFillLock } from "react-icons/bs";
import { FaTable } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import classes from "./MainNavigation.module.css";

const menuItems = [
  {
    text: "Home",
    endpoint: "/",
    // icon: <AiOutlineHome />,
    activeIcon: <AiFillHome />,
  },
  {
    text: "Authentication",
    endpoint: "/auth",
    // icon: <BsPersonLock />,
    activeIcon: <BsPersonFillLock />,
  },
  {
    text: "Tables",
    endpoint: "/tables",
    // icon: <BiTableAlt />,
    activeIcon: <FaTable />,
  },
  {
    text: "Checkout",
    endpoint: "/checkout",
    // icon: <BiTableAlt />,
    activeIcon: <SiCashapp />,
  },
];

function MainNavigation() {
  const location = useLocation();

  return (
    <header className={classes["title-header"]}>
      <nav>
        <ul className={classes["link-list"]}>
          {menuItems.map((item) => (
            <li key={item.text}>
              <NavLink
                to={item.endpoint}
                className={
                  location.pathname === item.endpoint
                    ? classes["active-navLink"]
                    : undefined
                }
                end
              >
                <span className={classes["navLink-icon"]}>
                  {location.pathname === item.endpoint
                    ? item.activeIcon
                    : undefined}
                </span>
                <span>{item.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
