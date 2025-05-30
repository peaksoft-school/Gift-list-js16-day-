import { Box, styled, Typography } from '@mui/material'
import MeatBalls from '../MeetBalls'
import { USER_CARD_OPTIONS } from '../../../utils/helpers'

const Card = ({ wish }) => {
   const { name, image, createdAt, holidayName, massage, id } = wish

   return (
      <StyledCard key={id}>
         {/* <img src={wish.image} alt={wish.name} /> */}
         <img
            src="https://i.pinimg.com/originals/ab/a8/40/aba84049818f9e61a1c7982cefa0403a.jpg"
            alt={name}
         />

         <Box className="text-content">
            <Box>
               <Typography className="title">{name}</Typography>
               <Typography className="grey-text">{createdAt}</Typography>
            </Box>

            <Box>
               <Typography className="status-text">{holidayName}</Typography>

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
   width: '349px',
   padding: '1rem',
   borderRadius: '8px',
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   fontSize: '14px',

   '& img': {
      width: '-webkit-fill-available',
      borderRadius: '6px',
   },

   '& .text-content': {
      display: 'flex',
      justifyContent: 'space-between',

      '& .title': {
         fontWeight: '600',
         lineHeight: '130%',
         marginBottom: '33px',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
         whiteSpace: 'nowrap',
         width: '154px',
      },

      '& .status-text': {
         // color: status === 'new' ? 'green' : 'orange',
         color: 'green',
         textAlign: 'end',
      },

      '& .status-content': {
         display: 'flex',
         alignItems: 'center',
         marginTop: '1rem',
      },

      '& .grey-text': {
         fontWeight: '400',
         lineHeight: '100%',
         marginRight: '14px',
         color: 'grey',
      },
   },
}))
