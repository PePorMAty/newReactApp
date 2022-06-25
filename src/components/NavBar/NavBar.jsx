import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";



export const NavBar = () => {
  return (
    <div className={s.navbar}>
      <div>
        <div className={s.navbar__list}>
          <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.navbar__item}>
            Profile
          </NavLink>
          <NavLink to="/messages"className={navData => navData.isActive ? s.active : s.navbar__item}>
            Messages
          </NavLink>
          <NavLink to="/settings" className={navData => navData.isActive ? s.active : s.navbar__item}>
            Settings
          </NavLink>
        </div>
      </div>
    </div>
  )
}