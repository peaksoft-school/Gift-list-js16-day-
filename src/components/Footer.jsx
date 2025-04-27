// import FacebookIcon from '@mui/icons-material/Facebook'
// import InstagramIcon from '@mui/icons-material/Instagram'
// import { styled } from '@mui/material/styles'
// import { Box, Container, Typography } from '@mui/material';

// const Footer = () => {
//    return (

//     <div>
//       <StyledBox>
//          <StyledContainer>
//             <StyledText>GIFT LIST</StyledText>
//             <StyledType>Навигация</StyledType>
//             <StyledTitle>Социальная сеть нового поколения</StyledTitle>

//             <StyledTitle>
//                 О проекте
//                  Благотворительность</StyledTitle>

//             <StyledType>Подписаться на рассылку</StyledType>
//             <FacebookIcon />
//             <InstagramIcon />
//          </StyledContainer>

//       </StyledBox>

// <StyledSoft>Peaksoft © 2022 Все права защищены</StyledSoft>
// </div>
//    )
// }

// export default Footer

// const StyledBox = styled(Box)({
//    width: '1440 px',
//    top: '3128 px ',
//    border: '1px solid #353A5A',
//    opacsity: '10%',
//    borderRadius: '1px ',
// })

// const StyledText = styled(Typography)({
//    width: '113',
//    height: '29',
//    top: '3153px',
//    left: '135px',

//    fontFamily: 'Inter',
//    fontWeight: '700',
//    fontSize: '24px',
//    lineHeight: '100%',
//    letterSpacing: '0%',
//    textTransform: 'uppercase',
// })

// const StyledContainer = styled(Container)({
//    display: 'flex',
//    justifyContent: 'space-around',
//    marginTop: '100px',
// })

// const StyledTitle = styled(Typography)({
//    width: '172',
//    height: '16',
//    top: '3219px',
//    left: ' 634px',

//    fontFamily: 'Inter',
//    fontWeight: '400',
//    fontSize: '16px',
//    lineHeight: '100%',
//    letterSpacing: '0%',
// })

// const StyledType = styled(Typography)({
//    width: '96',
//    height: '18',
//    top: '3153px',
//    left: '634px',

//    fontFamily: 'Inter, san-serif',
//    fontWeight: '500',
//    fontSize: '18px',
//    lineHeight: '100%',
//    letterSpacing: '0%',
//    paddingTop: '5px',
// })

// const StyledSoft = styled(Typography)({
//    width: '265',
//    height: '14',
//    top: '3298px',
//    left: '588px',

//    fontFamily: 'Inter',
//    fontWeight: '400',
//    fontSize: '14px',
//    lineHeight: '130%',
//    letterSpacing: '0%',
//    textAlign: 'center',
//    color: '#020202',

// })

import {
   Box,
   Stack,
   Container,
   Grid,
   Typography,
   TextField,
   Button,
   styled,
} from '@mui/material'

// import {Inactive} from 'assets/icons/inactive.svg'

// import { Facebook } from 'assets/icons/facebook.svg'
// import { Instagram } from 'assets/icons/instagram.svg'

const Footer = () => {
   return (
      <ContainerStack>
         <Container>
            <Grid container spacing={4}>
               <Grid item xs={12} md={4}>
                  <TypographyText>GIFT LIST</TypographyText>

                  <StyledTitle>Социальная сеть нового поколения</StyledTitle>

                  <Box>
                     {/* <img src={Facebook} alt="" />
                     <img src={Instagram} alt="" /> */}
                  </Box>
               </Grid>

               <Grid>
                  <StyledText>Навигация</StyledText>

                  <Text>О проекте</Text>
                  <Text>Благотворительность</Text>
               </Grid>

               <Grid>
                  <StyledText>Подписаться на рассылку</StyledText>

                  <StyledBox>
                     <TextField
                        variant="outlined"
                        placeholder="Введите ваш Email"
                        size="small"
                     />
                     <Button>➔</Button>
                  </StyledBox>
               </Grid>
            </Grid>

            <StyledSoft>Peaksoft © 2022 Все права защищены</StyledSoft>
         </Container>
      </ContainerStack>
   )
}

export default Footer

const ContainerStack = styled(Stack)(() => ({
   backgroundColor: '#f5f5f5',
   margin: '5px',
}))

const StyledText = styled(Typography)(() => ({
   fontFamily: 'Inter',
   fontWeight: '500',
   fontSize: '18px',
   lineHeight: '100%',
}))

const Text = styled(Typography)(() => ({
   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '16px',
   lineHeight: '100%',
}))

const StyledBox = styled(Box)(() => ({
   border: '1px',
   borderRadius: '50%',
}))

const StyledTitle = styled(Typography)(() => ({
   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '130%',
   textAlign: 'center',
}))

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
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
})

const TypographyText = styled(Typography)(() => ({
   fontFamily: 'Inter',
   fontWeight: '700',
   fontSize: '24px',
}))
