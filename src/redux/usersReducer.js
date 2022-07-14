import { userAPI } from "../api/api"

const SET_USERS = 'SET-USERS';
const FOLLOW = "FOLLOW"
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const TOTAL_COUNT = 'TOTAL-COUNT'
const TOGGLE_IS_FETCHING ="TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
  users: [ ],
  pageSize: 5,
  totalUsersCount: 25,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId){
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state, 
        currentPage: action.currentPage
      }
    case TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalUsersCount
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching 
        ? [...state.followingInProgress, action.userId]
        : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
}

export const acceptFollow = (userId) => ({ type: FOLLOW, userId })
export const acceptUnFollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalCount = (totalCount) => ({ type: TOTAL_COUNT, totalCount })
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })


export const getUsers = (page, pageSize) => {
  return (dispatch) => {
    dispatch(setIsFetching(true))
    userAPI.getUsers(page, pageSize)
      .then(data => {
        dispatch(setCurrentPage(page))
        dispatch(setIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
      });
  }
}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    userAPI.postFollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(acceptFollow(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))
    })
  }
}
export const unFollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    userAPI.deleteUnFollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(acceptUnFollow(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))
    })
  }
}


export default usersReducer;

/* {
       id: 1, followed: true, fullName: "Anton Z.", status: "I am hungry:(", userImg: antonImg,
       location: {
         city: "Novosibirsk", country: "Russia"
       }
     }, */
/*  {
   id: 2, followed: true, fullName: "Elena K.", status: "I am funny:)", userImg: lenaImg,
   location: {
     city: "Minsk", country: "Belarus"
   }
 }, */