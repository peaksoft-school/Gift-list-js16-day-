import { createSlice } from '@reduxjs/toolkit'
import { HOLIDAYS_THUNK } from './holidaysThunk'

const initialState = {
   holidays: [],
   holidaysss: {},
   loading: false,
   error: null,
}

const holidaysSlice = createSlice({
   name: 'holidays',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(
            HOLIDAYS_THUNK.getAllHolidays.fulfilled,
            (state, { payload }) => {
               state.holidays = payload
               state.loading = false
            }
         )
         .addCase(HOLIDAYS_THUNK.getAllHolidays.pending, (state) => {
            state.loading = true
         })
         .addCase(HOLIDAYS_THUNK.getAllHolidays.rejected, (state) => {
            state.loading = false
         })

         .addCase(HOLIDAYS_THUNK.getById.fulfilled, (state, { payload }) => {
            state.holidaysss = payload
            state.loading = false
         })
         .addCase(HOLIDAYS_THUNK.getById.pending, (state) => {
            state.loading = true
         })
         .addCase(HOLIDAYS_THUNK.getById.rejected, (state) => {
            state.loading = false
         })

         .addCase(
            HOLIDAYS_THUNK.createHoliday.fulfilled, (state, { payload }) => {
               state.holidays.push(payload)
               state.loading = false
            }
         )
         .addCase(HOLIDAYS_THUNK.createHoliday.pending, (state) => {
            state.loading = true
         })

         .addCase(HOLIDAYS_THUNK.createHoliday.rejected, (state) => {
            state.loading = false
         })
   },
})

const HOLIDAYS_ACTIONS = holidaysSlice.HOLIDAYS_ACTIONS

export { holidaysSlice, HOLIDAYS_ACTIONS }

export default holidaysSlice.reducer
