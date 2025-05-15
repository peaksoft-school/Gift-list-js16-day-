import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

const deleteUsers = createAsyncThunk(
   'auth/deleteUsers',
   async ({ values }, { rejectWithValue }) => {
      try {
         console.log(axiosInstance)
         const { data } = await axiosInstance.delete(
            '/api/users/delete/{userId}',
            values
         )

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

export const USERS_THUNK = { deleteUsers }
