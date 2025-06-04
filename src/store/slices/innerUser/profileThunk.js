import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

const getProfileUserById = createAsyncThunk(
   'profileUser/getProfileUserById',
   async (id, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`/api/users/profile/${id}`)
         return data
      } catch (error) {
         return rejectWithValue({
            message: error.response?.data?.message || 'Ошибка запроса',
         })
      }
   }
)

export const USERS_THUNK = {
   getProfileUserById,
}
