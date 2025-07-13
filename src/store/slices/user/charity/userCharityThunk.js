import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

// 1. Получение всех вещей
const getAllUserCharity = createAsyncThunk(
   'charity/getAllUserCharity',
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
   'charity/getById',
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
   'charity/deleteCharity',
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
   'charity/createCharity',
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

const updateCharity = createAsyncThunk(
   'charity/updateCharity',
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

const addGiftToMyGifts = createAsyncThunk(
   'charity/addGiftToMyGifts',
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

const getMyCharityGifts = createAsyncThunk(
   'charity/getMyCharityGifts',
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
