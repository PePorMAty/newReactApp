import * as axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "602ddb75-267d-4ba1-a1a3-01ca2dcbeb45"
  }
});

export const userAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  postFollow: (id) => {
    return instance.post(`follow/${id}`)
      .then(response => response.data)
  },
  deleteUnfollow: (id) => {
    return instance.delete(`follow/${id}`)
      .then(response => response.data)
  }
}

export const profileAPI = {
  getProfile: (userId = 24674) => {
    return instance.get(`profile/` + userId)
    .then(response => response.data)
  }
}

