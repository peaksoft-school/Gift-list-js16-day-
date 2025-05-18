import { Box, DialogTitle, Stack, styled, Typography } from '@mui/material'
import Modal from './UI/Modal'
import UserCard from './UI/UserCard'
import Button from './UI/Button'
import { DeleteOutlineOutlined } from '@mui/icons-material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { USERS_THUNK } from '../store/slices/admin/users/usersThunk'

const UserList = () => {
   const { selectedUsers } = useSelector((state) => state.user)

   const [users, setUsers] = useState([
      {
         id: 1,
         image: 'https://99px.ru/sstorage/56/2020/04/12604201733508710.jpg',
         fullName: 'Annet Black',
         amout: '12',
         text: 'желаемых подарков',
      },
   ])
   const dispatch = useDispatch()
   const [open, setOpen] = useState(false)
   const [selectedUserId, setSelectedUserId] = useState(null)

   const handleOpenModal = (id) => {
      setSelectedUserId(id)
      setOpen(true)
   }

   const handleCloseModal = () => {
      setOpen(false)
      setSelectedUserId(null)
   }

   // const handleDeleteUser = () => {
   //    setUsers((prev) => prev.filter((user) => user.id !== selectedUserId))
   //    handleCloseModal()
   // }

   const handleDeleteUser = (id) => {
      dispatch(USERS_THUNK.deleteUsers({ id }))
   }

   // const selectedUser = users.find((user) => user.id === selectedUserId)

   return (
      <StyledBox>
         <Typography>Пользователи</Typography>

         {users.map((user) => (
            <UserCard
               key={user.id}
               variant="horiz"
               user={user}
               onVisibleModal={() => handleOpenModal(user.id)}
            />
         ))}

         <Modal open={open} onClose={handleCloseModal}>
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
                     onClick={handleCloseModal}
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

export default UserList

const StyledBox = styled(Box)(() => ({
   marginTop: '90px',
   marginLeft: '40px',
   fontFamily: 'Inter',
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
