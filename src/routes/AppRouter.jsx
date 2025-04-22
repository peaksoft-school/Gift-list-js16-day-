import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { ROLES, ROUTES } from './routes'
const Home = lazy(() => import('../pages/home/Home'))
const SignIn = lazy(() => import('../pages/sign-in/SignIn'))
const SignUp = lazy(() => import('../pages/sign-up/SignUp'))
const Admin = lazy(() => import('../pages/admin/Admin'))
const PrivateRoute = lazy(() => import('./PrivateRoute'))
const User = lazy(() => import('../pages/user/User'))

const AppRouter = () => {
   return (
      <Routes>
         <Route
            path="/"
            element={
               <PrivateRoute
                  roles={[ROLES.USER, ROLES.GUEST]}
                  Component={<Home />}
                  fallbackPath={'/admin'}
               />
            }
         />
         <Route path="sign-in" element={<SignIn />} />
         <Route path="sign-up" element={<SignUp />} />

         <Route
            path="/admin"
            element={
               <PrivateRoute
                  roles={[ROLES.ADMIN]}
                  Component={
                     <Suspense>
                        <Admin />
                     </Suspense>
                  }
                  fallbackPath={ROUTES.ADMIN.INDEX}
               ></PrivateRoute>
            }
         />
         <Route path="/user" element={<User />} />
      </Routes>
   )
}

export default AppRouter
