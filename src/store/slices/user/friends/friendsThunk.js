import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

const getAllMyFriends = createAsyncThunk(
   'friends/getAllMyFriends',

   async (_, { rejectWithValue }) => {
      try {
         const { data } = axiosInstance.get('/api/friends/my-friends')

         return data
      } catch (error) {
         return rejectWithValue(
            error.response?.data?.message || 'Failed to fetch friends'
         )
      }
   }
)

export const FRIENDS_THUNK = { getAllMyFriends }
