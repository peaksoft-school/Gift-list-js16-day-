import { createSlice } from '@reduxjs/toolkit'
import { USERS_THUNK } from './usersThunk'

const initialState = {
   users: [],
   user: {},
   wishList: [],
   holidays: [],
   charity: [],
   isLoading: false,
}

const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(USERS_THUNK.getAllUsers.fulfilled, (state, { payload }) => {
            state.users = payload
            state.isLoading = false
         })

         .addCase(USERS_THUNK.getAllUsers.pending, (state) => {
            state.isLoading = false
         })

         .addCase(USERS_THUNK.getAllUsers.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(USERS_THUNK.deleteUser.fulfilled, (state) => {
            state.isLoading = false
         })

         .addCase(USERS_THUNK.deleteUser.pending, (state) => {
            state.isLoading = true
         })

         .addCase(USERS_THUNK.deleteUser.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(USERS_THUNK.getUser.fulfilled, (state, { payload }) => {
            state.user = payload
            state.isLoading = false
         })

         .addCase(USERS_THUNK.getUser.pending, (state) => {
            state.isLoading = false
         })

         .addCase(USERS_THUNK.getUser.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            USERS_THUNK.getUserWishList.fulfilled,
            (state, { payload }) => {
               state.wishList = payload
               state.isLoading = false
            }
         )

         .addCase(USERS_THUNK.getUserWishList.pending, (state) => {
            state.isLoading = false
         })

         .addCase(USERS_THUNK.getUserWishList.rejected, (state) => {
            state.isLoading = false
         })
         .addCase(
            USERS_THUNK.getUserHolidays.fulfilled,
            (state, { payload }) => {
               state.holidays = payload
               state.isLoading = false
            }
         )

         .addCase(USERS_THUNK.getUserHolidays.pending, (state) => {
            state.isLoading = false
         })

         .addCase(USERS_THUNK.getUserHolidays.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(
            USERS_THUNK.getUserCharity.fulfilled,
            (state, { payload }) => {
               state.charity = payload
               state.isLoading = false
            }
         )

         .addCase(USERS_THUNK.getUserCharity.pending, (state) => {
            state.isLoading = false
         })

         .addCase(USERS_THUNK.getUserCharity.rejected, (state) => {
            state.isLoading = false
         })
   },
})

const USERS_ACTIONS = usersSlice.actions

export { usersSlice, USERS_ACTIONS }
