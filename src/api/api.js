import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "ebdb3d6e-b3be-423f-832b-7ec8e82b4f48"
  }
})

export const usersAPI = {
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  auth() {
    return authAPI.auth()
  },
  getProfile(userId) {
    return profileAPI.getProfile(userId)
  },
  getUsers(pageSize, currentPage) {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`).then( received => received.data )
  }
}

export const authAPI = {
  auth() {
    return instance.get('auth/me')
  },
  logIn(email, password) {
    return instance.post('auth/login', {email, password})
  },
  logOut() {
    return instance.delete('auth/login')
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then( received => received.data )
  },
  setProfileStatus(status) {
    return instance.put('profile/status', {status})
  },
  getProfileStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  }
}
