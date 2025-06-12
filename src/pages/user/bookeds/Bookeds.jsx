import { Box, styled, Typography } from '@mui/material'

const Bookeds = () => {
   return (
      <StyledContainer>
         <Typography>Забронированные</Typography>
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
