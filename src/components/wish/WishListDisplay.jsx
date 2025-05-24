import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import Button from '../UI/Button'
import { WISH_THUNK } from '../../store/wish/wishThunk'
import EditWish from './EditWish'
import { Outlet, useNavigate } from 'react-router'

const WishListDisplay = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { wishes, isLoading, error } = useSelector((state) => state.wish)
   const [editingWish, setEditingWish] = useState(null)

   useEffect(() => {
      dispatch(WISH_THUNK.getWishes())
   }, [dispatch])

   const handleEditClick = (wish) => {
      setEditingWish(wish)
   }

   const handleCloseEdit = () => {
      setEditingWish(null)
   }

   if (editingWish) {
      return <EditWish wish={editingWish} onClose={handleCloseEdit} />
   }

   return (
      <MainStyled>
         <Outlet />
         <TitleRow>
            <Title>Мои желания</Title>
            <Button
               variant="outlined"
               onClick={() => navigate('/user/list/create-wish')}
            >
               Добавить желание
            </Button>
         </TitleRow>

         {isLoading && <LoadingText>Загрузка желаний...</LoadingText>}
         {error && <ErrorText>{error}</ErrorText>}

         {!isLoading && wishes.length === 0 && (
            <EmptyState>
               <EmptyStateText>У вас пока нет желаний в списке</EmptyStateText>
            </EmptyState>
         )}

         <WishGrid>
            {wishes.map((wish) => (
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
                           <MetaValue>{wish.holidayDate}</MetaValue>
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

// Styles
const MainStyled = styled('div')({
   padding: '32px',
   background: '#fafbfc',
   minHeight: '100vh',
})

const TitleRow = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: '24px',
})

const Title = styled('h2')({
   fontWeight: 700,
   fontSize: '20px',
   margin: 0,
})

const LoadingText = styled('div')({
   fontSize: '16px',
   color: '#666',
   textAlign: 'center',
   padding: '32px 0',
})

const ErrorText = styled('span')({
   color: 'red',
   fontSize: '14px',
   margin: '16px 0',
   display: 'block',
})

const EmptyState = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   padding: '64px 0',
   backgroundColor: '#f3f4f8',
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
