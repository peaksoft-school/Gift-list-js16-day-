import { Avatar, Box, styled, Typography } from '@mui/material'
import React from 'react'
import Menu from '../../../assets/images/menu.png'
import { useNavigate } from 'react-router'

const CharityCard = ({ charity }) => {
   const navigate = useNavigate()
   return (
      <StyledCard>
         {charity.map((item) => (
            <BoxCard
               key={item.id}
               onClick={() => navigate(`/admin/charity/${charity.id}`)}
            >
               <StyledBoxAvatar>
                  <Avatar src={item.image} />
                  <Typography sx={{ marginLeft: '20px' }}>
                     {item.ownerFullName}
                  </Typography>
               </StyledBoxAvatar>
               <StyledParagraph>
                  <Typography>{item.name}</Typography>
                  <Typography
                     sx={{
                        color: item.tag === 'Новый' ? '#3CBA92' : '#FD5200',
                     }}
                  >
                     {item.tag}
                  </Typography>
               </StyledParagraph>
               <img src={item.image} alt="book" />
               <StyledUpBox>
                  <Typography>{item.createdAt}</Typography>
                  <StyledSmallBlock>
                     <Avatar src={item.avatar} />
                     <Typography sx={{ marginLeft: '10px' }}>
                        {item.status}
                     </Typography>
                     <img
                        src={Menu}
                        alt="icon"
                        style={{ marginLeft: '10px' }}
                     />
                  </StyledSmallBlock>
               </StyledUpBox>
            </BoxCard>
         ))}
      </StyledCard>
   )
}

export default CharityCard
const StyledCard = styled(Box)(() => ({
   display: 'flex',
   flexWrap: 'wrap',
}))
const BoxCard = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   padding: '10px',
   width: '349px',
   height: '310px',
   borderRadius: '10px',
   backgroundColor: '#ffffff',
   margin: '30px 20px',
}))
const StyledBoxAvatar = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   paddingBottom: '10px',
   '& .MuiTypography-root': {
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: ' 100%',
      letterSpacing: '2%',
   },
}))
const StyledParagraph = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   paddingBottom: '10px',
   '& .MuiTypography-root': {
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: ' 130%',
   },
}))
const StyledUpBox = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   marginTop: '10px',

   '& .MuiTypography-root': {
      fontSize: '14px',
      color: '#636C84',
   },
}))
const StyledSmallBlock = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
}))
