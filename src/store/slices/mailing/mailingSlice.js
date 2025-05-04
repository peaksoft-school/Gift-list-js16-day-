import { createSlice } from '@reduxjs/toolkit'
import { MAILING_THUNK } from './mailingThunk'

const initialState = {
   mailings: [
      {
         id: 2,
         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2RLOBO8DYvk8aAUNEs6DJzCJzlgHT7HfAg&s',
         subject: 'Rubik',
         message: null,
         createdAt: '2025-05-02',
      },
   ],
   loading: false,
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
   },
})
const MAILING_ACTIONS = mailingSlice.MAILING_ACTIONS

export { mailingSlice, MAILING_ACTIONS }
