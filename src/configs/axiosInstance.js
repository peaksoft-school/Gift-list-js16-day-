import axios from 'axios'

const BASE_URL = 'http://ec2-3-145-61-7.us-east-2.compute.amazonaws.com'

export const axiosInstance = axios.create({
   baseURL: BASE_URL,

   headers: {
      'Content-Type': 'application/json',
   },
})

let customStore

export const injectStore = (store) => {
   customStore = store
}

axiosInstance.interceptors.request.use(
   (config) => {
      const updateConfig = { ...config }

      const { token } = customStore.getState()?.auth

      if (token) {
         updateConfig.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3NDc3NjMxMTYsImV4cCI6MTc0ODM2NzkxNn0.ZEPs-w1_Aw9p_OtWCMcWGwWv2MSOT85IGcE6_k6nwAw`
         
      }

      return updateConfig
   },

   (error) => {
      return Promise.reject(error)
   }
)

axiosInstance.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },

   (error) => {
      return Promise.reject(error)
   }
)
