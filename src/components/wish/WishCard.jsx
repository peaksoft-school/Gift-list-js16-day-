import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { styled } from '@mui/material'
import Button from '../UI/Button'
import { WISH_THUNK } from '../../store/wish/wishThunk'

const WishCard = ({ wish, onEdit }) => {
   const dispatch = useDispatch()
   const [isDeleting, setIsDeleting] = useState(false)

   const handleDeleteClick = async () => {
      if (window.confirm('Вы уверены, что хотите удалить это желание?')) {
         setIsDeleting(true)
         try {
            await dispatch(WISH_THUNK.deleteWish(wish.id)).unwrap()
         } catch (error) {
            console.error('Ошибка при удалении желания:', error)
         } finally {
            setIsDeleting(false)
         }
      }
   }

   const handleEditClick = () => {
      onEdit(wish)
   }

   return (
      <CardContainer>
         <ImageContainer>
            {wish.image ? (
               <WishImage src={wish.image} alt={wish.name} />
            ) : (
               <NoImage>Нет изображения</NoImage>
            )}
         </ImageContainer>

         <CardContent>
            <WishName>{wish.name}</WishName>

            <MetaSection>
               <MetaItem>
                  <MetaLabel>Праздник:</MetaLabel>
                  <MetaValue>{wish.holidayName || 'Не указан'}</MetaValue>
               </MetaItem>
               <MetaItem>
                  <MetaLabel>Дата:</MetaLabel>
                  <MetaValue>{wish.holidayDate || 'Не указана'}</MetaValue>
               </MetaItem>
            </MetaSection>

            {wish.description && <Description>{wish.description}</Description>}

            {wish.link && (
               <ProductLink
                  href={wish.link}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Посмотреть товар
               </ProductLink>
            )}

            <ActionButtons>
               <Button
                  variant="outlined"
                  onClick={handleEditClick}
                  size="small"
               >
                  Редактировать
               </Button>
               <Button
                  variant="outlined"
                  color="error"
                  onClick={handleDeleteClick}
                  disabled={isDeleting}
                  size="small"
               >
                  {isDeleting ? 'Удаление...' : 'Удалить'}
               </Button>
            </ActionButtons>
         </CardContent>
      </CardContainer>
   )
}

export default WishCard

// Styles
const CardContainer = styled('div')({
   backgroundColor: '#fff',
   borderRadius: '12px',
   overflow: 'hidden',
   boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
   display: 'flex',
   flexDirection: 'column',
   transition: 'transform 0.2s ease, box-shadow 0.2s ease',
   '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
   },
})

const ImageContainer = styled('div')({
   height: '180px',
   overflow: 'hidden',
   backgroundColor: '#f3f4f8',
   position: 'relative',
})

const WishImage = styled('img')({
   width: '100%',
   height: '100%',
   objectFit: 'cover',
   transition: 'transform 0.2s ease',
   '&:hover': {
      transform: 'scale(1.05)',
   },
})

const NoImage = styled('div')({
   width: '100%',
   height: '100%',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   color: '#b0b7c3',
   fontSize: '14px',
   fontWeight: 500,
})

const CardContent = styled('div')({
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
   color: '#333',
   lineHeight: '1.4',
})

const MetaSection = styled('div')({
   marginBottom: '12px',
})

const MetaItem = styled('div')({
   display: 'flex',
   fontSize: '14px',
   marginBottom: '4px',
   alignItems: 'center',
})

const MetaLabel = styled('span')({
   fontWeight: 500,
   marginRight: '8px',
   color: '#666',
   minWidth: '70px',
})

const MetaValue = styled('span')({
   color: '#333',
})

const Description = styled('p')({
   fontSize: '14px',
   color: '#666',
   margin: '12px 0',
   lineHeight: '1.5',
})

const ProductLink = styled('a')({
   fontSize: '14px',
   color: '#2196f3',
   textDecoration: 'none',
   marginBottom: '16px',
   fontWeight: 500,
   '&:hover': {
      textDecoration: 'underline',
   },
})

const ActionButtons = styled('div')({
   display: 'flex',
   gap: '8px',
   marginTop: 'auto',
   justifyContent: 'flex-end',
})
