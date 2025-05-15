import styled from 'styled-components'
import { GIFTS, HOLIDAYS } from '../../utils/helpers'
import { Box, Typography } from '@mui/material'
import UserCard from '../UI/UserCard'
import FriendCard from '../UI/FriendCard'

const GiftHolydays = () => {
   return (
      <Container>
         {/* <UserCard />
         <FriendCard /> */}
         <TopRow>
            <SectionTitle>Желаемые подарки</SectionTitle>
            <a href="" size="16px">
               Смотреть все
            </a>
         </TopRow>
         <CardsRow>
            {GIFTS.map((gift, idx) => (
               <Card key={idx}>
                  <CardImage src={gift.img} alt={gift.name} />
                  <Typography>{gift.name}</Typography>
                  <Typography
                     variant="caption"
                     color="text.secondary"
                     marginRight="180px"
                  >
                     {gift.date}
                  </Typography>
               </Card>
            ))}
         </CardsRow>
         <TopRow>
            <SectionTitle>Праздники</SectionTitle>
            <a href="" size="small">
               Смотреть все
            </a>
         </TopRow>
         <CardsRow>
            {HOLIDAYS.map((h, idx) => (
               <Card key={idx}>
                  <CardImage src={h.img} alt={h.name} />
                  <Typography>{h.name}</Typography>
               </Card>
            ))}
         </CardsRow>
      </Container>
   )
}

export default GiftHolydays

const Container = styled('div')(() => ({
   padding: '20px',
   borderRadius: '8px',
}))

const TopRow = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   margin: 24,
})

const CardsRow = styled(Box)({
   display: 'flex',
   gap: 26,
})

const Card = styled(Box)({
   borderRadius: 8,
   boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
   padding: 14,
   height: 247,
   textAlign: 'center',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   backgroundColor: '#fff',
})

const CardImage = styled('img')({
   width: 282,
   borderRadius: 4,
   marginBottom: 8,
   objectFit: 'cover',
   height: 157,
})
const SectionTitle = styled('p')({
   fontWeight: 500,
   margin: '32px 0 8px 0',
   fontSize: '1.5rem',
})
