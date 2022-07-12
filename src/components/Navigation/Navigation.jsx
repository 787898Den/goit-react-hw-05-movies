import React from "react";
import { NavLink } from "react-router-dom";
import s from '../Navigation/Navigation.module.css';

export default function Navigation (){
    return(
        <nav className={s.nav}>
            <ul className={s.nav_list}>
            <li className={s.item}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                !isActive ? `${s.nav_item}` : `${s.active}`
              }
            >
              Home
            </NavLink>
            </li>
            <li className={s.item}>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                !isActive ? `${s.nav_item}` : `${s.active}`
              }
            >
              Movies
            </NavLink>
            </li>
            </ul>
        </nav>
    )
    
}
