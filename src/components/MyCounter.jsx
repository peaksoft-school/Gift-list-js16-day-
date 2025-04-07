import CountUp from 'react-countup'
import styled from 'styled-components'

const stats = [
   { end: 100, label: 'K+', text: 'Пользователей' },
   { end: 10, label: 'K+', text: 'Размещенных подарков' },
   { end: 15, label: 'K+', text: 'Подаренных подарков' },
   { end: 9, label: 'K+', text: 'Реализованной благотворительной помощи' },
]

const MyCounter = () => {
   return (
      <ContainerDiv>
         {stats.map((stat, id) => (
            <Number key={id}>
               
               <StyledDiv>
                  <CountUp end={stat.end} /> {stat.label}
               </StyledDiv>

               <Text>{stat.text}</Text>
            </Number>
         ))}
      </ContainerDiv>
   )
}
export default MyCounter

const ContainerDiv = styled.div`
   display: flex;
   justify-content: space-around;
   padding: 40px;
   background-color: white;
   border-top: 5px solid #9333ea;
`

const StyledDiv = styled.div`
   font-size: 32px;
   font-weight: bold;
`
const Number = styled.div`
   font-family: Inter;
   text-align: center;
   color: #9333ea;
   font-weight: 500;
   font-size: 54px;
`
const Text = styled.div`
   font-family: Inter;
   color: black;
   font-weight: 400;
   font-size: 14px;
   line-height: 120%;
   letter-spacing: 0%;
   text-align: center;
   margin-top: 15px;
`
