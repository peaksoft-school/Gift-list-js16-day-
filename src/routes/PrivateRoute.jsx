import { Navigate } from 'react-router'

const PrivateRoute = ({ roles, Component, fallbackPath }) => {
   const role = 'GUEST'

   const allowerRole = roles.includes(role)

   if (!allowerRole) {
      return <Navigate to={fallbackPath} />
   }

   return Component
}

export default PrivateRoute
