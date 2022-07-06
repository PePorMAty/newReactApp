/* import antonImg from "../images/Anton.jpg"
import lenaImg from "../images/Lena.jpg" */

const SET_USERS = 'SET-USERS';
const FOLLOW = "FOLLOW"
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const TOTAL_COUNT = 'TOTAL-COUNT'
const TOGGLE_IS_FETCHING ="TOGGLE-IS-FETCHING"


let initialState = {
  users: [ ],
  pageSize: 5,
  totalUsersCount: 25,
  currentPage: 1,
  isFetching: false
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
    default:
      return state;
  }
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalCount = (totalCount) => ({ type: TOTAL_COUNT, totalCount })
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })


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