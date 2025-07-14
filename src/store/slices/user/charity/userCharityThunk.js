import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

// 1. Получение всех вещей
const getAllUserCharity = createAsyncThunk(
   'userCharity/getAllUserCharity',

   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`/api/charity`)
         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

// 2. Получить вещь по ID
const getById = createAsyncThunk(
   'userCharity/getById',

   async ({ id, navigate }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`/api/charity/${id}`)
         navigate(`/user/charity/${id}`)
         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

// 3. Удалить вещь
const deleteCharity = createAsyncThunk(
   'userCharity/delete-charity',

   async ({ id, navigate }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.delete(`/api/charity/${id}`)
         navigate('/user/charity')
         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

// 4. Добавить новую вещь
const createCharity = createAsyncThunk(
   'userCharity/create-charity',

   async (
      { values, categoryById, subcategoryId, status, navigate },
      { rejectWithValue }
   ) => {
      try {
         const { data } = await axiosInstance.post(
            `/api/charity?categoryId=${categoryById}&subcategoryId=${subcategoryId}&status=${status}`,
            values
         )
         navigate('/user/charity')
         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

// 5. Редактировать вещь
const updateCharity = createAsyncThunk(
   'userCharity/updateCharity',
   async (
      { id, values, categoryById, subcategoryId, status, navigate },
      { rejectWithValue }
   ) => {
      try {
         const { data } = await axiosInstance.put(
            `/api/charity/${id}?categoryId=${categoryById}&subcategoryId=${subcategoryId}&status=${status}`,
            values
         )
         navigate('/user/charity')
         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

// 6. Добавить в список желаемых подарков
const addGiftToMyGifts = createAsyncThunk(
   'userCharity/addGiftToMyGifts',
   async (id, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post(
            `/api/charity/add_gift_to_my_gifts/${id}`
         )
         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

// 7. Получить список моих подарков
const getMyCharityGifts = createAsyncThunk(
   'userCharity/getMyCharityGifts',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`/api/charity/gifts`)
         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

export const USER_CHARITY_THUNK = {
   getAllUserCharity,
   getById,
   deleteCharity,
   createCharity,
   updateCharity,
   addGiftToMyGifts,
   getMyCharityGifts,
}
