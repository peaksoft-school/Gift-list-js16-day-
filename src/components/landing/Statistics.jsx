import CountUp from 'react-countup'
import { Box, Typography, styled } from '@mui/material'
import { STATISTICS } from '../../utils/constants/index'

const Statistics = () => (
   <StyledBox>
      {STATISTICS.map(({ end, label, text }) => (
         <Box>
            <Box>
               <CountUp end={end} /> {label}
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
