import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, DialogTitle, Stack, styled, Typography } from '@mui/material'
import { DeleteOutlineOutlined } from '@mui/icons-material'
import Modal from '../../../components/UI/Modal'
import UserCard from '../../../components/UI/card/UserCard'
import Button from '../../../components/UI/Button'
import { USERS_THUNK } from '../../../store/slices/admin/users/usersThunk'
import { useNavigate } from 'react-router'

const Users = () => {
   const { users } = useSelector((state) => state.users)
   const [open, setOpen] = useState(false)
   const [selectedUserId, setSelectedUserId] = useState(null)

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleVisibleModal = (id) => {
      setSelectedUserId(id)
      setOpen(true)
   }

   const handleCloseModal = () => {
      setOpen(false)
      setSelectedUserId(null)
   }

   useEffect(() => {
      dispatch(USERS_THUNK.getAllUsers())
   }, [])

   const handleDeleteUser = () => {
      if (selectedUserId) {
         dispatch(USERS_THUNK.deleteUser({ id: selectedUserId }))
         handleCloseModal()
      }
   }

   const handleNavigate = (id) => navigate(`/admin/users/${id}`)

   const selectedUser = users.find((user) => user.id === selectedUserId)

   return (
      <StyledBox>
         <Typography variant="h5">Пользователи</Typography>

         <Box className="users-container">
            {users?.map((user) => (
               <UserCard
                  key={user.id}
                  variant="horiz"
                  user={user}
                  onVisibleModal={() => handleVisibleModal(user.id)}
                  onNavigate={handleNavigate}
               />
            ))}
         </Box>

         <Modal open={open} onClose={handleVisibleModal}>
            <StyledStack>
               <CustomBox>
                  <StyledDialogTitle>
                     <StyledDeleteOutlineOutlined />
                  </StyledDialogTitle>

                  <Box>
                     <Typography>Удаление</Typography>

                     <StyledTypography>
                        Вы уверены, что хотите удалить {selectedUser?.firstname}
                        {selectedUser?.lastname}?
                     </StyledTypography>
                  </Box>
               </CustomBox>

               <BoxContainer>
                  <Button
                     variant="warning"
                     onClick={handleCloseModal}
                     sx={{ width: '232px', height: '37px' }}
                  >
                     Отмена
                  </Button>

                  <Button
                     variant="contained"
                     onClick={handleDeleteUser}
                     sx={{ width: '232px', height: '37px' }}
                  >
                     Удалить
                  </Button>
               </BoxContainer>
            </StyledStack>
         </Modal>
      </StyledBox>
   )
}

export default Users

const StyledBox = styled(Box)(() => ({
   padding: '110px 0 0 18rem',
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

const StyledStack = styled(Stack)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
}))

const CustomBox = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
}))

const StyledDeleteOutlineOutlined = styled(DeleteOutlineOutlined)(() => ({
   backgroundColor: '#FFEBEB',
   color: 'red',
   width: ' 45px',
   height: ' 45px',
   gap: '10px',
   borderRadius: '35px',
   padding: '10px',
}))

const StyledTypography = styled(Typography)(() => ({
   fontFamily: 'Inter',
   color: '#87898E',
   fontWeight: '400',
   fontSize: '14px',
}))

const BoxContainer = styled(Box)(() => ({
   gap: '15px',
   borderRadius: '12px',
   display: 'flex',
}))

const StyledDialogTitle = styled(DialogTitle)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'start',
}))
