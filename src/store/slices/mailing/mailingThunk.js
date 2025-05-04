import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const getAllMailings = createAsyncThunk(
   'mailing/getAllMailings',

   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get('/api/mailing')

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

const createMailings = createAsyncThunk(
   'mailing/createMailings',

   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post('/api/mailing')

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

export const MAILING_THUNK = { getAllMailings, createMailings }
