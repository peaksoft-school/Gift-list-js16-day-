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

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleVisbleModal = () => setOpen((prev) => !prev)

   useEffect(() => {
      dispatch(USERS_THUNK.getAllUsers())
   }, [])

   const handleDeleteUser = (id) => {
      dispatch(USERS_THUNK.deleteUsers({ id }))
   }

   const handleNavigate = (id) => navigate(`/admin/users/${id}`)

   return (
      <StyledBox>
         <Typography variant="h5">Пользователи</Typography>

         <Box className="users-container">
            {users?.map((user) => (
               <UserCard
                  key={user.id}
                  variant="horiz"
                  user={user}
                  onVisibleModal={() => handleVisbleModal}
                  onNavigate={handleNavigate}
               />
            ))}
         </Box>

         <Modal open={open} onClose={handleVisbleModal}>
            <StyledStack>
               <CustomBox>
                  <StyledDialogTitle>
                     <StyledDeleteOutlineOutlined />
                     <Typography>Удаление</Typography>
                  </StyledDialogTitle>

                  <StyledTypography>
                     Вы уверены, что хотите удалить Annet Black?
                  </StyledTypography>
               </CustomBox>

               <BoxContainer>
                  <Button
                     variant="warning"
                     onClick={handleVisbleModal}
                     sx={{ width: '232px', height: '37px' }}
                  >
                     Отмена
                  </Button>
                  <Button
                     variant="contained"
                     onClick={() => handleDeleteUser(selectedUserId)}
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
   height: '100vh',
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
   width: '544px',
   paddingBottom: '30px',
}))

const CustomBox = styled(Box)(() => ({
   marginRight: '60px',
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
   paddingLeft: '65px',
   paddingBottom: '30px',
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
   paddingBottom: '20px',
}))
