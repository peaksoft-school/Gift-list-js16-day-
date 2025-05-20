import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../configs/axiosInstance'

const addWish = createAsyncThunk(
   'wish/addWish',
   async ({ values }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post('/api/wish', values)
         return data
      } catch (error) {
         return rejectWithValue({
            message: error.response?.data?.message || error.message,
         })
      }
   }
)

export const WISH_THUNK = { addWish }
