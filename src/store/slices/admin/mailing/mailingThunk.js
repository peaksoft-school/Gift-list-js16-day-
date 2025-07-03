import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

// Получение всех рассылок (с пагинацией)
const getAllMailings = createAsyncThunk(
   'mailing/getAllMailings',
   async (
      { page = 1, size = 10 } = {}, // можно передавать параметры
      { rejectWithValue, signal }
   ) => {
      try {
         const response = await axiosInstance.get('/api/mailing', {
            signal,
            params: { page, size }, // пример: ?page=1&size=10
         })

         return response.data
      } catch (error) {
         if (signal.aborted) {
            return rejectWithValue({ message: 'Запрос отменён' })
         }

         const message =
            error.response?.data?.message || 'Ошибка получения рассылок'
         return rejectWithValue({ message })
      }
   }
)

const getById = createAsyncThunk(
   'mailing/getById',
   async (id, { rejectWithValue, signal }) => {
      try {
         const response = await axiosInstance.get(`/api/mailing/${id}`, {
            signal,
         })

         return response.data
      } catch (error) {
         if (signal.aborted) {
            return rejectWithValue({ message: 'Запрос отменён' })
         }

         const message =
            error.response?.data?.message || 'Ошибка при получении рассылки'
         return rejectWithValue({ message })
      }
   }
)

const createMailings = createAsyncThunk(
   'mailing/createMailings',
   async (
      { values, resetForm, setOpenModal },
      { rejectWithValue, signal, dispatch }
   ) => {
      try {
         const response = await axiosInstance.post('/api/mailing', values, {
            signal,
         })

         resetForm()
         setOpenModal(false)

         dispatch(getAllMailings()) // можно передать { page: 1, size: 10 }

         return response.data
      } catch (error) {
         if (signal.aborted) {
            return rejectWithValue({ message: 'Запрос отменён' })
         }

         const message =
            error.response?.data?.message || 'Ошибка при создании рассылки'
         return rejectWithValue({ message })
      }
   }
)

export const MAILING_THUNK = {
   getAllMailings,
   getById,
   createMailings,
}
