import messageMashaImg from "./../images/Masha.jpg"
import messageAntonImg from "./../images/Anton.jpg"
import messageLenaImg from "./../images/Lena.jpg"

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
  peoplesData: [
    { id: 1, name: "Anton", img: messageAntonImg },
    { id: 2, name: "Lena", img: messageLenaImg },
  ],
  messagesData: [
    { id: 1, text: "Hi", img: messageMashaImg },
    { id: 2, text: "Hello", img: messageAntonImg },
    { id: 3, text: "Hello", img: messageMashaImg },
  ],
  newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:     
      return {
        ...state,
        newMessageText: '',
        messagesData: [...state.messagesData, {
          text: [...state.newMessageText],
          id: 3,
          img: messageMashaImg
        }],  
      }
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText:action.newMessage
      }
    default:
      return state;
  }
}

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}
export const updateNewMessageTextActionCreator = (messageText) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: messageText
  }
}

export default messagesReducer;