import { createSlice } from '@reduxjs/toolkit'
import { COMPLAINTS_THUNK } from './complaintsThunk'

const initialState = {
   complaints: [],
   currentComplaint: null,
   loading: false,
   error: null,
   createLoading: false,
   deleteLoading: false,
   blockLoading: false,
}

const complaintsSlice = createSlice({
   name: 'complaints',
   initialState,
   reducers: {
      clearError: (state) => {
         state.error = null
      },
      clearCurrentComplaint: (state) => {
         state.currentComplaint = null
      },
      setCurrentComplaint: (state, action) => {
         state.currentComplaint = action.payload
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(COMPLAINTS_THUNK.getAllComplaints.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(
            COMPLAINTS_THUNK.getAllComplaints.fulfilled,
            (state, action) => {
               state.loading = false
               state.complaints = action.payload
            }
         )
         .addCase(
            COMPLAINTS_THUNK.getAllComplaints.rejected,
            (state, action) => {
               state.loading = false
               state.error = action.payload.message
            }
         )

         .addCase(COMPLAINTS_THUNK.getComplaintById.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(
            COMPLAINTS_THUNK.getComplaintById.fulfilled,
            (state, action) => {
               state.loading = false
               state.currentComplaint = action.payload
            }
         )
         .addCase(
            COMPLAINTS_THUNK.getComplaintById.rejected,
            (state, action) => {
               state.loading = false
               state.error = action.payload.message
            }
         )

         .addCase(COMPLAINTS_THUNK.createComplaint.pending, (state) => {
            state.createLoading = true
            state.error = null
         })
         .addCase(COMPLAINTS_THUNK.createComplaint.fulfilled, (state) => {
            state.createLoading = false
         })
         .addCase(
            COMPLAINTS_THUNK.createComplaint.rejected,
            (state, action) => {
               state.createLoading = false
               state.error = action.payload.message
            }
         )

         .addCase(COMPLAINTS_THUNK.deleteComplaint.pending, (state) => {
            state.deleteLoading = true
            state.error = null
         })
         .addCase(COMPLAINTS_THUNK.deleteComplaint.fulfilled, (state) => {
            state.deleteLoading = false
         })
         .addCase(
            COMPLAINTS_THUNK.deleteComplaint.rejected,
            (state, action) => {
               state.deleteLoading = false
               state.error = action.payload.message
            }
         )

         .addCase(COMPLAINTS_THUNK.deleteComplaintPost.pending, (state) => {
            state.deleteLoading = true
            state.error = null
         })
         .addCase(COMPLAINTS_THUNK.deleteComplaintPost.fulfilled, (state) => {
            state.deleteLoading = false
         })
         .addCase(
            COMPLAINTS_THUNK.deleteComplaintPost.rejected,
            (state, action) => {
               state.deleteLoading = false
               state.error = action.payload.message
            }
         )

         .addCase(COMPLAINTS_THUNK.blockUser.pending, (state) => {
            state.blockLoading = true
            state.error = null
         })
         .addCase(COMPLAINTS_THUNK.blockUser.fulfilled, (state) => {
            state.blockLoading = false
         })
         .addCase(COMPLAINTS_THUNK.blockUser.rejected, (state, action) => {
            state.blockLoading = false
            state.error = action.payload.message
         })
   },
})

const COMPLAINTS_ACTIONS = complaintsSlice.COMPLAINTS_ACTIONS

export { complaintsSlice, COMPLAINTS_ACTIONS }
