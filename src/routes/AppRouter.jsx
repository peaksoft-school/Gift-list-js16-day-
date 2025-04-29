import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { ROLES, ROUTES } from './routes'
import InputSearch from '../components/UI/Input-search/InputSearch'
import Header from '../layout/Header'
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
         <Route path="charity" />
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
               fallbackPath={'/admin'}
            />
         }
      >
         <Route path="lenta" />
         <Route path="friends" />
         <Route path="spisok" />
         <Route path="zabro" />
         <Route path="my-part" />
         <Route path="charity" element={<Blago />} />
      </Route>
   </Routes>
)

export default AppRouter
