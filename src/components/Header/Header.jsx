import s from "./Header.module.css";

export const Header = () => {
  return (
    <div>
      <div className={s.header}>
        <img className={s.logo} src="https://png-library.net/images/8cx8ELjEi.png" alt="" />
        <div className={s.reg}>
          <a className={s.sign} href="#">SIGN UP</a>
          <a className={s.log} href="#">LOG IN</a>
        </div>
      </div>
    </div>
  )
}