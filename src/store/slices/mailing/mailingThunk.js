import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const getAllMailings = createAsyncThunk(
   'mailing/getAllMailings',

   async (_, { rejectWithValue, signal }) => {
      try {
         const { data } = await axiosInstance.get('/api/mailing', { signal })

         return data
      } catch (error) {
         if (signal.aborted) {
            return rejectWithValue({ message: 'Запрос отменён' })
         }
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

const getById = createAsyncThunk(
   'mailing/getById',

   async (id, { rejectWithValue, signal }) => {
      try {
         const { data } = await axiosInstance.get(`/api/mailing/${id}`, {
            signal,
         })

         return data
      } catch (error) {
         if (signal.aborted) {
            return rejectWithValue({ message: 'Запрос отменён' })
         }
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

const createMailings = createAsyncThunk(
   'mailing/createMailings',

   async (values, { rejectWithValue, signal }) => {
      try {
         const { data } = await axiosInstance.post('/api/mailing', values, {
            signal,
         })

         console.log('mailing', data)

         return data
      } catch (error) {
         if (signal.aborted) {
            return rejectWithValue({ message: 'Запрос отменён' })
         }
         return rejectWithValue({ message: error.response?.data?.message })
      }
   }
)

export const MAILING_THUNK = { getAllMailings, createMailings, getById }
