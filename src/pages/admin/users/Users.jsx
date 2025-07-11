import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Box, styled, Typography } from '@mui/material'
import UserCard from '../../../components/UI/card/UserCard'
import DeleteModal from '../../../components/UI/modal/DeleteModal'
import { USERS_THUNK } from '../../../store/slices/admin/users/usersThunk'
import NoMailings from '../../../assets/images/empty-state.png'

const Users = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { users } = useSelector((state) => state.users) || {}

   const [open, setOpen] = useState(false)
   const [selectedUserId, setSelectedUserId] = useState(null)

   useEffect(() => {
      dispatch(USERS_THUNK.getAllUsers())
   }, [dispatch])

   const handleVisibleModal = (id) => {
      setSelectedUserId(id)
      setOpen(true)
   }

   const handleCloseModal = () => {
      setOpen(false)
      setSelectedUserId(null)
   }

   const handleDeleteUser = (id) => {
      if (!id) return
      dispatch(USERS_THUNK.deleteUser({ userId: id, handleCloseModal }))
   }

   const handleNavigate = (id) => {
      dispatch(USERS_THUNK.getUser({ id, navigate }))
   }

   const selectedUser = users?.find((user) => user.id === selectedUserId)

   return (
      <StyledBox>
         <Typography variant="h5">Пользователи</Typography>

         <Box className="users-container">
            {users?.length === 0 ? (
               <StyledNotBlockBox>
                  <img src={NoMailings} alt="icon" />

                  <h1>Нет пользователей!</h1>
               </StyledNotBlockBox>
            ) : (
               users?.map((user) => (
                  <UserCard
                     key={user.id}
                     variant="horiz"
                     user={user}
                     onVisibleModal={() => handleVisibleModal(user.id)}
                     onNavigate={handleNavigate}
                  />
               ))
            )}
         </Box>

         <DeleteModal
            open={open}
            onClose={handleCloseModal}
            onDelete={handleDeleteUser}
            selectedUser={selectedUser}
            selectedUserId={selectedUserId}
         />
      </StyledBox>
   )
}

export default Users

const StyledBox = styled(Box)(() => ({
   fontFamily: 'Inter',
   display: 'flex',
   flexDirection: 'column',
   gap: '31px',
   backgroundColor: '#F7F8FA',
   margin: '0 0 0 20px',

   '& .users-container': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '3rem',
   },
}))

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
