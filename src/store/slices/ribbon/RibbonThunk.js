import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const getAllFeed = createAsyncThunk(
   'ribbon/getAllFeed',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get('/api/feed')

         return data
      } catch (error) {
         return rejectWithValue({
            message: error.response?.data?.message,
         })
      }
   }
)

const getFeedById = createAsyncThunk(
   'ribbon/getFeedById',
   async (id, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`/api/feed/${id}`)
         return data
      } catch (error) {
         return rejectWithValue({
            message: error.response?.data?.message,
         })
      }
   }
)

export const RIBBON_THUNK = {
   getAllFeed,
   getFeedById,
}
