import s from "./Message.module.css";
export const Message = (props) => {
  return (
    <div>

      <div className={s.messages__item}>
        <img className={s.messages__avatar} src={props.messageImg} alt="" />
        <p className={s.messages__text}>{props.messageText}</p>
      </div>
    </div>
  )
}