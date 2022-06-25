import { NavLink } from "react-router-dom";
import { MessagePeople } from "./MessagePeople/MessagePeople";
export const MessageItem = (props) => {
  return (
    <div>
      <NavLink to={"/messages/" + props.id}>
        <MessagePeople messageName={props.name} messagePeopleImg={props.img} />
      </NavLink>
    </div>
  )
}