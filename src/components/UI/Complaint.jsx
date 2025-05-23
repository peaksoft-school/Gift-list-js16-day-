// import { Typography } from '@mui/material'
import { Avatar, Box, styled, Typography } from '@mui/material'
import MeatBalls from './MeetBalls'
import { USER_CARD_OPTIONS } from '../../utils/helpers'

const Complaint = ({ card ={} }) => {
   const { fullName, event, title, date, image, avatar } = card
   //    <div>
   //       <Typography>жалобы</Typography>
   //    </div>
   // )
   return (
      <StyledBox>
         <StyledCard>
            <BoxContainer>
               <ContainerBox>
                  <Avatar src={avatar} />

                  <ContainerBox>
                     <Typography>{fullName}</Typography>
                     <Typography color="green">{event}</Typography>
                  </ContainerBox>
               </ContainerBox>
            </BoxContainer>

            <StyledTypography>{title}</StyledTypography>

            <StyledImage src={image} alt={title} />
            <StyledText>
               {date} <MeatBalls options={USER_CARD_OPTIONS} />
            </StyledText>
         </StyledCard>
      </StyledBox>
   )
}

export default Complaint

const StyledBox = styled(Box)(() => ({
   marginTop: '100px',
   marginLeft: '30px',
}))

const StyledCard = styled(Box)({
   padding: '16px',
   borderRadius: '12px',
   boxShadow: '0 4px 10px rgba(0,0,0,0.1)',

   width: '349px',
   height: '301px',
   top: '141px',
})

const BoxContainer = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
})

const StyledImage = styled('img')({
   width: '317px',
   height: '153px',
   top: '98px',
   borderRadius: '8px',
   marginTop: '12px',
})

const ContainerBox = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '20px',
}))

const StyledTypography = styled(Typography)(() => ({
   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '14px',
   marginTop: '15px',
}))

const StyledText = styled(Typography)(() => ({
   fontSize: '14px',
   color: 'gray',
   display: 'flex',
   justifyContent: 'space-between',
}))
