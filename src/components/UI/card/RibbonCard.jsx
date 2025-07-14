import { Box, styled, Tooltip, Typography } from '@mui/material'
import MeatBalls from '../MeetBalls'
import { USER_CARD_OPTIONS } from '../../../utils/helpers'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { RIBBON_THUNK } from '../../../store/slices/ribbon/RibbonThunk'

const RibbonCard = ({
   wish,
   onNavigate,
   handleReserve,
   handleAddToGifts,
   handleReport,
}) => {
   const { role } = useSelector((state) => state.auth)

   const {
      fullName,
      profileImage,
      image,
      createdAt,
      holidayName,
      massage,
      id,
      date,
      wishName,
      giftName,
      status,
   } = wish

   console.log(id)

   const navigate = useNavigate()
   const dispatch = useDispatch()

   return (
      <StyledCard key={id} onClick={onNavigate} status={status}>
         <Box className="titles">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
               <img
                  src={
                     profileImage === null || profileImage === ''
                        ? 'https://as1.ftcdn.net/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'
                        : profileImage
                  }
                  alt="profile-image"
                  className="profile-image"
                  onClick={(e) => {
                     e.stopPropagation()

                     dispatch(RIBBON_THUNK.getUserProfile({ id, navigate }))
                  }}
               />
               <Typography className="title">{fullName}</Typography>
            </Box>

            <Tooltip title={holidayName}>
               <Typography className="status-text">
                  {holidayName || status}
               </Typography>
            </Tooltip>
         </Box>

         <Typography className="wish-name">{wishName || giftName}</Typography>

         <img src={image} alt={fullName} />

         <Box className="text-content">
            <Box className="details">
               <Typography className="grey-text">
                  {createdAt || date}
               </Typography>

               <Box className="status-content">
                  <Typography className="grey-text">{massage}</Typography>

                  <MeatBalls
                     options={USER_CARD_OPTIONS}
                     onChange={(title) => {
                        if (title === 'Забронировать') handleReserve(id)
                        if (title === 'Добавить в мои подарки')
                           handleAddToGifts(id)
                        if (title === 'Пожаловаться') handleReport(id)
                     }}
                  />
               </Box>
            </Box>
         </Box>
      </StyledCard>
   )
}

export default RibbonCard

const StyledCard = styled(Box)(({ status }) => ({
   backgroundColor: 'white',
   maxWidth: '349px',
   width: '100%',
   // maxHeight: '260px',
   // height: '100%',
   padding: '16px',
   borderRadius: '8px',
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   fontSize: '14px',

   '& .wish-name': {
      fontSize: '14px',
      fontWeight: '500',
   },

   '& .profile-image': {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
   },

   '& img': {
      width: '100%',
      height: '147px',
      borderRadius: '6px',
   },

   '& .text-content': {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
   },
   '& .titles': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
   },

   '& .details': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
   },

   '& .title': {
      fontWeight: '500',
      lineHeight: '130%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '154px',
      fontSize: '16px',
   },

   '& .status-text': {
      color: status === 'USED' ? 'orange' : 'green',
      textAlign: 'end',
      fontSize: '13px',

      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
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
      fontSize: '13px',
   },
}))
