import styled from 'styled-components'

const FriendCards = ({ friend }) => {
   return (
      <FlexContainer>
         <StyledCard>
            <Avatar src={friend.image} />
            <StyledH3> {friend.fullName}</StyledH3>

            <Text>
               <p> Желаний {friend.desires} </p>
               <p> Праздников {friend.holidays}</p>
            </Text>
         </StyledCard>
      </FlexContainer>
   )
}

export default FriendCards

const FlexContainer = styled.div`
   display: flex;
   justify-content: space-around;
   gap: 20px;
   flex-wrap: wrap;
   margin: 0 auto;
   flex-wrap: wrap;
`

const StyledCard = styled.div`
   width: 200px;
   height: 256px;
   background: linear-gradient(#f3e5f5 50%, #ffffff 50%);

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   box-shadow: 0.4px 10px rgba(0, 0, 0, 0, 1);
   border: 3px;
   border-radius: 10px;
`

const Avatar = styled.img`
   width: 100px;
   height: 100px;
   border-radius: 50%;
   margin-bottom: 10px;
`

const StyledH3 = styled.h3`
   font-family: Inter;
   font-weight: 400;
   font-size: 16px;
   line-height: 100%;
   letter-spacing: 2%;
   background-color: white;
   padding: 5px;
   border-radius: 5px;
   text-align: center;
`

const Text = styled.p`
   font-family: Inter;
   font-weight: 400;
   font-size: 12px;
   color: gray;
   display: flex;
   justify-content: space-around;
   gap: 15px;
   padding-top: 20px;
`
