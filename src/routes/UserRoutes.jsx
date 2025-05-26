import { Route } from 'react-router'
import { lazy } from 'react'

const Blago = lazy(() => import('../pages/user/Blago'))

const UserRoutes = () => (
   <>
      <Route path="lenta" index element={<h1>Friends</h1>} />
      <Route path="friends" element={<h1>Friends</h1>} />
      <Route path="list" element={<h1>Friends</h1>} />
      <Route path="booking" element={<h1>Friends</h1>} />
      <Route path="my-part" element={<h1>Friends</h1>} />
      <Route path="charity" element={<Blago />} />
   </>
)

export default UserRoutes
