import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { Box, styled } from '@mui/material'
import BreadCrumbs from '../../UI/BreadCrumbs'
import Card from '../../UI/card/Card'

const InnerHoliday = () => {
   const { holiday } = useSelector((state) => state.holidays)

   const { id } = useParams()

   const links = [
      { href: '/user/holidays', label: 'Мои праздники' },
      { href: `/user/holidays/${id}`, label: `${holiday.name}` },
   ]

   return (
      <FlexContainer>
         <BreadCrumbs links={links} />

         {holiday && <Card wish={holiday} key={holiday.id} />}
      </FlexContainer>
   )
}

export default InnerHoliday

const FlexContainer = styled(Box)(() => ({
   background: '#F7F8FA',
   padding: '0 20px',
   display: 'flex',
   flexDirection: 'column',
   gap: '20px',
}))
