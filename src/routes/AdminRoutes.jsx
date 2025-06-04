import { Navigate, Route } from 'react-router'
import { lazy, Suspense } from 'react'
import ProfileUser from '../components/ProfileUser'

const Users = lazy(() => import('../pages/admin/users/Users'))
const InnerUser = lazy(() => import('../components/admin/users/InnerUser'))
const Blago = lazy(() => import('../pages/user/Blago'))
const MailingList = lazy(() => import('../pages/admin/mailing/MailingList'))
const InnerMailing = lazy(
   () => import('../components/admin/mailings/InnerMailing')
)

const AdminRoutes = () => (
   <>
      <Route index element={<Navigate to="users" />} />
      <Route path="users" element={<Users />} />
      <Route path="users/:id" element={<ProfileUser />} />
      <Route path="charity" element={<Blago />} />
      <Route path="complaints" element={<h1>complaints</h1>} />
      <Route path="newsletter" element={<MailingList />} />
      <Route path="newsletter/:id" element={<InnerMailing />} />
   </>
)

export default AdminRoutes
