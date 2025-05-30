import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstanceFile } from '../../../configs/axiosInstanceFile'

import toastifyNotify from '../../../utils/helpers/ToastifyNotify'

const addFile = createAsyncThunk(
   'files/addFile',
   async ({ file, signal }, { rejectWithValue }) => {
      try {
         const formData = new FormData()

         formData.append('file', file)

         const response = await axiosInstanceFile.post(
            '/api/s3/upload',

            formData
         )
         return response.data
      } catch (error) {
         if (signal?.aborted) return rejectWithValue({ message: error.message })

         console.log(error)

         
         toastifyNotify({
            title: 'Ошибка',
            message: error.response.data.message,
            autoClose: 20000,
            type: 'error',
         })

         return rejectWithValue({
            message: error.response?.data?.message || error.message,
         })
      }
   }
)
export const FILES_THUNK = { addFile }
