import { Box, styled, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { MAILING_THUNK } from '../../../store/slices/mailing/mailingThunk'
import { useParams } from 'react-router'
import { memo, useEffect } from 'react'
import BreadCrumbs from './BreadCrumbs'
import links from '../../../utils/helpers/links'

const DescriptionCard = () => {
   const { mailing } = useSelector((state) => state.mailing)

   const { id } = useParams()
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(MAILING_THUNK.getById(id))
   }, [dispatch])

   return (
      <FlexContainer>
         <BlockContainer>
            <BreadCrumbs links={links} />
            {mailing && (
               <StyledBox>
                  <img src={mailing.image} alt="photo" />
                  <StyledText>
                     <StyledParagraf variant="h5">
                        {mailing.subject}
                     </StyledParagraf>
                     <StyledContent variant="h6">
                        {mailing.message}
                     </StyledContent>
                     <StyledData>
                        <Typography variant="h6">Дата добавления:</Typography>
                        <Typography>{mailing.createdAt}</Typography>
                     </StyledData>
                  </StyledText>
               </StyledBox>
            )}
         </BlockContainer>
      </FlexContainer>
   )
}

export default memo(DescriptionCard)

const FlexContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
}))
const BlockContainer = styled(Box)(() => ({
   width: '1250px',
   background: '#F7F8FA',
   margin: '80px 0 0 0px',
   padding: '20px',
}))

const StyledBox = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'start',
   padding: '30px',
   marginTop: '30px',
   width: '1100px',
   height: '100%',
   background: '#FFFFFF',
   borderRadius: '10px',
   border: '1px solid #f1efef ',
}))

const StyledText = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
}))

const StyledParagraf = styled('h1')(() => ({
   fontFamily: 'Inter',
   fontWeight: '500',
   fontSize: '18px',
   lineHeight: '130%',
   letterSpacing: '0px',
   verticalAlign: 'middle',
   paddingTop: '50px',
   paddingLeft: '20px',
}))

const StyledContent = styled('h6')(() => ({
   fontSize: '16px',
   fontFamily: 'Inter',
   fontWeight: '400',
   lineHeight: '130%',
   letterSpacing: '0px',
   verticalAlign: 'middle',
   width: '483px',
   paddingTop: '30px',
   paddingLeft: '20px',
   color: '#000000',
}))

const StyledData = styled(Box)(() => ({
   color: '#5C5C5C',
   paddingLeft: '20px',
   paddingTop: '30px',

   '& .MuiTypography-root': {
      fontSize: '14px',
      fontFamily: ' Inter',
      fontWeight: '400',
      lineHeight: ' 130%',
      letterSpacing: ' 0px',
   },
   '&   .MuiTypography-body1': {
      color: '#000000',
      fontWeight: '500',
   },
}))
