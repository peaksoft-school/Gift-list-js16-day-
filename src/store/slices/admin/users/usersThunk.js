import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

const addUsers = createAsyncThunk(
   'auth/addUsers',
   async ({ values }, { rejectWithValue }) => {
      try {
         console.log(axiosInstance)
         const { data } = await axiosInstance.post('/api/users/update', values)

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)
const deleteUsers = createAsyncThunk(
    'auth/deleteUsers',
    async ({ values }, { rejectWithValue }) => {
       try {
          console.log(axiosInstance)
          const { data } = await axiosInstance.post('/api/users/delete/{userId}', values)
 
          return data
       } catch (error) {
          return rejectWithValue({ message: error.response.data.message })
       }
    }
 )



export const USERS_THUNK = { addUsers, deleteUsers }
