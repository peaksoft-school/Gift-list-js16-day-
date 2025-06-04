import React, { useEffect } from 'react'
import { Avatar, Box, styled, Typography } from '@mui/material'
import Button from '../UI/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { USERCHARITY_THUNK } from '../../store/slices/userCharity/userCharityThunk'
import BreadCrumbs from '../UI/BreadCrumbs'

const UserInnerCharity = () => {
   const { selectedUserCharity } = useSelector((state) => state.userCharity)
   const statusMessage = selectedUserCharity?.statusMessage

   const { id } = useParams()
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleDeleteCharity = (id) => {
      dispatch(USERCHARITY_THUNK.deleteCharity({ id, navigate }))
   }

   useEffect(() => {
      if (id) {
         dispatch(USERCHARITY_THUNK.getById({ id }))
      }
   }, [dispatch, id])

   const links = [
      { href: '/user/charity', label: 'Благотворительность' },
      {
         href: `/user/charity/${id}`,
         label: selectedUserCharity?.giftName || 'Загрузка...',
      },
   ]

   return (
      <StyledBlockList>
         <BreadCrumbs links={links} />
         {selectedUserCharity?.statusMessage && (
            <StyledContainer1>
               <StyledBlockMain>
                  <img
                     src={selectedUserCharity.bookedByProfilePhoto}
                     alt="photo"
                  />
                  <StyledTextBlock>
                     <StyledAva>
                        <Avatar
                           src={selectedUserCharity.ownerProfilePhoto}
                        ></Avatar>
                        <StyledData>
                           <Typography variant="paragraf">
                              {selectedUserCharity.ownerFullName}
                           </Typography>
                           <Typography>
                              {selectedUserCharity.ownerPhone}
                           </Typography>
                        </StyledData>
                        {statusMessage === 'Забронирован' && (
                           <StyledAva sx={{ marginLeft: '300px' }}>
                              <Avatar
                                 src={selectedUserCharity.bookedByProfilePhoto}
                              />
                              <StyledData>
                                 <Typography>
                                    {selectedUserCharity.statusMessage}
                                 </Typography>
                              </StyledData>
                           </StyledAva>
                        )}
                     </StyledAva>

                     <Typography variant="h6">
                        {selectedUserCharity.giftName}
                     </Typography>
                     <Typography variant="p">
                        {selectedUserCharity.description}
                     </Typography>
                     <StyledBlockLi>
                        <Box>
                           <Value>{selectedUserCharity.category}</Value>
                           <Label>Школьные</Label>
                           <br />
                           <Value>{selectedUserCharity.subCategory}</Value>
                           <Label>Сумка</Label>
                        </Box>

                        <StyledState>
                           <Value>Состояние:</Value>
                           <Label>{selectedUserCharity.condition}</Label>
                           <br />
                           <Value>Дата добавления:</Value>
                           <Label>{selectedUserCharity.createdAt}</Label>
                        </StyledState>
                     </StyledBlockLi>
                  </StyledTextBlock>
               </StyledBlockMain>

               {selectedUserCharity.ownerFullName === 'rabiya aiylchieva' ? (
                  <ButtonContainer>
                     <StyledButton
                        variant="warning"
                        type="button"
                        onClick={() => handleDeleteCharity(id)}
                     >
                        Удалить
                     </StyledButton>
                     <StyledButton2
                        variant="outlined"
                        color="primary"
                        type="button"
                     >
                        Редактировать
                     </StyledButton2>
                  </ButtonContainer>
               ) : statusMessage !== 'Забронирован' ? (
                  <ButtonContainer>
                     <StyledButton variant="warning" type="button">
                        Забронировать анонимно
                     </StyledButton>
                     <StyledButton2 variant="outlined" type="button">
                        Забронировать
                     </StyledButton2>
                  </ButtonContainer>
               ) : null}
            </StyledContainer1>
         )}
      </StyledBlockList>
   )
}

export default UserInnerCharity

const StyledBlockList = styled(Box)(() => ({
   background: '#F7F8FA',
   paddingTop: '30px ',
   marginLeft: '230px',
}))
const StyledContainer1 = styled(Box)(() => ({
   background: '#ffffff',
   width: '1200px',
   height: '100%',
   padding: '20px',
   borderRadius: '10px',
   marginTop: '40px',
}))
const StyledBlockMain = styled(Box)(() => ({
   display: 'flex',
}))
const StyledTextBlock = styled(Box)(() => ({
   padding: '20px',

   '& .MuiTypography-h6': {
      fontSize: '18px',
      fontWeight: '500',
      paddingTop: '20px',
      color: '#020202',
   },
   '& .MuiTypography-p ': {
      fontSize: '14px',
      fontWeight: '400',
   },
}))
const StyledAva = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',

   '& .MuiTypography-p': {
      marginLeft: '400px',
      fontSize: '14px',
      color: '#3774D0',
   },
}))
const StyledData = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   marginLeft: '10px',
   lineHeight: '30px',
   '&.MuiTypography-root MuiTypography-paragraf ': {
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: ' 16px',
      lineHeight: ' 100%',
      letterSpacing: ' 2%',
   },
   '& .MuiTypography-body1': {
      fontFamily: 'Inter',
      fontWeight: '400',
      fontSize: ' 14px',
      lineHeight: ' 100%',

      color: '#5C5C5C',
   },
}))
const StyledBlockLi = styled(Box)(() => ({
   display: 'flex',
   marginTop: '30px',
}))

const StyledState = styled(Box)(() => ({
   marginLeft: '200px',
}))
const Label = styled(Typography)(() => ({
   fontWeight: 400,
   fontSize: '16px',
}))

const Value = styled(Typography)(() => ({
   color: '#5C5C5C',
   fontSize: '14px',
}))

const ButtonContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   gap: '16px',
   marginLeft: '700px',
   marginTop: '50px',
}))
const StyledButton = styled(Button)(() => ({
   width: '121px',

   '&.MuiButton-root': {
      height: '37px',
      border: 'none',
      fontSize: '14px',
   },
}))
const StyledButton2 = styled(Button)(() => ({
   width: '175px',
   '&.MuiButton-root': {
      height: '37px',
      fontSize: '14px',
   },
}))
