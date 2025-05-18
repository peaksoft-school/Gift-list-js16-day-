import { Box, Container, Stack, Typography, styled } from '@mui/material'
import { Favorite, ThumbUp, VolunteerActivism } from '@mui/icons-material'
import Button from '../UI/Button'
import { useNavigate } from 'react-router'

const Advantage = () => {
   const navigate = useNavigate()

   return (
      <StyledBox>
         <StyledContainer>
            <StyledStack>
               <ContainerBox>
                  <IconWrapper>
                     <Favorite />
                  </IconWrapper>

<<<<<<< HEAD
                  <StyledTitle>Дари то, что необходимо</StyledTitle>
               </ContainerBox>

               <StyledText>
                  <li>Находи своих близких</li>
                  <li>Просматривай их списки желаний</li>
                  <li>Узнавай о ближайших мероприятиях</li>
               </StyledText>
=======
                  <Box className="text-content">
                     <StyledTitle>Дари то, что необходимо</StyledTitle>

                     <StyledText>
                        <li>Находи своих близких</li>
                        <li>Просматривай их списки желаний</li>
                        <li>Узнавай о ближайших мероприятиях</li>
                     </StyledText>
                  </Box>
               </ContainerBox>
>>>>>>> development
            </StyledStack>

            <StyledStack>
               <ContainerBox>
                  <IconWrapper>
                     <ThumbUp />
                  </IconWrapper>

<<<<<<< HEAD
                  <StyledTitle>Удобство в использовании</StyledTitle>
               </ContainerBox>

               <StyledText>
                  <li>Создавай неограниченное количество желаний</li>
                  <li>Добавляй подарки которые ты действительно хочешь</li>
                  <li>Делись своими желаниями с другими</li>
               </StyledText>
=======
                  <Box className="text-content">
                     <StyledTitle>Удобство в использовании</StyledTitle>

                     <StyledText>
                        <li>Создавай неограниченное количество желаний</li>
                        <li>
                           Добавляй подарки которые ты действительно хочешь
                        </li>
                        <li>Делись своими желаниями с другими</li>
                     </StyledText>
                  </Box>
               </ContainerBox>
>>>>>>> development
            </StyledStack>

            <StyledStack>
               <ContainerBox>
                  <IconWrapper>
                     <VolunteerActivism />
                  </IconWrapper>

<<<<<<< HEAD
                  <StyledTitle>Твори добро</StyledTitle>
               </ContainerBox>

               <StyledText>
                  <li>Дари благотворительные подарки</li>
                  <li>Делись своими вещами</li>
                  <li>Помогай другим приобрести необходимое</li>
               </StyledText>
            </StyledStack>
         </StyledContainer>

         <Button variant="outlined" onClick={() => navigate('/sign-up')}>ЗАРЕГИСТРИРОВАТЬСЯ</Button>
=======
                  <Box className="text-content">
                     <StyledTitle>Твори добро</StyledTitle>

                     <StyledText>
                        <li>Дари благотворительные подарки</li>
                        <li>Делись своими вещами</li>
                        <li>Помогай другим приобрести необходимое</li>
                     </StyledText>
                  </Box>
               </ContainerBox>
            </StyledStack>
         </StyledContainer>

         <Button variant="outlined" onClick={() => navigate('/sign-up')}>
            ЗАРЕГИСТРИРОВАТЬСЯ
         </Button>
>>>>>>> development
      </StyledBox>
   )
}

export default Advantage

const StyledBox = styled(Box)({
   backgroundColor: '#fff',
   textAlign: ' center ',
   margin: '0 135px 135px 120px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '105px',
})

const StyledContainer = styled(Container)({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'start',
   gap: '2rem',
})

const StyledTitle = styled(Typography)({
   fontFamily: 'Inter',
   fontWeight: ' 600',
   fontSize: '20px',
   lineHeight: '150%',
   fontWeight: 'bold',
})

const StyledText = styled(Typography)({
   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '170%',
   listStyle: 'disc',
   textAlign: 'left',
   width: '290px',
})

const ContainerBox = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'start',
   gap: '20px',
   textAlign: 'center',

   '& .text-content': {
      textAlign: 'start',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      marginTop: '0.5rem',
   },
})

const IconWrapper = styled(Box)({
   color: '#0BA360',
   width: '48px',
   height: '48px',
   border: '1px solid #0BA360',
   borderRadius: '50%',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
})

const StyledStack = styled(Stack)({
   display: 'flex',
   gap: '18px',
})
