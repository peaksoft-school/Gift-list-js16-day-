import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, styled, Typography } from '@mui/material'
import Button from '../../../components/UI/Button'
import EditWish from '../../../components/wish/EditWish'
import { useNavigate } from 'react-router'
import { WISH_THUNK } from '../../../store/slices/user/wish/wishThunk'

const WishListDisplay = () => {
   const { wishes, isLoading } = useSelector((state) => state.wish)

   const navigate = useNavigate()
   const dispatch = useDispatch()

   const [editingWish, setEditingWish] = useState(null)

   useEffect(() => {
      dispatch(WISH_THUNK.getWishes())
   }, [dispatch])

   const handleEditClick = (wish) => setEditingWish(wish)

   const handleCloseEdit = () => setEditingWish(null)

   if (editingWish) {
      return <EditWish wish={editingWish} onClose={handleCloseEdit} />
   }

   const handleAddWishNavigate = () => navigate('/user/wish-list/create-wish')

   return (
      <MainStyled>
         <TitleRow>
            <Typography>Мои желания</Typography>

            <Button variant="outlined" onClick={handleAddWishNavigate}>
               Добавить желание
            </Button>
         </TitleRow>

         {!isLoading && wishes?.length === 0 && (
            <EmptyState>
               <EmptyStateText>У вас пока нет желаний в списке</EmptyStateText>
            </EmptyState>
         )}

         <WishGrid>
            {wishes?.map((wish) => (
               <WishCard key={wish.id}>
                  <WishImageContainer>
                     {wish.image ? (
                        <WishImage src={wish.image} alt={wish.name} />
                     ) : (
                        <NoImage>Нет изображения</NoImage>
                     )}
                  </WishImageContainer>
                  <WishContent>
                     <WishName>{wish.name}</WishName>
                     <WishMeta>
                        <MetaItem>
                           <MetaLabel>Праздник:</MetaLabel>
                           <MetaValue>{wish.holidayName}</MetaValue>
                        </MetaItem>
                        <MetaItem>
                           <MetaLabel>Дата:</MetaLabel>
                           <MetaValue>{wish.createdAt}</MetaValue>
                        </MetaItem>
                     </WishMeta>
                     {wish.description && (
                        <WishDescription>{wish.description}</WishDescription>
                     )}
                     {wish.link && (
                        <WishLink
                           href={wish.link}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           Посмотреть товар
                        </WishLink>
                     )}
                     <ButtonRow>
                        <Button
                           variant="outlined"
                           onClick={() => handleEditClick(wish)}
                        >
                           Редактировать
                        </Button>
                     </ButtonRow>
                  </WishContent>
               </WishCard>
            ))}
         </WishGrid>
      </MainStyled>
   )
}

export default WishListDisplay

const MainStyled = styled(Box)({
   background: '#F7F8FA',
   width: '100%',
   padding: '0px 20px',
   display: 'flex',
   flexDirection: 'column',
   gap: '31px',
})

const TitleRow = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',

   '& .MuiTypography-body1': {
      color: '#020202',
      fontSize: '20px',
      fontWeight: '500',
   },
})

const EmptyState = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   padding: '64px 0',
   borderRadius: '12px',
   marginTop: '24px',
})

const EmptyStateText = styled('p')({
   fontSize: '16px',
   color: '#666',
   textAlign: 'center',
})

const WishGrid = styled('div')({
   display: 'grid',
   gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
   gap: '24px',
   marginTop: '24px',
})

const WishCard = styled('div')({
   backgroundColor: '#fff',
   borderRadius: '12px',
   overflow: 'hidden',
   boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
   display: 'flex',
   flexDirection: 'column',
})

const WishImageContainer = styled('div')({
   height: '180px',
   overflow: 'hidden',
   backgroundColor: '#f3f4f8',
})

const WishImage = styled('img')({
   width: '100%',
   height: '100%',
   objectFit: 'cover',
})

const NoImage = styled('div')({
   width: '100%',
   height: '100%',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   color: '#b0b7c3',
   fontSize: '14px',
})

const WishContent = styled('div')({
   padding: '16px',
   display: 'flex',
   flexDirection: 'column',
   flexGrow: 1,
})

const WishName = styled('h3')({
   fontSize: '16px',
   fontWeight: 600,
   marginTop: 0,
   marginBottom: '12px',
})

const WishMeta = styled('div')({
   marginBottom: '12px',
})

const MetaItem = styled('div')({
   display: 'flex',
   fontSize: '14px',
   marginBottom: '4px',
})

const MetaLabel = styled('span')({
   fontWeight: 500,
   marginRight: '8px',
   color: '#666',
})

const MetaValue = styled('span')({
   color: '#333',
})

const WishDescription = styled('p')({
   fontSize: '14px',
   color: '#666',
   margin: '12px 0',
})

const WishLink = styled('a')({
   fontSize: '14px',
   color: '#2196f3',
   textDecoration: 'none',
   marginBottom: '16px',
   '&:hover': {
      textDecoration: 'underline',
   },
})

const ButtonRow = styled('div')({
   display: 'flex',
   justifyContent: 'flex-end',
   marginTop: 'auto',
})
