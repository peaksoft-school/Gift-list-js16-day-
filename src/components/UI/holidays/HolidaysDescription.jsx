import React from 'react'
import links from '../../../utils/helpers/links'
import BreadCrumbs from './BreadCrumbs'
import { Box, styled, Typography } from '@mui/material'
import Books from '../../../assets/images/bookss.png'
import { USER_CARD_OPTIONS } from '../../../utils/helpers'
import MeetBalls from '../MeetBalls'

const HolidaysDescription = () => {
   return (
      <FlexContainer>
         <BreadCrumbs links={links} />
         <BlockContainer>
            <img src={Books} alt="icon" />
            <StyledText>
               <Typography>Название подарка</Typography>
               <Typography>Кадыр тун</Typography>
            </StyledText>
            <StyledFooterCard>
               <Typography>17.05.2025</Typography>
               <StyledSmallBlock>
                  <Typography>В ожидании</Typography>
                  <MeetBalls options={USER_CARD_OPTIONS} />
               </StyledSmallBlock>
            </StyledFooterCard>
         </BlockContainer>
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
