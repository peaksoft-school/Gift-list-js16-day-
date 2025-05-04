import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import { ROLES } from './routes'
import Blago from '../pages/user/Blago'
import PrivateRoute from './PrivateRoute'
import Loading from '../components/Loading'
import DescriptionCard from '../components/UI/mailing/DescriptionCard'
import MailingList from '../components/UI/mailing/MailingList'

const Home = lazy(() => import('../pages/home/Home'))
const SignIn = lazy(() => import('../pages/sign-in/SignIn'))
const SignUp = lazy(() => import('../pages/sign-up/SignUp'))
const Admin = lazy(() => import('../layout/AdminLayout'))
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
            <Suspense fallback={<Loading />}>
               <SignIn />
            </Suspense>
         }
      />

      <Route
         path="/sign-up"
         element={
            <Suspense fallback={<Loading />}>
               <SignUp />
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
         <Route path="users" element={<h1>Users</h1>} />
         <Route path="charity" element={<Blago />} />
         <Route path="complaints" element={<h1>complaints</h1>} />
         <Route path="newsletter" element={<MailingList />} />
         <Route path="description" element={<DescriptionCard />} />
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
         <Route path="my-part" element={<h1>Friends</h1>} />
         <Route path="charity" element={<Blago />} />
      </Route>
   </Routes>
)

export default AppRouter
