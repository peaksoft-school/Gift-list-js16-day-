import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

const addUsers = createAsyncThunk(
   'auth/addUsers',
   async ({ values }, { rejectWithValue }) => {
      try {
         console.log(axiosInstance)
         const { data } = await axiosInstance.put('/api/users/update', values)

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
          const { data } = await axiosInstance.delete('/api/users/delete/{userId}', values)
 
          return data
       } catch (error) {
          return rejectWithValue({ message: error.response.data.message })
       }
    }
 )

 const getUsers = createAsyncThunk(
   'auth/getUsers',
   async ({ values }, { rejectWithValue }) => {
      try {
         console.log(axiosInstance)
         const { data } = await axiosInstance.get('/api/users/users', values)

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }

 )

export const USERS_THUNK = { addUsers, deleteUsers, getUsers }
