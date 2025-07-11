import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

const getAllCharity = createAsyncThunk(
   'charity/getAllCharity',

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
   'charity/getById',

   async ({ id, navigate }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`/api/charity/${id}`)

         navigate(`/admin/charity/${id}`)

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

const deleteCharity = createAsyncThunk(
   'charity/delete-сharity',

   async ({ id, navigate }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.delete(`/api/charity/${id}`)

         navigate('/admin/charity')

         getAllCharity()

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

export const CHARITY_THUNK = { getAllCharity, getById, deleteCharity }
