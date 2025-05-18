import CountUp from 'react-countup'
import { Box, Typography, styled } from '@mui/material'
import { STATISTICS } from '../../utils/constants'

const Statistics = () => (
   <StyledBox>
      {STATISTICS.map(({ end, label, text }) => (
         <Box key={end}>
            <Box>
               <CountUp end={end} duration={5} /> {label}
            </Box>

            <StyledText>{text}</StyledText>
         </Box>
      ))}
   </StyledBox>
)

export default Statistics

const StyledBox = styled(Box)({
   display: 'flex',
   justifyContent: 'space-around',
   padding: '40px',
   backgroundColor: 'white',
   textAlign: 'center',
   color: '#9333ea',
   fontWeight: '500',
   fontSize: '54px',
   fontWeight: 'bold',
   margin: '120px 0',
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
