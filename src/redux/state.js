import messageMashaImg from "./../images/Masha.jpg"
import messageAntonImg from "./../images/Anton.jpg"
import messageLenaImg from "./../images/Lena.jpg"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let store = {
  _callSubscriber() {
    console.log('state is changed');
  },
  _state : {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "It`s my first post" },
      ],
      newPostText: ''
    },
    messagesPage: {
      peoplesData: [
        { id: 1, name: "Anton", img: messageAntonImg },
        { id: 2, name: "Lena", img: messageLenaImg },
      ],
      messagesData: [
        { id: 1, text: "Hi", img: messageMashaImg },
        { id: 2, text: "Hello", img: messageAntonImg },
        { id: 3, text: "Hello", img: messageMashaImg },
      ],
    },
  },
  subscribe(observer) {
    this._callSubscriber = observer; // Наблюдатель ( паттерн )
  },
  getState(){
    return this._state;
  },

  dispatch(action) { // { type: 'ADD-POST' }
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
      };

      this._state.profilePage.postsData.unshift(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 3,
        text: action.postMessage,
        img: messageMashaImg
      };

      this._state.messagesPage.messagesData.push(newMessage);
      this._callSubscriber(this._state);
    }
  },
}
export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, 
    newText: text
  }
}


export default store;