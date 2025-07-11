import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

const getAllBookedWishList = createAsyncThunk(
   'bookeds/getAllBookedWishList',

   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get('/api/booking/booked/wish')

         return data
      } catch (error) {
         return rejectWithValue({
            message: error.response.data.message,
         })
      }
   }
)

const getAllBookedHolidayGift = createAsyncThunk(
   'bookeds/getAllBookedHolidayGift ',

   async (_, { rejectWithValue, id }) => {
      try {
         const { data } = await axiosInstance.get(
            `/api/booking/gift/book/${id}`
         )

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
