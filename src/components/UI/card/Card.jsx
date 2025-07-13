import { Box, styled, Typography } from '@mui/material'
import MeatBalls from '../MeetBalls'
import { USER_CARD_OPTIONS } from '../../../utils/helpers'

const Card = ({ wish }) => {
   const { name, image, createdAt, holidayName, massage, id, date } = wish

   return (
      <StyledCard key={id}>
         <img src={image} alt={name} />

         <Box className="text-content">
            <Box className="titles">
               <Typography className="title">{name}</Typography>
               <Typography className="status-text">{holidayName}</Typography>
            </Box>

            <Box className="details">
               <Typography className="grey-text">
                  {createdAt || date}
               </Typography>

               <Box className="status-content">
                  <Typography className="grey-text">{massage}</Typography>

                  <MeatBalls options={USER_CARD_OPTIONS} />
               </Box>
            </Box>
         </Box>
      </StyledCard>
   )
}

export default Card

const StyledCard = styled(Box)(() => ({
   backgroundColor: 'white',
   maxWidth: '349px',
   width: '100%',
   maxHeight: '260px',
   height: '100%',
   padding: '1rem',
   borderRadius: '8px',
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   fontSize: '14px',

   '& img': {
      width: '300px',
      height: '147px',
      borderRadius: '6px',
   },

   '& .text-content': {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',

      '& .titles': {
         display: 'flex',
         justifyContent: 'space-between',
      },

      '& .details': {
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
      },

      '& .title': {
         fontWeight: '600',
         lineHeight: '130%',
         marginBottom: '9px',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
         whiteSpace: 'nowrap',
         width: '154px',
      },

      '& .status-text': {
         color: 'green',
         textAlign: 'end',
      },

      '& .status-content': {
         display: 'flex',
         alignItems: 'center',
      },

      '& .grey-text': {
         fontWeight: '400',
         lineHeight: '100%',
         marginRight: '14px',
         color: 'grey',
      },
   },
}))
