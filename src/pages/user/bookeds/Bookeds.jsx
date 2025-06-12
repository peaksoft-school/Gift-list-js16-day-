import { Box, styled, Typography } from '@mui/material'
import BookedCard from '../../../components/UI/card/BookedCard'

const Bookeds = () => {
   return (
      <StyledContainer>
         <Typography>Забронированные</Typography>

         <Typography>Желание</Typography>

         <Box>
            {cards.map((card) => (
               <BookedCard key={id}/>
            ))}
         </Box>
      </StyledContainer>

   
   )
}

export default Bookeds

const StyledContainer = styled(Box)({
   padding: '0 20px',

   '& .MuiTypography-body1': {
      color: '#020202',
      fontSize: '20px',
      fontWeight: '500',
   },
})
