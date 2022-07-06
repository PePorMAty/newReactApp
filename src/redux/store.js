import messageMashaImg from "./../images/Masha.jpg"
import messageAntonImg from "./../images/Anton.jpg"
import messageLenaImg from "./../images/Lena.jpg"

import profileReducer from "./profileReducer"
import messagesReducer from "./messagesReducer"
import sidebarReducer from "./sidebarReducer"
/* import usersReducer from "./usersReducer" */

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
      newMessageText: ''
    },
    /* usersPage: {
      users: [
        {
          id: 1, followed: true, fullName: "Anton Z.", status: "I am hungry:(", userImg: antonImg,
          location: {
            city: "Novosibirsk", country: "Russia"
          }
        },
        {
          id: 2, followed: true, fullName: "Elena K.", status: "I am funny:)", userImg: lenaImg,
          location: {
            city: "Minsk", country: "Belarus"
          }
        },
      ]
    }, */
    sidebar: {}
  },
  subscribe(observer) {
    this._callSubscriber = observer; // Наблюдатель ( паттерн )
  },
  getState(){
    return this._state;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    /* this._state.usersPage = usersReducer(this._state.usersPage, action) */

    this._callSubscriber(this._state);

  },
}

export default store;