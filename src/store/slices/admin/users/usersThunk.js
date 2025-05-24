import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

const getAllUsers = createAsyncThunk(
   'users/getAllUsers',

   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get('/api/users/users')

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

const deleteUsers = createAsyncThunk(
   'users/deleteUsers',

   async ({ values }, { rejectWithValue }) => {
      try {
         console.log(axiosInstance)
         const { data } = await axiosInstance.delete(
            `/api/users/delete/${userId}`,
            values
         )

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

export const USERS_THUNK = { getAllUsers, deleteUsers }
