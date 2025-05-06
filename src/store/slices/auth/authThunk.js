import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const signUp = createAsyncThunk(
   'auth/signUp',
   async (formData, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post(
            '/api/auth/sign-up',
            formData
         )
         return data
      } catch (error) {
         return rejectWithValue({
            message: error.response?.data?.message || 'Ошибка регистрации',
         })
      }
   }
)
const login = createAsyncThunk(
   'auth/login',
   async (formData, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post('/api/auth/login', formData)
         return data
      } catch (error) {
         return rejectWithValue({
            message: error.response?.data?.message || 'Login failed',
         })
      }
   }
)

const googleSignIn = createAsyncThunk(
   'auth/googleSignIn',
   async ({ idToken, navigate }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post(
            `/api/auth/google?idToken=${idToken}`
         )
         navigate('/user')
         return data
      } catch (error) {
         return rejectWithValue({
            message: error.response?.data?.message || 'Google sign in failed',
         })
      }
   }
)

const forgotPassword = createAsyncThunk(
   'auth/forgotPassword',
   async (email, { rejectWithValue }) => {
      try {
         const resetLinkBase = `${window.location.origin}/reset-password/`
         const { data } = await axiosInstance.post(
            '/api/auth/forgot-password',
            {
               email,
               link: resetLinkBase,
            }
         )
         return data
      } catch (error) {
         return rejectWithValue({
            message:
               error.response?.data?.message ||
               'Ошибка при запросе сброса пароля',
         })
      }
   }
)

const resetPassword = createAsyncThunk(
   'auth/resetPassword',
   async ({ token, password }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post('/api/auth/reset-password', {
            token,
            newPassword: password,
         })
         return data
      } catch (error) {
         console.log(token)

         return rejectWithValue({
            message:
               error.response?.data?.message || 'Ошибка при сбросе пароля',
         })
      }
   }
)

export const AUTH_THUNK = {
   signUp,
   login,
   googleSignIn,
   forgotPassword,
   resetPassword,
}
