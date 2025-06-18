import { Avatar, Box, styled, Typography } from '@mui/material'
import Button from '../../UI/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import BreadCrumbs from '../../UI/BreadCrumbs'
import { USER_CHARITY_THUNK } from '../../../store/slices/user/charity/userCharityThunk'

const InnerCharity = () => {
   const { selectedUserCharity } = useSelector((state) => state.charity)

   const {
      ownerProfilePhoto,
      bookedByProfilePhoto,
      ownerFullName,
      ownerPhone,
      statusMessage,
      giftName,
      description,
      category,
      subCategory,
      condition,
      createdAt,
   } = selectedUserCharity

   const { id } = useParams()

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleDeleteCharity = (id) => {
      dispatch(USER_CHARITY_THUNK.deleteCharity({ id, navigate }))
   }

   const links = [
      { href: '/user/charity', label: 'Благотворительность' },
      {
         href: `/user/charity/${id}`,
         label: selectedUserCharity?.giftName,
      },
   ]

   return (
      <StyledBlockList>
         <BreadCrumbs links={links} />

         {selectedUserCharity?.statusMessage && (
            <StyledContainer1>
               <StyledBlockMain>
                  <img src={ownerProfilePhoto} alt="photo" className="image" />

                  <StyledTextBlock>
                     <StyledAva>
                        <Box className="avatar-content">
                           <Avatar src={bookedByProfilePhoto}></Avatar>

                           <StyledData>
                              <Typography className="full-name">
                                 {ownerFullName}
                              </Typography>

                              <Typography className="owner-phone">
                                 {ownerPhone}
                              </Typography>
                           </StyledData>
                        </Box>

                        <Typography className="status">
                           {statusMessage}
                        </Typography>
                     </StyledAva>

                     <Typography variant="h6" className="gift-name">
                        {giftName}
                     </Typography>

                     <Typography className="gift-description">
                        {description}
                     </Typography>

                     <StyledBlockLi>
                        <Box>
                           <Value>{category}</Value>

                           <Label>Школьные</Label>

                           <br />

                           <Value>{subCategory}</Value>

                           <Label>Сумка</Label>
                        </Box>

                        <StyledState>
                           <Value>Состояние:</Value>

                           <Label>{condition}</Label>

                           <br />

                           <Value>Дата добавления:</Value>

                           <Label>{createdAt}</Label>
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

export default InnerCharity

const StyledBlockList = styled(Box)(() => ({
   padding: '0 20px',
   display: 'flex',
   flexDirection: 'column',
}))

const StyledContainer1 = styled(Box)(() => ({
   background: '#ffffff',
   height: '100%',
   borderRadius: '10px',
   marginTop: '40px',
   padding: '20px',
}))

const StyledBlockMain = styled(Box)(() => ({
   display: 'flex',

   '& .image': {
      width: '343px',
      height: '343px',
   },
}))

const StyledTextBlock = styled(Box)(() => ({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '20px',
   margin: '30px 0 0 20px',

   '& .gift-name': {
      fontSize: '18px',
      fontWeight: '500',
      paddingTop: '20px',
      color: '#020202',
   },

   '& .gift-description ': {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '130%',
   },
}))

const StyledAva = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   width: '100%',

   '& .MuiTypography-p': {
      marginLeft: '400px',
      fontSize: '14px',
      color: '#3774D0',
   },

   '& .avatar-content': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },

   '& .status': {
      color: '#3774D0',
   },
}))

const StyledData = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   marginLeft: '10px',
   lineHeight: '30px',
   gap: '3px',

   '&. full-name ': {
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: ' 16px',
      lineHeight: ' 100%',
      letterSpacing: ' 2%',
   },

   '& .owner-phone': {
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
   justifyContent: 'flex-end',
   gap: '16px',
   marginTop: '56px',
}))

const StyledButton = styled(Button)(() => ({
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
