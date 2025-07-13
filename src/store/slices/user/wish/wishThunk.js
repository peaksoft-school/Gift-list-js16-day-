import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

const addWish = createAsyncThunk(
   'wish/addWish',

   async (wishData, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post('/api/wish', wishData)

         return data
      } catch (error) {
         return rejectWithValue(
            error.response?.data?.message || 'Ошибка при добавлении желания'
         )
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
         return rejectWithValue(
            error.response?.data?.message || 'Ошибка при загрузке желаний'
         )
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
         return rejectWithValue(
            error.response?.data?.message || 'Ошибка при загрузке желания'
         )
      }
   }
)

const updateWish = createAsyncThunk(
   'wish/updateWish',

   async ({ wishData }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.put('/api/wish', wishData)

         return data
      } catch (error) {
         return rejectWithValue(
            error.response?.data?.message || 'Ошибка при обновлении желания'
         )
      }
   }
)

const getHolidays = createAsyncThunk(
   'wish/getHolidays',

   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get('/api/holidays')

         return data
      } catch (error) {
         return rejectWithValue(
            error.response?.data?.message || 'Ошибка при загрузке праздников'
         )
      }
   }
)

const deleteWish = createAsyncThunk(
   'wish/deleteWish',
   async (wishId, { rejectWithValue }) => {
      try {
         await axiosInstance.delete(`/api/wish/${wishId}`)
         return wishId
      } catch (error) {
         return rejectWithValue(
            error.response?.data?.message || 'Ошибка при удалении желания'
         )
      }
   }
)

export const WISH_THUNK = {
   addWish,
   getWishes,
   getWishById,
   deleteWish,
   updateWish,
   getHolidays,
}
