import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

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

const getById = createAsyncThunk(
   'usercharity/getById',

   async ({ id }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`/api/charity/${id}`)

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

const deleteCharity = createAsyncThunk(
   'userCharity/delete-charity',

   async ({ id }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.delete(`/api/charity/${id}`)

         navigate('/admin/charity')
         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

export const USERCHARITY_THUNK = { getAllUserCharity, getById, deleteCharity }
