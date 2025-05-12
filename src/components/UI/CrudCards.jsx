import { Avatar, Box, Stack, styled, Typography } from '@mui/material'

const CrudCards = ({ card }) => {
   const { fullName, event, title, date, image, avatar } = card

   return (
      <StyledBox>
         <StyledCard>
            <BoxContainer>
               <Box display="flex" alignItems="center" gap={2}>
                  <Avatar src={avatar} />

                  <ContainerBox>
                     <Typography fontWeight="bold">{fullName}</Typography>
                     <Typography color="green">{event}</Typography>
                  </ContainerBox>

               </Box>
            </BoxContainer>

            <Typography variant="h6" mt={2}>
               {title}
            </Typography>

            <StyledImage src={image} alt={title} />
            <Typography mt={1} fontSize="14px" color="gray">
               {date}
            </Typography>
         </StyledCard>
      </StyledBox>
   )
}

export default CrudCards

const StyledBox = styled(Box)(() => ({
   marginTop: '100px',
   marginLeft: '30px',
}))

const StyledCard = styled(Box)({
   padding: '16px',
   borderRadius: '12px',
   boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
   marginBottom: '20px',
   width: '360px',
})

const BoxContainer = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
})

const StyledStack = styled(Stack)(() => ({
   
}))

const StyledImage = styled('img')({
   width: '100%',
   height: 'auto',
   borderRadius: '8px',
   marginTop: '12px',
})

const ContainerBox = styled(Box)(() => ({
   display:"flex",
   gap:"30px"
}))