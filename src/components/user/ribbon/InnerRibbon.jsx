import { Avatar, Box, styled, Typography } from '@mui/material'
import Button from '../../UI/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import BreadCrumbs from '../../UI/BreadCrumbs'

const InnerRibbon = () => {
   const { feedById } = useSelector((state) => state.ribbon)

   const { wishName, date, fullName, holidayName, image, profileImage } =
      feedById

   const { id } = useParams()

   const links = [
      { href: '/user/ribbon', label: 'Лента' },
      {
         href: `/user/ribbon/${id}`,
         label: wishName,
      },
   ]

   return (
      <StyledBlockList>
         <BreadCrumbs links={links} />

         <StyledContainer1>
            <StyledBlockMain>
               <img
                  src={
                     image === null
                        ? 'https://as1.ftcdn.net/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'
                        : image
                  }
                  alt="photo"
                  className="image"
               />

               <StyledTextBlock>
                  <StyledAva>
                     <Box className="avatar-content">
                        <Avatar src={profileImage}></Avatar>

                        <StyledData>
                           <Typography className="full-name">
                              {fullName}
                           </Typography>
                        </StyledData>
                     </Box>

                     <Typography className="status">В ожидании</Typography>
                  </StyledAva>

                  <Typography variant="h6" className="gift-name">
                     {wishName}
                  </Typography>

                  {/* <Typography className="gift-description">
                     {description}
                  </Typography> */}

                  <StyledBlockLi>
                     <StyledState sx={{ display: 'flex', gap: '30px' }}>
                        <Box>
                           <Value>Дата добавления:</Value>

                           <Label>{date}</Label>
                        </Box>

                        <Box>
                           <Value>Название праздника:</Value>

                           <Label sx={{ color: 'green' }}>{holidayName}</Label>
                        </Box>
                     </StyledState>
                  </StyledBlockLi>
               </StyledTextBlock>
            </StyledBlockMain>

            <ButtonContainer>
               <StyledButton2 variant="outlined" type="button">
                  Забронировать
               </StyledButton2>
            </ButtonContainer>
         </StyledContainer1>
      </StyledBlockList>
   )
}

export default InnerRibbon

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

const StyledState = styled(Box)(() => ({}))

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
