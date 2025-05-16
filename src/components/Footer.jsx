import { styled } from '@mui/material/styles'
import { List, Container, Typography, Box } from '@mui/material'
import facebook from '../assets/icons/facebook.svg'
import wk from '../assets/icons/wk.svg'
import instagram from '../assets/icons/instagram.svg'
import inactive from '../assets/icons/inactive.svg'
import TextField from '@mui/material/TextField'

const Footer = () => (
   <>
      <StyledList>
         <StyledContainer>
            <StyledBoxBlock>
               <Box>
                  <StyledText>GIFT LIST</StyledText>
                  <StyledTitle>Социальная сеть нового поколения</StyledTitle>
                  <StyledImages>
                     <img src={facebook} alt="icon" />
                     <img src={wk} alt="icon" />
                     <img src={instagram} alt="icon" />
                  </StyledImages>
               </Box>
            </StyledBoxBlock>
            <Box>
               <StyledType>Навигация</StyledType>
               <StyledTitle>О проекте </StyledTitle>
               <StyledTitle>Благотворительность</StyledTitle>
            </Box>

            <Box>
               <StyledType>Подписаться на рассылку</StyledType>

               <StyledIcon>
                  <StyledInput
                     variant="outlined"
                     placeholder="Введите ваш Email"
                  />

                  <StyledButton src={inactive} alt="icon" />
               </StyledIcon>
            </Box>
         </StyledContainer>
      </StyledList>

      <StyledSoft>Peaksoft © 2022 Все права защищены</StyledSoft>
   </>
)

export default Footer

const StyledList = styled(List)({
   width: '1440 px',
   border: '1px solid #BDBDBD',
   opacsity: '10%',
   borderRadius: '1px ',
   display: 'flex',
   justifyContent: 'space-between',
   lineHeight: '130%',
})

const StyledText = styled(Typography)({
   fontFamily: 'Inter',
   fontWeight: '800px',
   fontSize: '24px',
   letterSpacing: '0%',
   textTransform: 'uppercase',
   color: '#020202',
})

const StyledContainer = styled(Container)({
   display: 'flex',
   justifyContent: 'space-between',
   marginTop: '80px',
   padding: '20px',
   gap: '50px',
})
const StyledBoxBlock = styled(Box)(() => ({
   lineHeight: '100%',
}))

const StyledTitle = styled(Typography)({
   fontFamily: 'Inter',
   fontWeight: '400px',
   fontSize: '16px',
   marginTop: '5px',
   letterSpacing: '0%',
   color: ' #353A5A',
})

const StyledType = styled(Typography)({
   fontFamily: 'Inter, san-serif',
   fontWeight: '500px',
   fontSize: '18px',
   lineHeight: '100%',
   letterSpacing: '0%',
   marginBottom: '10px',
})

const StyledSoft = styled(Typography)({
   marginBottom: '20px',
   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '130%',
   letterSpacing: '0%',
   textAlign: 'center',
   color: '#020202',
   marginTop: '30px',
})
const StyledImages = styled(Box)({
   marginRight: '50px',
   marginTop: '5px',
   display: 'flex',
   gap: '20px',
})

const StyledButton = styled('img')(() => ({
   width: '40px',
   height: '40px',
   position: 'absolute',
   marginLeft: '290px',
}))

const StyledIcon = styled(Box)({
   display: 'flex',
   width: '322px',
   height: '30px',
   position: 'relative',
})

const StyledInput = styled(TextField)({
   '& .MuiInputBase-root': {
      height: '39px',
      width: '322px',
      borderRadius: '7px',
   },
})
