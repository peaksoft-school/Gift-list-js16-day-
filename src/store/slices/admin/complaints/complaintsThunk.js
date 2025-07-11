import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

const getAllComplaints = createAsyncThunk(
   'complaints/getAllComplaints',
   async (_, { rejectWithValue, signal }) => {
      try {
         const { data } = await axiosInstance.get('/api/complaint/all', {
            signal,
         })
         return data
      } catch (error) {
         if (signal.aborted)
            return rejectWithValue({ message: 'Запрос отменён' })
         return rejectWithValue({ message: error.response?.data?.message })
      }
   }
)

const getComplaintById = createAsyncThunk(
   'complaints/getComplaintById',
   async (id, { rejectWithValue, signal }) => {
      try {
         const { data } = await axiosInstance.get(`/api/complaint/${id}`, {
            signal,
         })
         return data
      } catch (error) {
         if (signal.aborted)
            return rejectWithValue({ message: 'Запрос отменён' })
         return rejectWithValue({ message: error.response?.data?.message })
      }
   }
)

const createComplaint = createAsyncThunk(
   'complaints/createComplaint',
   async (
      { values, resetForm, setOpenModal },
      { rejectWithValue, signal, dispatch }
   ) => {
      try {
         const { data } = await axiosInstance.post(
            '/api/complaint/new',
            values,
            { signal }
         )
         resetForm()
         setOpenModal(false)
         dispatch(getAllComplaints())
         return data
      } catch (error) {
         if (signal.aborted)
            return rejectWithValue({ message: 'Запрос отменён' })
         return rejectWithValue({ message: error.response?.data?.message })
      }
   }
)

const deleteComplaint = createAsyncThunk(
   'complaints/deleteComplaint',
   async (id, { rejectWithValue, signal, dispatch }) => {
      try {
         await axiosInstance.post(`/api/complaint/delete/${id}`, {}, { signal })
         dispatch(getAllComplaints())
         return id
      } catch (error) {
         if (signal.aborted)
            return rejectWithValue({ message: 'Запрос отменён' })
         return rejectWithValue({ message: error.response?.data?.message })
      }
   }
)

const deleteComplaintPost = createAsyncThunk(
   'complaints/deleteComplaintPost',
   async (id, { rejectWithValue, signal, dispatch }) => {
      try {
         await axiosInstance.post(
            `/api/complaint/delete_post/${id}`,
            {},
            { signal }
         )
         dispatch(getAllComplaints())
         return id
      } catch (error) {
         if (signal.aborted)
            return rejectWithValue({ message: 'Запрос отменён' })
         return rejectWithValue({ message: error.response?.data?.message })
      }
   }
)

const blockUser = createAsyncThunk(
   'complaints/blockUser',
   async (id, { rejectWithValue, signal, dispatch }) => {
      try {
         await axiosInstance.post(
            `/api/complaint/block_user/${id}`,
            {},
            { signal }
         )
         dispatch(getAllComplaints())
         return id
      } catch (error) {
         if (signal.aborted)
            return rejectWithValue({ message: 'Запрос отменён' })
         return rejectWithValue({ message: error.response?.data?.message })
      }
   }
)

export const COMPLAINTS_THUNK = {
   getAllComplaints,
   getComplaintById,
   createComplaint,
   deleteComplaint,
   deleteComplaintPost,
   blockUser,
}
