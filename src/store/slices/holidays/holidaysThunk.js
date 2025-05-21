import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'


const getAllHolidays = createAsyncThunk(
   'holidays/getAllHolidays',

   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`/api/holidays`)

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

const getById = createAsyncThunk(
   'holidays/getById',

   async ({ id }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`/api/holidays/${id}`)

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

const createHoliday = createAsyncThunk(
   'holidays/createHoliday',
   async (formData, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post(
            `/api/holidays/new`,
            formData,
          
         )

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

export const HOLIDAYS_THUNK = { getAllHolidays, getById, createHoliday }
