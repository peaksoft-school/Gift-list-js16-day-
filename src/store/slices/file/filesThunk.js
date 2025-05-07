import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstanceFile } from '../../../configs/axiosInstanceFile'

const addFile = createAsyncThunk(
   'files/addFile',
   async ({ file, signal }, { rejectWithValue }) => {
      try {
         const formData = new FormData()
         formData.append('file', file)

         const response = await axiosInstanceFile.post(
            '/api/s3/upload',
            formData,
            {
               signal,
               headers: {
                  'Content-Type': 'multipart/form-data',
               },
            }
         )

         return response.data
      } catch (error) {
         if (signal?.aborted) return rejectWithValue({ message: error.message })
      }
      return rejectWithValue({
         message: error.response?.data?.message || error.message,
      })
   }
)
export const FILES_THUNK = { addFile }
