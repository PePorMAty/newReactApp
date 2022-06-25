import s from "./Messages.module.css";

import { Message } from "./Message/Message";
import { MessageItem } from "./MessageItem/MessageItem";
import React from "react";

export const Messages = (props) => {

  let peoplesElements = props.peoplesData.map((people) =>
    <MessageItem id={people.id} name={people.name} img={people.img} />
  )

  let messagesElements = props.messagesData.map((message) =>
    <Message id={message.id} messageText={message.text} messageImg={message.img} />
  )

  let newMessageElement = React.createRef();

  let addMessage = () => {

    let messageText = newMessageElement.current.value;
    if (newMessageElement.current.value == '') {
      messageText = null;
    } else {
      //props.addMessage(messageText);
      let action = {
        type: 'ADD-MESSAGE',
        postMessage: messageText
      }

      props.dispatch(action);

      newMessageElement.current.value = '';
    }
  }


  return (
    <div>
      <div className={s.messages}>
        <div className={s.messages__peoples}>
          {peoplesElements}
        </div>
        <div className={s.messages__message}>
          <div className={s.messages__items}>    
          {messagesElements}
          </div>
          <div className={s.messages__send}>
            <textarea className={s.messages__area} ref={newMessageElement}></textarea>
            <button className={s.messages__btn} onClick={addMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}