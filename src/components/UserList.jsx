import { Box, Dialog, DialogTitle, styled, Typography } from '@mui/material'
import Modal from './UI/Modal'
import UserCard from './UI/UserCard'
import Button from './UI/Button'
import { DeleteOutlineOutlined } from '@mui/icons-material'

const Users = [
   {
      id: 1,
      image: 'https://99px.ru/sstorage/56/2020/04/12604201733508710.jpg',
      fullName: 'Annet Black',
      amout: '12',
      text: 'желаемых подарков',
   },
]

const UserList = () => {
   return (
      <StyledBox>
         <Typography>Пользователи</Typography>

         {Users.map((user) => (
            <UserCard
               variant="horiz"
               key={user.id}
               user={user}
               onChange={(e) => (
                  <Modal open={open} onClose={onclose}>
                     <Box>
                        <DialogTitle>
                           <DeleteOutlineOutlined /> Удаление
                        </DialogTitle>
                        <Typography>
                           Вы уверены, что хотите удалить Annet Black?
                        </Typography>
                        <Box>
                           <Button variant="warning" disabled onClick={onclose}>
                              Отмена
                           </Button>
                           <Button variant="contained" onClick={onclose}>
                              Удалить
                           </Button>
                        </Box>
                     </Box>
                  </Modal>
               )}
            />
         ))}
      </StyledBox>
   )
}

export default UserList

const StyledBox = styled(Box)(() => ({
   marginTop: '90px',
   marginLeft: '40px',
}))


