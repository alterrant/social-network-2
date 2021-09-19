const SET_USERS = 'SET-USERS'
const SET_TOGGLE = 'SET-TOGGLE'

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
            return {...user, userStatus: !user.userStatus}
          }
          return user;
        })
      }
    case SET_USERS:
      return {...state, users: [...state.users, ...action.users]}
    case 'SHOW-MORE-USERS':
      return {...state};

    default:
      return state;
  }
}

export default usersReducer;

export const setUsersAC = (users) => ({type: SET_USERS, users})
export const userSubscriberAC = (userId) => ({type: SET_TOGGLE, userId})