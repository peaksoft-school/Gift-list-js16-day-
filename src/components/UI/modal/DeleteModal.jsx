import { Box, DialogTitle, Stack, styled, Typography } from '@mui/material'
import Modal from './Modal'
import { DeleteOutlineOutlined } from '@mui/icons-material'
import Button from '../Button'

const DeleteModal = ({
   open,
   onClose,
   onDelete,
   selectedUser,
   selectedUserId,
}) => {
   return (
      <Modal open={open} onClose={onClose}>
         <StyledStack>
            <CustomBox>
               <StyledDialogTitle>
                  <StyledDeleteOutlineOutlined />
               </StyledDialogTitle>

               <Box>
                  <Typography variant="h6">Удаление</Typography>

                  <StyledTypography>
                     {selectedUser
                        ? `Вы уверены, что хотите удалить ${selectedUser.fullName ? selectedUser.fullName : `${selectedUser.firstname} ${selectedUser.lastname}`}?`
                        : 'Вы уверены, что хотите удалить пользователя?'}
                  </StyledTypography>
               </Box>
            </CustomBox>

            <BoxContainer>
               <Button
                  variant="warning"
                  onClick={onClose}
                  className="cancel-btn"
               >
                  Отмена
               </Button>

               <Button
                  variant="contained"
                  onClick={() => onDelete(selectedUserId)}
                  className="delete-btn"
               >
                  Удалить
               </Button>
            </BoxContainer>
         </StyledStack>
      </Modal>
   )
}

export default DeleteModal

const StyledStack = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
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
   marginBottom: '20px',
   gap: '10px',
   borderRadius: '35px',
   padding: '10px',
}))

const StyledTypography = styled(Typography)(() => ({
   fontFamily: 'Inter',
   color: '#87898E',
   marginBottom: '10px',
   fontWeight: '400',
   fontSize: '14px',
}))

const BoxContainer = styled(Box)(() => ({
   gap: '15px',
   borderRadius: '12px',
   display: 'flex',

   '& .cancel-btn': {
      width: '232px',
      height: '37px',
   },

   '& .delete-btn': {
      width: '232px',
      height: '37px',
   },
}))

const StyledDialogTitle = styled(DialogTitle)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'start',
}))
