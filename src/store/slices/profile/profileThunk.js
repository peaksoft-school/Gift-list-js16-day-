import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import toastifyNotify from '../../../utils/helpers/ToastifyNotify'

const getUserProfile = createAsyncThunk(
   'profile/getUserProfile',
   async (_, { rejectWithValue, signal }) => {
      try {
         const response = await axiosInstance.get('/api/users/profile')
         return response.data
      } catch (error) {
         if (signal?.aborted) return rejectWithValue({ message: error.message })

         console.error(error)

         toastifyNotify({
            title: 'Ошибка',
            message: error.response?.data?.message || error.message,
            type: 'error',
         })

         return rejectWithValue({
            message: error.response?.data?.message || error.message,
         })
      }
   }
)

const updateUserProfile = createAsyncThunk(
   'profile/updateUserProfile',
   async (updatedData, { rejectWithValue, signal }) => {
      try {
         const response = await axiosInstance.post(
            '/api/users/update',
            updatedData
         )
         return response.data
      } catch (error) {
         if (signal?.aborted) return rejectWithValue({ message: error.message })

         console.error(error)

         toastifyNotify({
            title: 'Ошибка',
            message: error.response?.data?.message || error.message,
            type: 'error',
         })

         return rejectWithValue({
            message: error.response?.data?.message || error.message,
         })
      }
   }
)

const uploadPhoto = createAsyncThunk(
   'profile/uploadPhoto',
   async (file, { rejectWithValue }) => {
      try {
         const formData = new FormData()
         formData.append('file', file)

         const response = await axiosInstance.post('/api/s3/upload', formData)

         return response.data.url
      } catch (error) {
         console.error(error)

         toastifyNotify({
            title: 'Ошибка при загрузке фото',
            message: error.response?.data?.message || error.message,
            type: 'error',
         })

         return rejectWithValue({
            message: error.response?.data?.message || error.message,
         })
      }
   }
)

export const PROFILE_THUNK = {
   getUserProfile,
   updateUserProfile,
   uploadPhoto,
}
