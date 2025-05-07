import { createSlice } from '@reduxjs/toolkit'
import { FILES_THUNK } from './filesThunk'

const initialState = {
   fileUrl: '',
   isLoading: false,
}

const filesSlice = createSlice({
   name: 'files',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(FILES_THUNK.addFile.pending, (state) => {
            state.isLoading = true
         })

         .addCase(FILES_THUNK.addFile.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.fileUrl = payload?.link
         })

         .addCase(FILES_THUNK.addFile.rejected, (state) => {
            state.isLoading = false
         })
   },
})

const FILES_ACTIONS = filesSlice.actions

export { filesSlice, FILES_ACTIONS }
