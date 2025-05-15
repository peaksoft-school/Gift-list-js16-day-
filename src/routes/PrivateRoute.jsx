import { Navigate, Outlet } from 'react-router'

const PrivateRoute = ({ roles, Component, fallbackPath }) => {
   const role = 'ADMIN'

   const allowerRole = roles.includes(role)

   if (!allowerRole) {
      return <Navigate to={fallbackPath} />
   }

   return Component
}

export default PrivateRoute
