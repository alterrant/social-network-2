import {usersAPI} from "../api/api";

const SET_USERS = 'SET_USERS';
const SET_TOGGLE = 'SET_TOGGLE';
const GET_USERS = 'GET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_USERS_PAGE';
const PRELOAD = 'PRELOAD';
const LOADING_USERS = 'LOADING_USERS'

let initialState = {
  users: [
    /*  {
        id: 1,
        userStatus: true,
        location: {
          country: 'Belarus',
          city: 'Minsk'
        },
        userInformation: {
          img: 'https://avatars.mds.yandex.net/get-zen_doc/1586459/pub_5dbe960978125e00b080ef3c_5dbe966a8f011100ad33c13a/scale_1200',
          name: 'Viktor',
          prescription: 'bulba bulba bulba bulba bulba bulba bulba bulba bulba bulba bulba bulba bulba bulba bulba bulba bulba bulba'
        }
      }*/
  ],
  totalCount: 0,
  currentPage: 1,
  pageSize: 4,
  isFetch: false,
  followingUsers: [],
  buttonShowMoreUsers: {
    textButton: 'Show more'
  },
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOGGLE:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: !user.followed}
          }
          return user;
        })
      }
    case SET_USERS:
      return {...state, users: [...action.users]}
    case GET_USERS:
      return {...state, totalCount: action.totalUsers}
    case CHANGE_CURRENT_PAGE:
      debugger
      return {...state, currentPage: action.currentPage}
    case PRELOAD:
      return {...state, isFetch: action.preloadStatus}
    case LOADING_USERS:
      return {
        ...state, followingUsers: action.isLoadingRequest
            ? [...state.followingUsers, action.loadingUserId]
            : state.followingUsers.filter((id) => id !== action.loadingUserId)
      }
    case 'SHOW-MORE-USERS':
      return {...state};

    default:
      return state;
  }
}

export default usersReducer;

export const setUsers = (users) => ({type: SET_USERS, users})
export const userSubscriber = (userId) => ({type: SET_TOGGLE, userId})
export const getUsers = (totalUsers) => ({type: GET_USERS, totalUsers})
export const changeCurrentPage = (currentPage) => ({type: CHANGE_CURRENT_PAGE, currentPage})
export const preload = (preloadStatus) => ({type: PRELOAD, preloadStatus})
export const loadingUsers = (isLoadingRequest, loadingUserId) => (
    {type: LOADING_USERS, isLoadingRequest, loadingUserId}
)
export const following = (userId) => (dispatch) => {

  dispatch(loadingUsers(true, userId));

  usersAPI.follow(userId)
      .then(() => {
        dispatch(userSubscriber(userId));
        dispatch(loadingUsers(false, userId));
      })
}
export const unfollowing = (userId) => (dispatch) => {

  dispatch(loadingUsers(true, userId));

  usersAPI.unfollow(userId)
      .then(() => {
        dispatch(userSubscriber(userId));
        dispatch(loadingUsers(false, userId));
      })
}
export const loadUsers = (pageSize, currentPage) => (dispatch) => {

  dispatch(preload(true));

  usersAPI.getUsers(pageSize, currentPage)
      .then((response) => {
        dispatch(setUsers(response.items));
        dispatch(getUsers(response.totalCount));
        dispatch(preload(false));
      })
}
