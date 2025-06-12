import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'
import toastifyNotify from '../../../../utils/helpers/ToastifyNotify'

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

const getUser = createAsyncThunk(
   'users/getUserById',

   async ({ id, navigate }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`/api/users/${id}`)

         navigate(`/admin/users/${id}`)

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

const getUserWishList = createAsyncThunk(
   'users/getUserWishList',

   async ({ id, getAllBoolean }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(
            `/api/users/user/wish-list/${id}?getAll=${getAllBoolean}`
         )

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

const getUserHolidays = createAsyncThunk(
   'users/getUserHolidays',

   async ({ id, getAllBoolean }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(
            `/api/users/user/holidays/${id}?getAll=${getAllBoolean}`
         )

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

const getUserCharity = createAsyncThunk(
   'users/getUserCharity',

   async ({ id, getAllBoolean }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(
            `/api/users/user/charity/${id}?getAll=${getAllBoolean}`
         )

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

const deleteUser = createAsyncThunk(
   'users/deleteUser',

   async ({ userId, handleCloseModal }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.delete(
            `/api/users/delete/${userId}`
         )

         handleCloseModal()

         toastifyNotify({
            title: 'Пользователь удален',
            type: 'success',
            message: data.message,
         })

         return data
      } catch (error) {
         return rejectWithValue({ message: error.response.data.message })
      }
   }
)

export const USERS_THUNK = {
   getAllUsers,
   deleteUser,
   getUser,
   getUserWishList,
   getUserHolidays,
   getUserCharity,
}
