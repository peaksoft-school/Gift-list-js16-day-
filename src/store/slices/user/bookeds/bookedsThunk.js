import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

const getAllBookedWishList = createAsyncThunk(
   'bookeds/getAllBookedWishList',

   async (_, { id }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(
            `/api/booking/wish/book/${id}`
         )

         return data
      } catch (error) {
         return rejectWithValue({
            message: error.response.data.message,
         })
      }
   }
)

const getAllBookedHolidayGift = createAsyncThunk(
   'bookeds/getAllBookedHolidayGift',

   async (_, { id, navigate }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(
            `/api/booking/gift/book/${id}`
         )
         navigate(`/user/bookeds/${id}`)
         return data
      } catch (error) {
         return rejectWithValue({
            message: error?.response?.data?.message,
         })
      }
   }
)

export const BOOKEDS_THUNK = {
   getAllBookedWishList,
   getAllBookedHolidayGift,
}
