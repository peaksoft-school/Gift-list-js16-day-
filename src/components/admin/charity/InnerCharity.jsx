import { Avatar, Box, styled, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import BreadCrumbs from '../../UI/BreadCrumbs'
import { USER_CHARITY_THUNK } from '../../../store/slices/user/charity/userCharityThunk'
import Button from '../../UI/Button'

const InnerCharity = () => {
   const { id } = useParams()
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const { selectedUserCharity } = useSelector((state) => state.charity)

   useEffect(() => {
      if (id) {
         dispatch(USER_CHARITY_THUNK.getById({ id, navigate }))
      }
   }, [id, dispatch, navigate])

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
   } = selectedUserCharity || {}

   const handleDeleteCharity = (id) => {
      dispatch(USER_CHARITY_THUNK.deleteCharity({ id, navigate }))
   }

   const links = [
      { href: '/user/charity', label: 'Благотворительность' },
      { href: `/user/charity/${id}`, label: `${giftName}` },
   ]

   return (
      <StyledBlockList>
         <BreadCrumbs links={links} />

         {selectedUserCharity && (
            <StyledContainer1>
               <StyledBlockMain>
                  <img src={ownerProfilePhoto} alt="photo" className="image" />

                  <StyledTextBlock>
                     <StyledAva>
                        <Box className="avatar-content">
                           <Avatar src={bookedByProfilePhoto} />

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
                           <Label>Категория</Label>
                           <br />
                           <Value>{subCategory}</Value>
                           <Label>Подкатегория</Label>
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

               <ButtonContainer>
                  <StyledButton
                     variant="outlined"
                     type="button"
                     onClick={() => handleDeleteCharity(id)}
                  >
                     Удалить
                  </StyledButton>
               </ButtonContainer>
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
   gap: '31px',
}))

const StyledContainer1 = styled(Box)(() => ({
   background: '#ffffff',
   padding: '20px',
   borderRadius: '10px',
}))

const StyledBlockMain = styled(Box)(() => ({
   display: 'flex',
   '& .image': {
      width: '343px',
      height: '343px',
      objectFit: 'cover',
      borderRadius: '8px',
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
   '& .gift-description': {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '130%',
   },
}))

const StyledAva = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   '& .avatar-content': {
      display: 'flex',
      alignItems: 'center',
   },
   '& .status': {
      color: '#3774D0',
      fontSize: '14px',
   },
}))

const StyledData = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   marginLeft: '10px',
   gap: '3px',
   '& .full-name': {
      fontWeight: '500',
      fontSize: '16px',
   },
   '& .owner-phone': {
      fontWeight: '400',
      fontSize: '14px',
      color: '#5C5C5C',
   },
}))

const StyledBlockLi = styled(Box)(() => ({
   display: 'flex',
   marginTop: '30px',
   gap: '80px',
}))

const StyledState = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
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
   width: '121px',
   height: '37px',
   fontSize: '14px',
}))
