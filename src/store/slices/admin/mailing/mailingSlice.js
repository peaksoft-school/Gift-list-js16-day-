import { createSlice } from '@reduxjs/toolkit'
import { MAILING_THUNK } from './mailingThunk'

const initialState = {
   mailings: [],
   mailing: {},
   loading: false,
   error: null,
}

const mailingSlice = createSlice({
   name: 'mailing',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(
            MAILING_THUNK.getAllMailings.fulfilled,
            (state, { payload }) => {
               state.mailings = payload
               state.loading = false
            }
         )
         .addCase(MAILING_THUNK.getAllMailings.pending, (state) => {
            state.loading = true
         })
         .addCase(MAILING_THUNK.getAllMailings.rejected, (state) => {
            state.loading = false
         })
         .addCase(
            MAILING_THUNK.createMailings.fulfilled,
            (state, { payload }) => {
               state.mailings.push(payload)
               state.loading = false
            }
         )
         .addCase(MAILING_THUNK.createMailings.pending, (state) => {
            state.loading = true
         })
         .addCase(MAILING_THUNK.createMailings.rejected, (state) => {
            state.loading = false
         })

         .addCase(MAILING_THUNK.getById.fulfilled, (state, { payload }) => {
            state.mailing = payload
            state.loading = false
         })
         .addCase(MAILING_THUNK.getById.pending, (state) => {
            state.loading = true
         })
         .addCase(MAILING_THUNK.getById.rejected, (state) => {
            state.loading = false
         })
   },
})

const MAILING_ACTIONS = mailingSlice.MAILING_ACTIONS

export { mailingSlice, MAILING_ACTIONS }

export default mailingSlice.reducer
