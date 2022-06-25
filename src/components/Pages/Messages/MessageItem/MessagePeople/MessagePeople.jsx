import s from "./MessagePeople.module.css";
export const MessagePeople = (props) => {
  return (
    <div>
        <div className={s.messages__people}>

          <img className={s.messages__img} src={props.messagePeopleImg} alt="" />
          <p className={s.messages__name}>{props.messageName}</p>
        </div>
      </div>
  )
}