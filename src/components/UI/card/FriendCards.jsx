import { Image } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'
import Button from "../Button"
import styled from 'styled-components'

const FriendCards = ({ friend }) => {
   return (
      <FlexContainer>
         <StyledBox>
            <StyledImage src={friend.image} />
            <StyledTitle> {friend.fullName}</StyledTitle>

            <Text>
               <p> Желаний {friend.desires} </p>
               <p> Праздников {friend.holidays}</p>
            </Text>
            <Button variant="outlined">Принять заявку</Button>
            <Button variant="warning" desabled>Отклонить</Button>
         </StyledBox>
      </FlexContainer>
   )
}

export default FriendCards

const FlexContainer = styled(Container)({
   display: 'flex',
   justifyContent: 'space-around',
   gap: '20px',
   flexWrap: 'wrap',
   margin: '0 auto',
})

const StyledBox = styled(Box)({
   width: "200px",
   height: "256px",
   background: "linear-gradient(#f3e5f5 50%, #ffffff 50%)",

   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
   boxShadow: "0.4px 10px rgba(0, 0, 0, 0, 1)",
   border: "3px",
   borderRadius: "10px",
})

const StyledImage = styled("img")({
   width: "100px",
   height: "100px",
   borderRadius: "50%",
   marginBottom: "10px",
   zIndex: 1,
})

const StyledTitle = styled(Typography)({
   fontFamily: "Inter",
   fontWeight: "400",
   fontSize: "16px",
   lineHeight: "100%",
   letterSpacing: "2%",
   backgroundColor: "white",
   padding: "5px",
   borderRadius: "5px",
   textAlign: "center",
})

const Text = styled(Typography)({
   fontfamily: "Inter",
   fontWeight: "400",
   fontSize: "12px",
   color: "gray",
   display: "flex",
   justifyContent: "space-around",
   gap: "15px",
   paddingTop: "20px",
})
