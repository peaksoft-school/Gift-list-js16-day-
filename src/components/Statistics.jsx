import Box from '@mui/material/Box'
import CountUp from 'react-countup'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

const COUNTER = [
   { end: 100, label: 'K+', text: 'Пользователей' },
   { end: 10, label: 'K+', text: 'Размещенных подарков' },
   { end: 15, label: 'K+', text: 'Подаренных подарков' },
   { end: 9, label: 'K+', text: 'Реализованной благотворительной помощи' },
]

const Statistics = () => {
   return (
      <StyledBox>
         {COUNTER.map(({ end, label, text }) => (
            <Box>
               <Box>
                  <CountUp end={end} /> {label}
               </Box>

               <StyledText>{text}</StyledText>
            </Box>
         ))}
      </StyledBox>
   )
}
export default Statistics

const StyledBox = styled(Box)({
   display: 'flex',
   justifyContent: 'space-around',
   padding: '40px',
   backgroundColor: 'white',
   borderTop: '5px solid #9333ea',
   textAlign: 'center',
   color: '#9333ea',
   fontWeight: '500',
   fontSize: '54px',
   fontWeight: 'bold',
})

const StyledText = styled(Typography)({
   fontFamily: 'Inter',
   color: 'black',
   fontWeight: '400',
   fontSize: '18px',
   lineHeight: '120%',
   letterSpacing: '0%',
   textAlign: 'center',
   marginTop: '15px',
})
