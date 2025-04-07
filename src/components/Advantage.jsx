import { Favorite, ThumbUp, VolunteerActivism } from '@mui/icons-material'
import Button from './UI/Button'
import styled from 'styled-components'

const Advantage = () => {
   return (
      <Section>
         <FeatureList>
            <article>
               <IconWrapper>
                  <Favorite sx={{ color: 'green' }} />
                  <Title>Дари то, что необходимо</Title>
               </IconWrapper>

               <List>
                  <li>Находи своих близких</li>
                  <li>Просматривай их списки желаний</li>
                  <li>Узнавай о ближайших мероприятиях</li>
               </List>
            </article>

            <article>
               <IconWrapper>
                  <ThumbUp sx={{ color: 'green' }} />
                  <Title>Удобство в использовании</Title>
               </IconWrapper>

               <List>
                  <li>Создавай неограниченное количество желаний</li>
                  <li>Добавляй подарки которые ты действительно хочешь</li>
                  <li>Делись своими желаниями с другими</li>
               </List>
            </article>

            <article>
               <IconWrapper>
                  <VolunteerActivism sx={{ color: 'green' }} />
                  <Title>Твори добро</Title>
               </IconWrapper>

               <List>
                  <li>Дари благотворительные подарки</li>
                  <li>Делись своими вещами</li>
                  <li>Помогай другим приобрести необходимое</li>
               </List>
            </article>
         </FeatureList>

         <Button variant="outlined">ЗАРЕГИСТРИРОВАТЬСЯ</Button>
      </Section>
   )
}

export default Advantage

const Section = styled.section`
   padding: 60px 20px;
   background-color: #fff;
   text-align: center;
`

const FeatureList = styled.div`
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   margin-bottom: 40px;
`

const IconWrapper = styled.div`
   border: 1px;
   border-radius: 50%;
   display: flex;
   justify-content: start;
   align-items: start;
   gap: 15px;
`

const Title = styled.h3`
   font-family: Inter;
   font-weight: 600;
   font-size: 20px;
   line-height: 150%;
   font-weight: bold;
   margin-bottom: 10px;
`

const List = styled.ul`
   font-family: Inter;
   font-weight: 400;
   font-size: 14px;
   line-height: 170%;
   list-style: disc;
   padding-left: 20px;
   text-align: left;
`
