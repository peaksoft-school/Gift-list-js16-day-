import { Box, styled, Typography } from '@mui/material'
import SaleSale from '../../../assets/images/SaleSale.png'

const MailingList = () => {
   // const navigate = useNavigate()
   return (
      <FlexContainer>
         <StyledBox>
            <img src={SaleSale} alt="card" />
            <StyledText>Тема рассылки</StyledText>
            <StyledData>12.04.25</StyledData>
         </StyledBox>
      </FlexContainer>
   )
}

export default MailingList

const FlexContainer = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   width: '349px',
   background: '#FFFFFF',
   borderRadius: '8px',
   border: '1px solid #f1efef ',
   margin: '200px',
}))
const StyledBox = styled(Box)(() => ({
   padding: '10px ',
}))

const StyledText = styled(Typography)(() => ({
   marginTop: '30px',
   fontFamily: ' Inter',
   fontWeight: '600',
   fontSize: '14px',
   lineHeight: '100%',
   letterSpacing: ' 0%',
   color: '#000000',
}))
const StyledData = styled(Typography)(() => ({
   fontFamily: ' Inter',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '100%',
   letterSpacing: ' 0%',
   paddingTop: '20px',
   color: '#636C84',
}))
