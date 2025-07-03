import { Box, styled, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { MAILING_THUNK } from '../../../store/slices/admin/mailing/mailingThunk'
import { useParams } from 'react-router'
import { memo, useEffect } from 'react'
import BreadCrumbs from '../../UI/BreadCrumbs'

const InnerMailing = () => {
   const { mailing } = useSelector((state) => state.mailing)
   const { id } = useParams()
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(MAILING_THUNK.getById(id))
   }, [dispatch, id])

   const links = [
      { href: '/admin/newsletter', label: 'Рассылка' },
      { href: `/admin/newsletter/${id}`, label: mailing?.subject || '...' },
   ]

   if (!mailing) return null

   const { image, subject, message, createdAt } = mailing

   return (
      <FlexContainer>
         <BlockContainer>
            <BreadCrumbs links={links} />

            <StyledBox>
               <img src={image} alt="photo" />

               <StyledText>
                  <StyledParagraf variant="h5">{subject}</StyledParagraf>

                  <StyledContent variant="h6">{message}</StyledContent>

                  <StyledData>
                     <Typography variant="h6">Дата добавления:</Typography>
                     <Typography>{createdAt}</Typography>
                  </StyledData>
               </StyledText>
            </StyledBox>
         </BlockContainer>
      </FlexContainer>
   )
}

export default memo(InnerMailing)

const FlexContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   width: '100%',
}))

const BlockContainer = styled(Box)(() => ({
   background: '#F7F8FA',
   padding: '0 20px',
   width: '100%',
}))

const StyledBox = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'start',
   gap: '3rem',
   padding: '30px',
   marginTop: '30px',
   height: '100%',
   background: '#FFFFFF',
   borderRadius: '10px',
   border: '1px solid #f1efef ',
   width: '100%',

   '& img': {
      width: '420px',
      borderRadius: '10px',
   },
}))

const StyledText = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '1.25rem',
   padding: '30px 0',
}))

const StyledParagraf = styled('h1')(() => ({
   fontFamily: 'Inter',
   fontWeight: '600',
   fontSize: '18px',
   lineHeight: '130%',
   letterSpacing: '0px',
   verticalAlign: 'middle',
}))

const StyledContent = styled('h6')(() => ({
   fontSize: '16px',
   fontFamily: 'Inter',
   fontWeight: '400',
   lineHeight: '130%',
   letterSpacing: '0px',
   verticalAlign: 'middle',
   width: '483px',
   color: '#000000',
}))

const StyledData = styled(Box)(() => ({
   color: '#5C5C5C',

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
