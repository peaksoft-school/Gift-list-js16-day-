import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const SignUp = createAsyncThunk(
   'auth/sign-up',
   async ({ values }, { rejectWithValue }) => {
      try {
         console.log(axiosInstance)
         const { data } = await axiosInstance.post('/api/auth/sign-up', values)

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

export const AUTH_THUNK = { SignUp }
