import s from "./Preloader.module.css";
import preloader from "../../../images/1480.gif"


export const Preloader = (props) => {
  return (
    <div>
      <img className={s.preloader}src={preloader} />
    </div>
  )
}