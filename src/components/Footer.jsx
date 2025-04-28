import { styled } from '@mui/material/styles'
import { Box, Container, Typography, TextField } from '@mui/material'
import facebook from '../assets/icons/facebook.svg'
import wk from '../assets/icons/wk.svg'
import instagram from '../assets/icons/instagram.svg'
import Inactive from '../assets/icons/inactive.svg'

const Footer = () => {
   return (
      <div>
         <StyledBox>
            <StyledContainer>
               <div>
                  <StyledText>GIFT LIST</StyledText>
                  <StyledTitle>Социальная сеть нового поколения</StyledTitle>
                  <Box>
                     <img src={facebook} alt="" />
                     <img src={wk} alt="" />
                     <img src={instagram} alt="" />
                  </Box>
               </div>

               <div>
                  <StyledType>Навигация</StyledType>
                  <StyledTitle>О проекте Благотворительность</StyledTitle>
               </div>

               <div>
                  <StyledType>Подписаться на рассылку</StyledType>
                  <TextField
                     variant="outlined"
                     placeholder="Введите ваш Email"
                     size="small"
                  />
                  <img src={Inactive} alt="" />
               </div>
            </StyledContainer>
         </StyledBox>

         <StyledSoft>Peaksoft © 2022 Все права защищены</StyledSoft>
      </div>
   )
}

export default Footer

const StyledBox = styled(Box)({
   width: '1440 px',
   top: '3128 px ',
   border: '1px solid #353A5A',
   opacsity: '10%',
   borderRadius: '1px ',
})

const StyledText = styled(Typography)({
   width: '113',
   height: '29',
   top: '3153px',
   left: '135px',
   fontFamily: 'Inter',
   fontWeight: '700',
   fontSize: '24px',
   lineHeight: '100%',
   letterSpacing: '0%',
   textTransform: 'uppercase',
   color: '#020202',
})

const StyledContainer = styled(Container)({
   display: 'flex',
   justifyContent: 'space-evenly',
   marginTop: '80px',
   padding: '20px',
})

const StyledTitle = styled(Typography)({
   width: '172',
   height: '16',
   top: '3219px',
   left: ' 634px',

   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '16px',
   lineHeight: '100%',
   letterSpacing: '0%',
})

const StyledType = styled(Typography)({
   width: '96',
   height: '18',
   top: '3153px',
   left: '634px',

   fontFamily: 'Inter, san-serif',
   fontWeight: '500',
   fontSize: '18px',
   lineHeight: '100%',
   letterSpacing: '0%',
   paddingTop: '5px',
})

const StyledSoft = styled(Typography)({
   width: '265',
   height: '14',
   top: '3298px',
   left: '588px',

   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '130%',
   letterSpacing: '0%',
   textAlign: 'center',
   color: '#020202',
})
