import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

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

export const USER_CHARITY_THUNK = {
   getAllUserCharity,
   getById,
   deleteCharity,
   createCharity,
}
