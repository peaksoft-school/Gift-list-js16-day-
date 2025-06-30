import { createSlice } from '@reduxjs/toolkit'
import { AUTH_THUNK } from './authThunk'

const initialState = {
   user: {},
   role: 'GUEST',
   token: '',
   isAuthenticated: false,
   isLoading: false,
   error: null,
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logOut: (state) => {
         state.user = {}
         state.role = ''
         state.token = ''
         state.isAuthenticated = false
         state.error = null
      },
   },
   extraReducers: (builder) => {
      // ----- SIGN IN -----
      builder
         .addCase(AUTH_THUNK.signIn.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(AUTH_THUNK.signIn.fulfilled, (state, action) => {
            state.user = action.payload
            state.role = action.payload.role
            state.token = action.payload.token || ''
            state.isAuthenticated = true
            state.isLoading = false
            state.error = null
         })
         .addCase(AUTH_THUNK.signIn.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload?.message || 'Ошибка входа'
         })

      // ----- SIGN UP -----
      builder
         .addCase(AUTH_THUNK.signUp.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(AUTH_THUNK.signUp.fulfilled, (state) => {
            state.isLoading = false
            state.error = null
         })
         .addCase(AUTH_THUNK.signUp.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload?.message || 'Ошибка регистрации'
         })

      // ----- GOOGLE AUTH -----
      builder
         .addCase(AUTH_THUNK.authWithGoogle.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(AUTH_THUNK.authWithGoogle.fulfilled, (state, action) => {
            state.user = action.payload
            state.role = action.payload.role
            state.token = action.payload.token || ''
            state.isAuthenticated = true
            state.isLoading = false
            state.error = null
         })
         .addCase(AUTH_THUNK.authWithGoogle.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload?.message || 'Ошибка входа через Google'
         })

      // ----- FORGOT PASSWORD -----
      builder
         .addCase(AUTH_THUNK.forgotPassword.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(AUTH_THUNK.forgotPassword.fulfilled, (state) => {
            state.isLoading = false
            state.error = null
         })
         .addCase(AUTH_THUNK.forgotPassword.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload?.message || 'Ошибка сброса пароля'
         })

      // ----- RESET PASSWORD -----
      builder
         .addCase(AUTH_THUNK.resetPassword.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(AUTH_THUNK.resetPassword.fulfilled, (state) => {
            state.isLoading = false
            state.error = null
         })
         .addCase(AUTH_THUNK.resetPassword.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload?.message || 'Ошибка при сбросе пароля'
         })
   },
})

const AUTH_ACTIONS = authSlice.actions

export { AUTH_ACTIONS, authSlice }
