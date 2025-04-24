import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { ROLES, ROUTES } from './routes'
const Loading = lazy(() => import('../components/UI/loading/Loading'))
const Home = lazy(() => import('../components/landing/Charity'))
const SignIn = lazy(() => import('../pages/sign-in/SignIn'))
const SignUp = lazy(() => import('../pages/sign-up/SignUp'))
const Admin = lazy(() => import('../layout/AdminLayout'))
const PrivateRoute = lazy(() => import('./PrivateRoute'))
const User = lazy(() => import('../layout/UserLayout'))

const AppRouter = () => {
   return (
      <Routes>
         <Route
            path="/"
            element={
               <PrivateRoute
                  roles={[ROLES.GUEST, ROLES.USER]}
                  Component={
                     <Suspense fallback={<Loading />}>
                        <Home />
                     </Suspense>
                  }
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
                  fallbackPath={'/'}
               >
                  {' '}
               </PrivateRoute>
            }
         />
         <Route
            path="/user"
            element={
               <PrivateRoute
                  roles={[ROLES.USER]}
                  Component={
                     <Suspense>
                        <User />
                     </Suspense>
                  }
                  fallbackPath={'/'}
               ></PrivateRoute>
            }
         />
      </Routes>
   )
}

export default AppRouter
