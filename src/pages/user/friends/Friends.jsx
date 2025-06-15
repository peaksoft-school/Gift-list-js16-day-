import { Box, styled, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FRIENDS_THUNK } from '../../../store/slices/user/friends/friendsThunk'

const Friends = () => {
   const { friends } = useSelector((state) => state.friends)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(FRIENDS_THUNK.getAllMyFriends())
   }, [])

   return (
      <StyledContainer>
         <Typography>Друзья</Typography>

         {/* {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
         ))} */}
      </StyledContainer>
   )
}

export default Friends

const StyledContainer = styled(Box)({
   padding: '0 20px',

   '& .MuiTypography-body1': {
      color: '#020202',
      fontSize: '20px',
      fontWeight: '500',
   },
})
