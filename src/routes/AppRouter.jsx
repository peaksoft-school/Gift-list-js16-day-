import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { ROLES } from './routes'
import PrivateRoute from './PrivateRoute'
import Loading from '../components/Loading'
import Users from '../pages/admin/users/Users'
import InnerUser from '../components/admin/users/InnerUser'
import MailingList from '../pages/admin/mailing/MailingList'
import InnerMailing from '../components/admin/mailings/InnerMailing'
import HolidaysList from '../components/UI/holidays/HolidaysList'
import HolidaysDescription from '../components/UI/holidays/HolidaysDescription'
import WishList from '../components/wish/WishList'
import WishListDisplay from '../components/wish/WishListDisplay'

const CreateCharity = lazy(
   () => import('../pages/user/charity/create-charity/CreateCharity')
)
const InnerUserCharity = lazy(
   () => import('../components/user/charity/InnerCharity')
)
const UserCharity = lazy(() => import('../pages/user/charity/Charity'))
const Bookeds = lazy(() => import('../pages/user/bookeds/Bookeds'))
const InnerCharity = lazy(
   () => import('../components/admin/charity/InnerCharity')
)
const AdminCharity = lazy(() => import('../pages/admin/charity/Charity'))
const MyFriends = lazy(() => import('../pages/user/my-friends/MyFriends'))
const Holidays = lazy(() => import('../pages/user/holidays/Holidays'))
const InnerHoliday = lazy(
   () => import('../components/user/holidays/InnerHoliday')
)
const ForgotRassword = lazy(
   () => import('../pages/forgotPassword/ForgotPassword')
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
const ForgotPassword = lazy(
   () => import('../pages/forgotPassword/ForgotRassword')
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

      {/* ADMIN */}

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

         <Route
            path="charity"
            element={
               <Suspense fallback={<Loading />}>
                  <AdminCharity />
               </Suspense>
            }
         />

         <Route
            path="charity/:id"
            element={
               <Suspense fallback={<Loading />}>
                  <InnerCharity />
               </Suspense>
            }
         />

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

      {/* USER */}

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
      >
         <Route index element={<Navigate to="ribbon" />} />

         <Route path="ribbon" index element={<h1>Ribbon</h1>} />

         <Route
            path="friends"
            element={
               <Suspense fallback={<Loading />}>
                  <MyFriends />
               </Suspense>
            }
         />

         <Route path="wish-list" element={<h1>Wish list</h1>} />

         <Route path="bookeds" element={<Bookeds />} />

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
                  <InnerHoliday />
               </Suspense>
            }
         />

         <Route
            path="charity"
            element={
               <Suspense fallback={<Loading />}>
                  <UserCharity />
               </Suspense>
            }
         />

         <Route
            path="charity/:id"
            element={
               <Suspense fallback={<Loading />}>
                  <InnerUserCharity />
               </Suspense>
            }
         />

         <Route
            path="charity/create"
            element={
               <Suspense fallback={<Loading />}>
                  <CreateCharity />
               </Suspense>
            }
         />
      </Route>
   </Routes>
)

export default AppRouter
