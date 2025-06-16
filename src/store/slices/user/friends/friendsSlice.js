import { createSlice } from '@reduxjs/toolkit'
import { FRIENDS_THUNK } from './friendsThunk'

const initialState = {
   friends: [],
   isLoading: false,
}

const friendsSlice = createSlice({
   name: 'friends',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(FRIENDS_THUNK.getAllMyFriends.pending, (state) => {
            state.isLoading = true
         })

         .addCase(
            FRIENDS_THUNK.getAllMyFriends.fulfilled,
            (state, { payload }) => {
               state.friends = payload

               state.isLoading = false
            }
         )

         .addCase(FRIENDS_THUNK.getAllMyFriends.rejected, (state) => {
            state.isLoading = false
         })
   },
})

const FRIENDS_ACTIONS = friendsSlice.actions

export { FRIENDS_ACTIONS, friendsSlice }
