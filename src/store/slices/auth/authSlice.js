import { createSlice } from '@reduxjs/toolkit'
import { AUTH_THUNK } from './authThunk'


const initialState = {
   role: 'GUEST',
   email: null,
   token: 'null',
   isAuth: false,
   isLoading: false,
}

const authSlise = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logOut: (state) => {
         state.token = null
         state.isAuth = false
         state.role = 'Guest'
         state.email = null
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(AUTH_THUNK.SignUp.fulfilled, (state, { payload }) => {
            state.role = payload?.role
            state.email = payload?.email
            state.isAuth = true
            state.isLoading = false
            state.token = payload?.token
         })
         .addCase(AUTH_THUNK.SignUp.pending, (state) => {
            state.isLoading = true
         })
         .addCase(AUTH_THUNK.SignUp.rejected, (state) => {
            state.isLoading = false
         })
   },
})

const AUTH_ACTIONS = authSlise.AUTH_ACTIONS

export { authSlise, AUTH_ACTIONS }
