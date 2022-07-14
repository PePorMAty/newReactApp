import s from "./Messages.module.css";
import { Message } from "./Message/Message";
import { MessageItem } from "./MessageItem/MessageItem";
import React from "react";

export const Messages = (props) => {

  let peoplesElements = props.peoplesData.map((people) =>
    <MessageItem 
    id={people.id} 
    name={people.name} 
    img={people.img} 
    key={people.id}/>
  )

  let messagesElements = props.messagesData.map((message) =>
    <Message 
    id={message.id} 
    messageText={message.text} 
    messageImg={message.img} 
    key={message.id}/>
  )

  let newMessageElement = React.createRef();

  let addMessage = () => {

    let messageText = newMessageElement.current.value;
    if (newMessageElement.current.value === '') {
      messageText = null;
    } else {
      props.addMessage();
      newMessageElement.current.value = '';
    }
  }
  let onMessageChange = () => {
    let messageText = newMessageElement.current.value;
    props.updateNewMessageText(messageText)
  }

  return (
    <div>
      <div className={s.messages}>
        <div className={s.messages__peoples}>
          {peoplesElements}
        </div>
        <div className={s.messages__message}>
          <div className={s.messages__items}>    
          <div>{messagesElements}</div>
          </div>
          <div className={s.messages__send}>
            <textarea
            value={props.newMessageText}
            onChange={onMessageChange} 
            className={s.messages__area} 
            ref={newMessageElement}></textarea>
            <button 
            className={s.messages__btn} 
            onClick={addMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}