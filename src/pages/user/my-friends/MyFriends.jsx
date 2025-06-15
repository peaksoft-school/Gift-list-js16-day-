import { Box, styled, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FRIENDS_THUNK } from '../../../store/slices/user/friends/friendsThunk'
import NoMailings from '../../../assets/images/empty-state.png'
import FriendCard from '../../../components/UI/card/FriendCard'

const MyFriends = () => {
   const { friends } = useSelector((state) => state.friends)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(FRIENDS_THUNK.getAllMyFriends())
   }, [])

   return (
      <StyledContainer>
         <Typography>Друзья</Typography>

         {friends?.length === 0 || friends === undefined ? (
            <StyledNotBlockBox>
               <img src={NoMailings} alt="icon" />

               <h1>Ничего нет!</h1>
            </StyledNotBlockBox>
         ) : (
            friends?.map((friend) => (
               <FriendCard key={friend.id} friend={friend} />
            ))
         )}
      </StyledContainer>
   )
}

export default MyFriends

const StyledContainer = styled(Box)({
   padding: '0 20px',

   '& .MuiTypography-body1': {
      color: '#020202',
      fontSize: '20px',
      fontWeight: '500',
   },
})

const StyledNotBlockBox = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center',
   margin: 'auto',

   '& img': {
      width: '300px',
   },
}))
