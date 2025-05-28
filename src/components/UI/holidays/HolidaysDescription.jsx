import React, { useEffect } from 'react'
import BreadCrumbs from './BreadCrumbs'
import { Box, styled, Typography } from '@mui/material'
import { USER_CARD_OPTIONS } from '../../../utils/helpers'
import MeetBalls from '../MeetBalls'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { HOLIDAYS_THUNK } from '../../../store/slices/holidays/holidaysThunk'

const HolidaysDescription = () => {
   const { holidaysss } = useSelector((state) => state.holidays)

   const { id } = useParams()
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(HOLIDAYS_THUNK.getById(id))
   }, [dispatch])

   const links = [
      { href: '/user/my-part', label: 'Мои праздники' },
      { href: `/user/my-part/${id}`, label: `${holidaysss.name}` },
   ]
   return (
      <FlexContainer>
         <BreadCrumbs links={links} />
         {holidaysss && (
            <BlockContainer>
               <img src={holidaysss.image} alt="icon" />
               <StyledText>
                  <Typography>Название подарка</Typography>
                  <Typography>{holidaysss.name}</Typography>
               </StyledText>
               <StyledFooterCard>
                  <Typography>{holidaysss.date}</Typography>
                  <StyledSmallBlock>
                     <Typography>В ожидании</Typography>
                     <MeetBalls options={USER_CARD_OPTIONS} />
                  </StyledSmallBlock>
               </StyledFooterCard>
            </BlockContainer>
         )}
      </FlexContainer>
   )
}

export default HolidaysDescription

const FlexContainer = styled(Box)(() => ({
   marginTop: '80px',
   background: '#F7F8FA',
   width: '100%',
   height: '100%',
}))
const BlockContainer = styled(Box)(() => ({
   background: '#FFFFFF',
   width: '350px',
   height: '260px',
   padding: '20px',
   borderRadius: '10px',
   marginLeft: '20px',
   '& img': {
      width: '300px',
      height: '147px',
   },
}))
const StyledText = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   paddingTop: '10px',
}))
const StyledFooterCard = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   color: '#636C84',
}))
const StyledSmallBlock = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
}))
