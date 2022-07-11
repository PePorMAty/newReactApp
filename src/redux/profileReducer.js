import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"

let initialState = {
  postsData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "It`s my first post" },
  ],
  newPostText: '',
  profile: null,
  status: ''
}
/* Я делаю вдох, так пахнет Dior❤‍🔥 */
const profileReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: '',
        postsData: [
          {
            id: 3,
            message: [...state.newPostText],
          },
          ...state.postsData,]
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    case SET_USER_PROFILE:
      return{
        ...state,
        profile: action.profile
      }
    case SET_STATUS: 
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type:UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({ type: SET_STATUS, status})

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
      dispatch(setStatus(data))
    })
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
  }
}

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
      dispatch(setUserProfile(data))
    })
  }
}

export default profileReducer;