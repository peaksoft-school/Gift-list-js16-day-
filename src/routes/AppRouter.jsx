import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { ROLES } from './routes'
import Blago from '../pages/user/Blago'
import PrivateRoute from './PrivateRoute'
import Loading from '../components/Loading'
import Users from '../pages/admin/users/Users'
import InnerUser from '../components/admin/users/InnerUser'
import MailingList from '../pages/admin/mailing/MailingList'
import InnerMailing from '../components/admin/mailings/InnerMailing'
import HolidaysList from '../components/UI/holidays/HolidaysList'
import HolidaysDescription from '../components/UI/holidays/HolidaysDescription'

const Home = lazy(() => import('../pages/home/Home'))
const ResetPassword = lazy(() => import('../pages/resetPassword/ResetPassword'))
const SignIn = lazy(() => import('../pages/sign-in/SignIn'))
const SignUp = lazy(() => import('../pages/sign-up/SignUp'))
const Admin = lazy(() => import('../layout/admin/AdminLayout'))
const User = lazy(() => import('../layout/user/UserLayout'))
const ForgotPassword = lazy(() => import('../pages/forgotPassword/ForgotRassword'))

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
               <ForgotPassword />
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
         <Route path="users" element={<Users />} />
         <Route path="users/:id" element={<InnerUser />} />
         <Route path="charity" element={<Blago />} />
         <Route path="complaints" element={<h1>complaints</h1>} />
         <Route path="newsletter" element={<MailingList />} />
         <Route path="newsletter/:id" element={<InnerMailing />} />
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
         <Route path="lenta" index element={<h1>Friends</h1>} />
         <Route path="friends" element={<h1>Friends</h1>} />
         <Route path="list" element={<h1>Friends</h1>} />
         <Route path="booking" element={<h1>Friends</h1>} />
         <Route path="my-part" element={<HolidaysList />} />
         <Route path="my-part/:id" element={<HolidaysDescription />} />
         <Route path="charity" element={<Blago />} />
      </Route>
   </Routes>
)

export default AppRouter
