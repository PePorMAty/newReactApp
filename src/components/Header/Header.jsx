import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <div>
      <div className={s.header}>
        <img className={s.logo} src="https://www.freepnglogos.com/uploads/xbox-one-logo-vector-24.png" alt="" />
        <div className={s.auth}>
          {props.isAuth ?
            <div className = {s.wrapper}>
              <p className={s.user__log}>{props.login}</p>
              <button className={s.log__btn} onClick={props.logout}>
                Log Out
              </button>
            </div>
            : <div className={s.reg}>
              <NavLink className={s.log} to={'/login'}>LOG IN</NavLink>
              {/* <NavLink className={s.sign} to={'/sign'}>SIGN UP</NavLink> */}
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Header;
