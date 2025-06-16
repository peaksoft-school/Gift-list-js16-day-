import { Navigate, Route } from 'react-router'
import { lazy, Suspense } from 'react'

const Users = lazy(() => import('../pages/admin/users/Users'))
const InnerUser = lazy(() => import('../components/admin/users/InnerUser'))
const Blago = lazy(() => import('../pages/user/Blago'))
const MailingList = lazy(() => import('../pages/admin/mailing/MailingList'))
const InnerMailing = lazy(
   () => import('../components/admin/mailings/InnerMailing')
)
// const Complaint = lazy(() => import('../components/admin/complaints/Complaint'))

const AdminRoutes = () => (
   <>
      <Route index element={<Navigate to="users" />} />
      <Route path="users" element={<Users />} />
      <Route path="users/:id" element={<InnerUser />} />
      <Route path="charity" element={<Blago />} />
      <Route path="complaints" element={<Complaint />} />
      <Route path="newsletter" element={<MailingList />} />
      <Route path="newsletter/:id" element={<InnerMailing />} />
   </>
)

export default AdminRoutes
