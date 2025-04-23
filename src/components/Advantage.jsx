import { Favorite, ThumbUp, VolunteerActivism } from '@mui/icons-material'
import Button from './UI/Button'
import { styled } from '@mui/material/styles'
import { Box, Container, Stack, Typography } from '@mui/material'

const Advantage = () => {
   return (
      <StyledBox>
         <StyledContainer>
            <StyledStack>
               <ContainerBox>
                  <IconWrapper>
                     <Favorite />
                  </IconWrapper>
                  <StyledTitle>Дари то, что необходимо</StyledTitle>
               </ContainerBox>

               <StyledText>
                  <li>Находи своих близких</li>
                  <li>Просматривай их списки желаний</li>
                  <li>Узнавай о ближайших мероприятиях</li>
               </StyledText>
            </StyledStack>

            <StyledStack>
               <ContainerBox>
                  <IconWrapper>
                     <ThumbUp />
                  </IconWrapper>
                  <StyledTitle>Удобство в использовании</StyledTitle>
               </ContainerBox>

               <StyledText>
                  <li>Создавай неограниченное количество желаний</li>
                  <li>Добавляй подарки которые ты действительно хочешь</li>
                  <li>Делись своими желаниями с другими</li>
               </StyledText>
            </StyledStack>

            <StyledStack>
               <ContainerBox>
                  <IconWrapper>
                     <VolunteerActivism />
                  </IconWrapper>
                  <StyledTitle>Твори добро</StyledTitle>
               </ContainerBox>

               <StyledText>
                  <li>Дари благотворительные подарки</li>
                  <li>Делись своими вещами</li>
                  <li>Помогай другим приобрести необходимое</li>
               </StyledText>
            </StyledStack>
         </StyledContainer>

         <Button variant="outlined">ЗАРЕГИСТРИРОВАТЬСЯ</Button>
      </StyledBox>
   )
}

export default Advantage

const StyledBox = styled(Box)({
   padding: '60px 20px',
   backgroundColor: '#fff',
   textAlign: ' center ',
})

const StyledContainer = styled(Container)({
   display: 'flex',
   justifyContent: 'space-around',
   marginBottom: '40px',
})

const StyledTitle = styled(Typography)({
   fontFamily: 'Inter',
   fontWeight: ' 600',
   fontSize: '20px',
   lineHeight: '150%',
   fontWeight: 'bold',
   marginBottom: '10px',
})

const StyledText = styled(Typography)({
   fontFamily: 'Inter',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '170%',
   listStyle: 'disc',
   paddingLeft: '20px',
   textAlign: 'left',
})

const ContainerBox = styled(Box)({
   display: 'flex',
   justifyContent: 'flex-start',
   gap: '30px',
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
