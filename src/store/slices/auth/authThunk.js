import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import toastifyNotify from '../../../utils/helpers/ToastifyNotify'
import { ROUTES } from '../../../routes/routes'

const signUp = createAsyncThunk(
   'auth/signUp',
   async ({data: values}, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post(
            '/api/auth/sign-up',
            values
         )
         return data
      } catch (error) {
         return rejectWithValue({
            message: error.response?.data?.message || 'Ошибка регистрации',
         })
      }
   }
)
const signIn = createAsyncThunk(
   'auth/login',

   async ({ loginValues, navigate }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post(
            '/api/auth/login',
            loginValues
         )

         toastifyNotify({
            title: 'Успешно',
            message: 'Вы успешно вошли',
            autoClose: 3000,
            type: 'success',
         })

         navigate(
            data.role === 'ADMIN' ? ROUTES.ADMIN.INDEX : ROUTES.USER.INDEX
         )

         return data
      } catch (error) {
         console.log(error)

         toastifyNotify({
            title: 'Error',
            message:
               error.response?.data?.message || error.response?.data?.email,
            autoClose: 3000,
            type: 'error',
         })

         return rejectWithValue({
            message: error.response?.data?.message || 'Login failed',
         })
      }
   }
)

const authWithGoogle = createAsyncThunk(
   'auth/authWithGoogle',

   async ({ idToken, navigate }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post(
            `/api/auth/google?idToken=${idToken}`
         )
         navigate('/user')

         toastifyNotify({
            title: 'Успешно',
            message: 'Вы успешно зарегистрировались',
            autoClose: 3000,
            type: 'success',
         })

         return data
      } catch (error) {
         toastifyNotify({
            title: 'Ошибка',
            message: 'Ошибка при регистрации',
            autoClose: 3000,
            type: 'error',
         })

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
   signIn,
   authWithGoogle,
   forgotPassword,
   resetPassword,
}
