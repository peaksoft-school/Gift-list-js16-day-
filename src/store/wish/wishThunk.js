import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../configs/axiosInstance'

const addWish = createAsyncThunk(
   'wish/addWish',
   async ( values , { rejectWithValue }) => {
      console.log(values, 'aliahn')

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

const getWishes = createAsyncThunk(
   'wish/getWishes',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get('/api/wish/list')
         return data
      } catch (error) {
         return rejectWithValue({
            message: error.response?.data?.message || error.message,
         })
      }
   }
)

const getWishById = createAsyncThunk(
   'wish/getWishById',
   async (id, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`/api/wish/${id}`)
         return data
      } catch (error) {
         return rejectWithValue({
            message: error.response?.data?.message || error.message,
         })
      }
   }
)

const updateWish = createAsyncThunk(
   'wish/updateWish',
   async ({ id, values }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.put(`/api/wish`, {
            id,
            ...values,
         })
         return data
      } catch (error) {
         return rejectWithValue({
            message: error.response?.data?.message || error.message,
         })
      }
   }
)

export const WISH_THUNK = { addWish, getWishes, getWishById, updateWish }
