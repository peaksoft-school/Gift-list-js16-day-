import { Typography, Box, styled } from '@mui/material'
import facebook from '../assets/icons/grey-facebook.svg'
import wk from '../assets/icons/wk.svg'
import instagram from '../assets/icons/grey-instagram.svg'
import inactive from '../assets/icons/inactive.svg'
import Input from '../components/UI/Input'

const Footer = () => (
   <StyledList>
      <StyledContainer>
         <StyledBoxBlock>
            <StyledText>GIFT LIST</StyledText>

            <StyledTitle>Социальная сеть нового поколения</StyledTitle>

            <StyledImages>
               <img src={facebook} alt="facebook" />
               <img src={wk} alt="wk" />
               <img src={instagram} alt="instagram" />
            </StyledImages>
         </StyledBoxBlock>

         <StyledBoxBlock>
            <StyledType>Навигация</StyledType>

            <StyledTitle>О проекте </StyledTitle>

            <StyledTitle>Благотворительность</StyledTitle>
         </StyledBoxBlock>

         <StyledBoxBlock>
            <StyledType>Подписаться на рассылку</StyledType>

            <StyledIcon>
               <StyledInput
                  variant="outlined"
                  placeholder="Введите ваш Email"
               />

               <StyledButton src={inactive} alt="in active" />
            </StyledIcon>
         </StyledBoxBlock>
      </StyledContainer>

      <StyledSoft>Peaksoft © 2022 Все права защищены</StyledSoft>
   </StyledList>
)

export default Footer

const StyledList = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
   margin: '144px 0 25px 0',
   borderTop: '1px solid #8d949e',
   width: '100%',
})

const StyledText = styled(Typography)({
   fontFamily: 'Inter',
   fontWeight: '700px',
   fontSize: '24px',
   letterSpacing: '100%',
   textTransform: 'uppercase',
   color: '#020202',
})

const StyledContainer = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'start',
   gap: '257px',
   padding: '25px 135px',
   borderBottom: '1px solid #8d949e',
   maxWidth: '100% !important',
   width: '100%',
})

const StyledBoxBlock = styled(Box)({
   letterSpacing: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '16px',
})

const StyledTitle = styled(Typography)({
   fontFamily: 'Inter',
   fontWeight: '400px',
   fontSize: '16px',
   letterSpacing: '0%',
   color: ' #353A5A',
})

const StyledType = styled(Typography)({
   fontFamily: 'Inter, san-serif',
   fontWeight: '500',
   fontSize: '18px',
   lineHeight: '100%',
   letterSpacing: '0%',
})

const StyledSoft = styled(Typography)({
   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '130%',
   letterSpacing: '0%',
   textAlign: 'center',
   color: '#020202',
   padding: '25px 0',
})

const StyledImages = styled(Box)({
   display: 'flex',
   gap: '20px',

   '& img': {
      cursor: 'pointer',
   },
})

const StyledButton = styled('img')(() => ({
   position: 'relative',
   top: '1px',
   right: '1px',
   cursor: 'pointer',
}))

const StyledIcon = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   width: '292px',
})

const StyledInput = styled(Input)({
   '& .MuiInputBase-root': {
      borderRadius: '0 18px 18px 0',
      height: '54px',
   },
})
