import { lazy } from 'react'
import { Route, Routes } from 'react-router'
const Home = lazy(() => import('../pages/home/Home'))
const SignIn = lazy(() => import('../pages/sign-in/SignIn'))
const SignUp = lazy(() => import('../pages/sign-up/SignUp'))
const Admin = lazy(() => import('../pages/admin/Admin'))
// const PrivateRoute = lazy(() => import('./PrivateRoute'))
const User = lazy(() => import('../pages/user/User'))

const AppRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="sign-in" element={<SignIn />} />
         <Route path="sign-up" element={<SignUp />} />

         {/* <Route
            path="/admin"
            element={
               <PrivateRoute
                  roles={['Admin']}
                  Component={<Admin />}
                  fallbackpath={'/'}
               ></PrivateRoute>
            }
         /> */}
         <Route path="/user" element={<User />} />
      </Routes>
   )
}

export default AppRouter
