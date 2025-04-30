import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { ROLES, ROUTES } from './routes'
import Blago from '../pages/user/Blago'

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

      <Route
         path="/sign-in"
         element={
            <PrivateRoute
               roles={[ROUTES.SIGN_IN]}
               Component={
                  <Suspense fallback={<Loading />}>
                     <SignIn />
                  </Suspense>
               }
               // fallbackPath={'/admin'}
            />
         }
      />

      <Route
         path="/sign-up"
         element={
            <PrivateRoute
               roles={[ROUTES.SIGN_UP]}
               Component={
                  <Suspense fallback={<Loading />}>
                     <SignUp />
                  </Suspense>
               }
               fallbackPath={'/admin'}
            />
         }
      />

      <Route
         path="admin"
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
      >
         <Route index element={<Navigate to="users" />} />
         <Route path="users" />
         <Route path="charity" element={<Blago />} />
         <Route path="complaints" />
         <Route path="newsletter" />
      </Route>

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
               fallbackPath={'/admin' && '/user'}
            />
         }
      >
         <Route path="lenta" index element={''} />
         <Route path="friends" element={''} />
         <Route path="list" element={''} />
         <Route path="booking" element={''} />
         <Route path="my-part" element={''} />
         <Route path="charity" element={<Blago />} />
      </Route>
   </Routes>
)

export default AppRouter
