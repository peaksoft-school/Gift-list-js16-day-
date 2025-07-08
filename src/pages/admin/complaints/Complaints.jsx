import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import CharityCard from '../../../components/UI/card/CharityCard'
import { COMPLAINTS_THUNK } from '../../../store/slices/admin/complaints/complaintsThunk'
import { COMPLAINTS_ACTIONS } from '../../../store/slices/admin/complaints/complaintsSlice'
import toastifyNotify from '../../../utils/helpers/ToastifyNotify'

const StyledContainer = styled(Box)(({ theme }) => ({
   padding: theme.spacing(3),
}))

const Complaints = () => {
   const dispatch = useDispatch()
   const { complaints, loading, error, deleteLoading, blockLoading } =
      useSelector((state) => state.complaints)

   useEffect(() => {
      dispatch(COMPLAINTS_THUNK.getAllComplaints())
   }, [dispatch])

   useEffect(() => {
      console.error('Ошибка:', error)
      dispatch(COMPLAINTS_ACTIONS.clearError())
   }, [error, dispatch])

   const handleDeleteComplaint = async (id) => {
      try {
         await dispatch(COMPLAINTS_THUNK.deleteComplaint(id)).unwrap()
         toastifyNotify({
            title: 'Успешно',
            message: 'Жалоба успешно удалена',
            type: 'success',
         })
      } catch (error) {
         toastifyNotify({
            title: 'Ошибка',
            message: 'Ошибка при удалении жалобы: ' + error.message,
            type: 'error',
         })
      }
   }

   const handleDeletePost = async (id) => {
      try {
         await dispatch(COMPLAINTS_THUNK.deleteComplaintPost(id)).unwrap()
         toastifyNotify({
            title: 'Успешно',
            message: 'Пост успешно удален',
            type: 'success',
         })
      } catch (error) {
         toastifyNotify({
            title: 'Ошибка',
            message: 'Ошибка при удалении поста: + error.message',
            type: 'error',
         })
      }
   }

   const handleBlockUser = async (id) => {
      try {
         await dispatch(COMPLAINTS_THUNK.blockUser(id)).unwrap()
         toastifyNotify({
            title: 'Успешно',
            message: 'Пользователь успешно заблокирован',
            type: 'success',
         })
      } catch (error) {
         toastifyNotify({
            title: 'Ошибка',
            message: 'Ошибка при блокировке пользователя: ' + error.message,
            type: 'error',
         })
      }
   }

   return (
      <StyledContainer>
         <Box mt={4}>
            <CharityCard />
         </Box>
      </StyledContainer>
   )
}

export default Complaints
