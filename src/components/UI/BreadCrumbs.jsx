import { Link, Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material'
import { useLocation } from 'react-router'

const BreadCrumbs = ({ links }) => {
   const location = useLocation()

   return (
      <MuiBreadcrumbs aria-label="breadcrumb">
         {links.map(({ href, label }, i) =>
            i === links.length - 1 || location.pathname === href ? (
               <Typography color="black" key={href}>
                  {label}
               </Typography>
            ) : (
               <Link underline="hover" color="grey" href={href} key={href}>
                  {label}
               </Link>
            )
         )}
      </MuiBreadcrumbs>
   )
}
export default BreadCrumbs
