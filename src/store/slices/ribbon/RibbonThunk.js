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
   async ({ id, navigate }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`/api/feed/${id}`)

         navigate(`/user/ribbon/${id}`)
         return data
      } catch (error) {
         return rejectWithValue({
            message: error.response?.data?.message,
         })
      }
   }
)

const getUserProfile = createAsyncThunk(
   'ribbon/getUserProfile',
   async ({ id, navigate }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`/api/users/profile/${id}`)

         navigate(`/user/user-profile/${id}`)

         return data
      } catch (error) {
         return rejectWithValue({
            message: error.response?.data?.message,
         })
      }
   }
)

const addBook = createAsyncThunk(
   'ribbon/addBook',

   async ({ id }, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await axiosInstance.post(
            `/api/booking/wish/book/${id}?anonymous=false`
         )

         dispatch(getAllFeed())

         return data
      } catch (error) {
         return rejectWithValue({
            message: error.response?.data?.message,
         })
      }
   }
)

const addGift = createAsyncThunk(
   'ribbon/addGift',

   async ({ wishId }, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await axiosInstance.post(
            `/api/wish/add-wish-to-my-wishlist/${wishId}`
         )

         dispatch(getAllFeed())

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
   getUserProfile,
   addBook,
   addGift,
}
