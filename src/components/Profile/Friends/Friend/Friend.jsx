import s from "./Friend.module.css";


export const Friend = (props) => {
  return (
    <div>
      <div className={s.friends__item}>
        <img className={s.friends__img} src={props.friendImg} alt="" />
        <p className={s.friends__name}>
          {props.name}
        </p>
      </div>
    </div>

  )
}