import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, CircularProgress, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import CharityCard from '../../../components/UI/card/CharityCard'
import { COMPLAINTS_THUNK } from '../../../store/slices/admin/complaints/complaintsThunk'
import { COMPLAINTS_ACTIONS } from '../../../store/slices/admin/complaints/complaintsSlice'
import toastifyNotify from '../../../utils/helpers/ToastifyNotify'

const StyledContainer = styled(Box)(({ theme }) => ({
   padding: theme.spacing(2),
}))

const CardsWrapper = styled(Box)(() => ({
   display: 'grid',
   gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
   gap: '16px',
   marginTop: '20px',
}))

const Complaints = () => {
   const dispatch = useDispatch()
   const { complaints, loading, error } = useSelector(
      (state) => state.complaints
   )

   useEffect(() => {
      dispatch(COMPLAINTS_THUNK.getAllComplaints())
   }, [dispatch])

   useEffect(() => {
      if (error) {
         toastifyNotify({
            title: 'Ошибка',
            message: error,
            type: 'error',
         })
         dispatch(COMPLAINTS_ACTIONS.clearError())
      }
   }, [error, dispatch])

   const handleDeleteComplaint = async (id) => {
      try {
         await dispatch(COMPLAINTS_THUNK.deleteComplaint(id)).unwrap()
         toastifyNotify({
            title: 'Успешно',
            message: 'Жалоба успешно удалена',
            type: 'success',
         })

         // Заново получаем список жалоб после удаления
         dispatch(COMPLAINTS_THUNK.getAllComplaints())
      } catch (error) {
         toastifyNotify({
            title: 'Ошибка',
            message: error.message || 'Ошибка при удалении жалобы',
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

         dispatch(COMPLAINTS_THUNK.getAllComplaints())
      } catch (error) {
         toastifyNotify({
            title: 'Ошибка',
            message: error.message || 'Ошибка при удалении поста',
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

         dispatch(COMPLAINTS_THUNK.getAllComplaints())
      } catch (error) {
         toastifyNotify({
            title: 'Ошибка',
            message: error.message || 'Ошибка при блокировке пользователя',
            type: 'error',
         })
      }
   }

   const handleOption = async (option, id) => {
      const actionsMap = {
         'Удалить жалобу': handleDeleteComplaint,
         'Удалить пост': handleDeletePost,
         'Заблокировать пользователя': handleBlockUser,
      }

      const action = actionsMap[option]

      if (!action) {
         toastifyNotify({
            title: 'Ошибка',
            message: 'Неизвестное действие',
            type: 'error',
         })
         return
      }

      try {
         await action(id)
      } catch (error) {
         toastifyNotify({
            title: 'Ошибка',
            message: error.message || 'Что-то пошло не так',
            type: 'error',
         })
      }
   }

   return (
      <StyledContainer>
         <Typography variant="h5" fontWeight={600}>
            Жалобы
         </Typography>

         {loading ? (
            <Box display="flex" justifyContent="center" mt={4}>
               <CircularProgress />
            </Box>
         ) : (
            <CardsWrapper>
               {complaints.map((complaint) => (
                  <CharityCard
                     key={complaint.id}
                     charity={{
                        ownerProfilePhoto: complaint.userResponse?.image || '',
                        ownerFullName:
                           complaint.userResponse?.fullName || 'Неизвестный',
                        giftName:
                           complaint.bookedGiftResponse?.giftName ||
                           'Без названия',
                        bookedByProfilePhoto:
                           complaint.bookedGiftResponse?.image || '',
                        condition: complaint.bookedGiftResponse?.status || '',
                        giftId: complaint.id, // ID жалобы
                        createdAt: complaint.date?.slice(0, 10) || '',
                        statusMessage: complaint.complaintText || '',
                     }}
                     onChangeOption={handleOption}
                  />
               ))}
            </CardsWrapper>
         )}
      </StyledContainer>
   )
}

export default Complaints
