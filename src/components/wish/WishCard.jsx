import React from 'react'
import { styled } from '@mui/material'

const WishCard = ({ wish }) => {
   const formatDate = (dateString) => {
      try {
         if (!dateString) return ''

         const date = new Date(dateString)

         if (isNaN(date.getTime())) return dateString

         const day = date.getDate().toString().padStart(2, '0')
         const month = (date.getMonth() + 1).toString().padStart(2, '0')
         const year = date.getFullYear().toString().slice(2)

         return `${day}.${month}.${year}`
      } catch (e) {
         return dateString
      }
   }

   const getStatusText = (status) => {
      const statusMap = {
         pending: 'В ожидании',
         fulfilled: 'Исполнено',
         cancelled: 'Отменено',
      }
      return statusMap[status] || 'В ожидании'
   }

   return (
      <CardContainer>
         <CardImageContainer>
            {wish.image ? (
               <CardImage src={wish.image} alt={wish.name} />
            ) : (
               <CardPlaceholder>
                  <CardPlaceholderText>Нет изображения</CardPlaceholderText>
               </CardPlaceholder>
            )}
         </CardImageContainer>

         <CardContent>
            <CardTitle>{wish.name || 'Название подарка'}</CardTitle>

            <CardMeta>
               <CardMetaItem>
                  <CardMetaLabel>
                     {wish.holidayName || 'День рождения'}
                  </CardMetaLabel>
                  <CardMetaDate>
                     {formatDate(wish.holidayDate) || '01.01.23'}
                  </CardMetaDate>
               </CardMetaItem>

               <CardStatusContainer>
                  <CardStatus>{getStatusText(wish.status)}</CardStatus>
                  <CardMenu>•••</CardMenu>
               </CardStatusContainer>
            </CardMeta>
         </CardContent>
      </CardContainer>
   )
}

export default WishCard

const CardContainer = styled('div')({
   width: '100%',
   borderRadius: '8px',
   overflow: 'hidden',
   backgroundColor: '#fff',
   boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
   transition: 'transform 0.2s ease, box-shadow 0.2s ease',
   '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
   },
})

const CardImageContainer = styled('div')({
   width: '100%',
   height: '180px',
   position: 'relative',
   backgroundColor: '#f5f6f8',
})

const CardImage = styled('img')({
   width: '100%',
   height: '100%',
   objectFit: 'cover',
   objectPosition: 'center',
})

const CardPlaceholder = styled('div')({
   width: '100%',
   height: '100%',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
})

const CardPlaceholderText = styled('span')({
   color: '#b0b7c3',
   fontSize: '14px',
})

const CardContent = styled('div')({
   padding: '16px',
})

const CardTitle = styled('h3')({
   fontSize: '16px',
   fontWeight: '500',
   margin: '0 0 8px 0',
   color: '#333',
   overflow: 'hidden',
   textOverflow: 'ellipsis',
   whiteSpace: 'nowrap',
})

const CardMeta = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
})

const CardMetaItem = styled('div')({
   display: 'flex',
   flexDirection: 'column',
})

const CardMetaLabel = styled('span')({
   fontSize: '14px',
   color: '#2ecc71',
   marginBottom: '2px',
})

const CardMetaDate = styled('span')({
   fontSize: '14px',
   color: '#666',
})

const CardStatusContainer = styled('div')({
   display: 'flex',
   alignItems: 'center',
   gap: '8px',
})

const CardStatus = styled('span')({
   fontSize: '14px',
   color: '#777',
})

const CardMenu = styled('button')({
   background: 'none',
   border: 'none',
   color: '#777',
   cursor: 'pointer',
   fontSize: '14px',
   fontWeight: 'bold',
   padding: '0',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   width: '24px',
   height: '24px',
   '&:hover': {
      color: '#333',
   },
})
