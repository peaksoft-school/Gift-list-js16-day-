import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { ROLES } from './routes'
const Loading = lazy(() => import('../components/Loading'))
const Home = lazy(() => import('../pages/home/Home'))
const SignIn = lazy(() => import('../pages/sign-in/SignIn'))
const SignUp = lazy(() => import('../pages/sign-up/SignUp'))
const Admin = lazy(() => import('../layout/AdminLayout'))
const PrivateRoute = lazy(() => import('./PrivateRoute'))
const User = lazy(() => import('../layout/UserLayout'))

const AppRouter = () => (
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
                  <Suspense fallback={<Loading />}>
                     <Admin />
                  </Suspense>
               }
               fallbackPath={'/'}
            />
         }
      />
      <Route
         path="/user"
         element={
            <PrivateRoute
               roles={[ROLES.USER]}
               Component={
                  <Suspense fallback={<Loading />}>
                     <User />
                  </Suspense>
               }
               fallbackPath={'/'}
            />
         }
      />
   </Routes>
)

export default AppRouter
