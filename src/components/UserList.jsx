import { Box, DialogTitle, styled, Typography } from '@mui/material'
import Modal from './UI/Modal'
import UserCard from './UI/UserCard'
import Button from './UI/Button'
import { DeleteOutlineOutlined } from '@mui/icons-material'
import { useState } from 'react'

const UserList = () => {
   const [users, setUsers] = useState([
      {
         id: 1,
         image: 'https://99px.ru/sstorage/56/2020/04/12604201733508710.jpg',
         fullName: 'Annet Black',
         amout: '12',
         text: 'желаемых подарков',
      },
   ])

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

   const handleDeleteUser = () => {
      setUsers((prev) => prev.filter((user) => user.id !== selectedUserId))
      handleCloseModal()
   }

   const selectedUser = users.find((user) => user.id === selectedUserId)

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
            <Box>
               <StyledDialogTitle>
                  <StyledDeleteOutlineOutlined />
                  Удаление
               </StyledDialogTitle>

               <StyledTypography>
                  Вы уверены, что хотите удалить Annet Black?
               </StyledTypography>

               <BoxContainer>
                  <Button variant="warning" onClick={handleCloseModal}>
                     Отмена
                  </Button>
                  <Button variant="contained" onClick={handleDeleteUser}>
                     Удалить
                  </Button>
               </BoxContainer>
            </Box>
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
   lineHeight: '16px',
}))

const BoxContainer = styled(Box)(() => ({
   display: 'flex',
   gap: '16px',
}))

const StyledDialogTitle = styled(DialogTitle)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'start',
   gap: '7px',
}))
