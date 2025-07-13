import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

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

   async ({ id, navigate }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`/api/holidays/${id}`)

         navigate(`/user/holiday/${id}`)

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

const createHoliday = createAsyncThunk(
   'holidays/createHoliday',

   async ({ values, resetForm, handleCloseModal }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post(`/api/holidays/new`, values)

         resetForm()
         handleCloseModal()

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)
const deleteHolidays = createAsyncThunk(
   'holidays/deleteHolidays',
   async ({ handleCloseModal, id }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.delete(
            `/api/holidays/delete/${id}`
         )
         handleCloseModal()
         return data
      } catch (error) {
         return rejectWithValue()
      }
   }
)

export const HOLIDAYS_THUNK = {
   deleteHolidays,
   getAllHolidays,
   getById,
   createHoliday,
}
