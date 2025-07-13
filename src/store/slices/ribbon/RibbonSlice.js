import { createSlice } from '@reduxjs/toolkit'
import { RIBBON_THUNK } from './RibbonThunk'

const initialState = {
   feed: [],
   feedById: null,
   loading: false,
   error: null,
}

const ribbonSlice = createSlice({
   name: 'ribbon',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder

         .addCase(RIBBON_THUNK.getAllFeed.pending, (state) => {
            state.loading = true
         })

         .addCase(RIBBON_THUNK.getAllFeed.fulfilled, (state, { payload }) => {
            state.feed = payload.content
            state.loading = false
         })

         .addCase(RIBBON_THUNK.getAllFeed.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })

         .addCase(RIBBON_THUNK.getFeedById.pending, (state) => {
            state.loading = true
         })

         .addCase(RIBBON_THUNK.getFeedById.fulfilled, (state, { payload }) => {
            state.feedById = payload
            state.loading = false
         })

         .addCase(RIBBON_THUNK.getFeedById.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

const RIBBON_ACTIONS = ribbonSlice.RIBBON_ACTIONS

export { ribbonSlice, RIBBON_ACTIONS }
