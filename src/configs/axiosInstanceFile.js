import axios from 'axios'

const BASE_URL = 'http://ec2-3-145-61-7.us-east-2.compute.amazonaws.com'

export const axiosInstanceFile = axios.create({
   baseURL: BASE_URL,
})

let customStore

export const fileInjectStore = (store) => {
   customStore = store
}

axiosInstanceFile.interceptors.request.use(
   (config) => {
      const updateConfig = { ...config }

      // const { token } = customStore.getState()?.auth

      if (true) {
         updateConfig.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3NDc2MjE3MTgsImV4cCI6MTc0ODIyNjUxOH0.GNyF-jI_xtXOGtOspBgfov6hlgI7N6EDoF-l6iGqLpI`
      }

      return updateConfig
   },

   (error) => {
      return Promise.reject(error)
   }
)

axiosInstanceFile.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },

   (error) => {
      return Promise.reject(error)
   }
)
