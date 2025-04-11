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
         {COUNTER.map((COUNTER, id) => (
            <Box
               key={id}
               sx={{
                  textAlign: 'center',
                  color: '#9333ea',
                  fontWeight: '500',
                  fontSize: '54px',
               }}
            >
               <Box sx={{ fontSize: '32px', fontWeight: 'bold' }}>
                  <CountUp end={COUNTER.end} /> {COUNTER.label}
               </Box>

               <StyledText>{COUNTER.text}</StyledText>
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
})

const StyledText = styled(Typography)({
   fontFamily: 'Inter',
   color: 'black',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '120%',
   letterSpacing: '0%',
   textAlign: 'center',
   marginTop: '15px',
})
