import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../configs/axiosInstance'

const addWish = createAsyncThunk(
   'wish/addWish',
   async (wishData, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post('/api/wish', wishData)
         return response.data
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
         const response = await axiosInstance.get('/api/wish')
         return response.data
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
         const response = await axiosInstance.get(`/api/wish/${id}`)
         return response.data
      } catch (error) {
         return rejectWithValue(
            error.response?.data?.message || 'Ошибка при загрузке желания'
         )
      }
   }
)

const updateWish = createAsyncThunk(
   'wish/updateWish',
   async ({ wishId, wishData }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.put(
            `/api/wish/${wishId}`,
            wishData
         )
         return response.data
      } catch (error) {
         return rejectWithValue(
            error.response?.data?.message || 'Ошибка при обновлении желания'
         )
      }
   }
)

// GET запрос для получения праздников
const getHolidays = createAsyncThunk(
   'wish/getHolidays',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/api/holidays')
         return response.data
      } catch (error) {
         return rejectWithValue(
            error.response?.data?.message || 'Ошибка при загрузке праздников'
         )
      }
   }
)

export const WISH_THUNK = {
   addWish,
   getWishes,
   getWishById,
   updateWish,
   getHolidays,
}
