const SET_USERS = 'SET_USERS';
const SET_TOGGLE = 'SET_TOGGLE';
const GET_USERS = 'GET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_USERS_PAGE';
const PRELOAD = 'PRELOAD';

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
      },
      {
        id: 2,
        userStatus: true,
        location: {
          country: 'USA',
          city: 'New-York'
        },
        userInformation: {
          img: 'https://avatars.mds.yandex.net/get-zen_doc/1586459/pub_5dbe960978125e00b080ef3c_5dbe966a8f011100ad33c13a/scale_1200',
          name: 'James',
          prescription: 'money'
        }
      },
      {
        id: 3,
        userStatus: false,
        location: {
          country: 'USSR',
          city: 'Moscow'
        },
        userInformation: {
          img: 'https://avatars.mds.yandex.net/get-zen_doc/1586459/pub_5dbe960978125e00b080ef3c_5dbe966a8f011100ad33c13a/scale_1200',
          name: 'Ivan',
          prescription: 'medved'
        }
      },
      {
        id: 4,
        userStatus: false,
        location: {
          country: 'China',
          city: 'Hong Kong'
        },
        userInformation: {
          img: 'https://avatars.mds.yandex.net/get-zen_doc/1586459/pub_5dbe960978125e00b080ef3c_5dbe966a8f011100ad33c13a/scale_1200',
          name: 'Jackie',
          prescription: '-chan'
        }
      }*/
  ],
  totalCount: 0,
  currentPage: 1,
  pageSize: 4,
  isFetch: false,
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
      return {...state, currentPage: action.currentPage}
    case PRELOAD:
      return {...state, isFetch: action.preloadStatus}
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