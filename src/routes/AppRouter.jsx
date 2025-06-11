import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { ROLES } from './routes'
import Blago from '../pages/user/Blago'
import PrivateRoute from './PrivateRoute'
import Loading from '../components/Loading'

const Holidays = lazy(() => import('../pages/user/holidays/Holidays'))
const HolidaysDescription = lazy(
   () => import('../components/user/holidays/InnerHoliday')
)
const ForgotRassword = lazy(
   () => import('../pages/forgotPassword/ForgotRassword')
)
const Users = lazy(() => import('../pages/admin/users/Users'))
const InnerMailing = lazy(
   () => import('../components/admin/mailings/InnerMailing')
)
const Mailing = lazy(() => import('../pages/admin/mailing/Mailing'))
const Home = lazy(() => import('../pages/home/Home'))
const ResetPassword = lazy(() => import('../pages/resetPassword/ResetPassword'))
const SignIn = lazy(() => import('../pages/sign-in/SignIn'))
const SignUp = lazy(() => import('../pages/sign-up/SignUp'))
const Admin = lazy(() => import('../layout/admin/AdminLayout'))
const User = lazy(() => import('../layout/user/UserLayout'))
const InnerUser = lazy(
   () => import('../components/admin/mailings/users/InnerUser')
)

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
            <Suspense fallback={<Loading />}>
               <SignIn />
            </Suspense>
         }
      />
      <Route
         path="/forgot-password"
         element={
            <Suspense fallback={<Loading />}>
               <ForgotRassword />
            </Suspense>
         }
      ></Route>

      <Route
         path="/sign-up"
         element={
            <Suspense fallback={<Loading />}>
               <SignUp />
            </Suspense>
         }
      />

      <Route
         path="/reset-password"
         element={
            <Suspense fallback={<Loading />}>
               <ResetPassword />
            </Suspense>
         }
      />

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
      >
         <Route index element={<Navigate to="users" />} />
         <Route
            path="users"
            element={
               <Suspense fallback={<Loading />}>
                  <Users />
               </Suspense>
            }
         />
         <Route
            path="users/:id"
            element={
               <Suspense fallback={<Loading />}>
                  <InnerUser />
               </Suspense>
            }
         />
         <Route path="charity" element={<Blago />} />
         <Route path="complaints" element={<h1>complaints</h1>} />
         <Route
            path="newsletter"
            element={
               <Suspense fallback={<Loading />}>
                  <Mailing />
               </Suspense>
            }
         />
         <Route
            path="newsletter/:id"
            element={
               <Suspense fallback={<Loading />}>
                  <InnerMailing />
               </Suspense>
            }
         />
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
         <Route path="lenta" index element={<h1>lenta</h1>} />
         <Route path="friends" element={<h1>Friends</h1>} />
         <Route path="list" element={<h1>Friends</h1>} />
         <Route path="booking" element={<h1>Friends</h1>} />
         <Route
            path="holidays"
            element={
               <Suspense fallback={<Loading />}>
                  <Holidays />
               </Suspense>
            }
         />
         <Route
            path="holiday/:id"
            element={
               <Suspense fallback={<Loading />}>
                  <HolidaysDescription />
               </Suspense>
            }
         />
         <Route path="charity" element={<Blago />} />
      </Route>
   </Routes>
)

export default AppRouter
