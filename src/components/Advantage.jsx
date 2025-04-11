import { Favorite, ThumbUp, VolunteerActivism } from '@mui/icons-material'
import Button from './UI/Button'
import { styled } from '@mui/material/styles'
import { Box, Container, Stack, Typography } from '@mui/material'

const Advantage = () => {
   return (
      <StyledBox>
         <StyledContainer>
            <Stack>
               <Box
                  sx={{
                     border: '1px',
                     borderRadius: '50%',
                     display: 'flex',
                     justifyContent: 'start',
                     alignItems: 'start',
                     gap: '20px',
                  }}
               >
                  <Favorite sx={{ color: 'green' }} />
                  <StyledTitle>Дари то, что необходимо</StyledTitle>
               </Box>

               <StyledText>
                  <li>Находи своих близких</li>
                  <li>Просматривай их списки желаний</li>
                  <li>Узнавай о ближайших мероприятиях</li>
               </StyledText>
            </Stack>

            <Stack>
               <Box
                  sx={{
                     border: '1px',
                     borderRadius: '50%',
                     display: 'flex',
                     justifyContent: 'start',
                     alignItems: 'start',
                     gap: '15px',
                  }}
               >
                  <ThumbUp sx={{ color: 'green' }} />
                  <StyledTitle>Удобство в использовании</StyledTitle>
               </Box>

               <StyledText>
                  <li>Создавай неограниченное количество желаний</li>
                  <li>Добавляй подарки которые ты действительно хочешь</li>
                  <li>Делись своими желаниями с другими</li>
               </StyledText>
            </Stack>

            <Stack>
               <Box
                  sx={{
                     border: '1px',
                     borderRadius: '50%',
                     display: 'flex',
                     justifyContent: 'start',
                     alignItems: 'start',
                     gap: '15px',
                  }}
               >
                  <VolunteerActivism sx={{ color: 'green' }} />
                  <StyledTitle>Твори добро</StyledTitle>
               </Box>

               <StyledText>
                  <li>Дари благотворительные подарки</li>
                  <li>Делись своими вещами</li>
                  <li>Помогай другим приобрести необходимое</li>
               </StyledText>
            </Stack>
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
