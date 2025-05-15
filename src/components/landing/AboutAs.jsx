import Slider from 'react-slick'
import { Container, Grid, Typography, Avatar, Box, styled } from '@mui/material'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FRIENDS } from '../../utils/constants/index'
import MackBook from '../../assets/images/MackBookPro.svg'

const sliderSettings = {
   infinite: true,
   arrows: true,
   speed: 3000,
   autoplay: true,
   autoplaySpeed: 1000,
   cssEase: 'linear',
   pauseOnHover: true,
   variableWidth: true,
}

const AboutAs = () => (
   <Section>
      <StyledContainer>
         <StyledGrid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
               <LaptopImage src={MackBook} alt="laptop" />
            </Grid>

            <Grid item xs={12} md={6}>
               <Title>О проекте</Title>

               <Paragraph>
                  Найти удачный подарок, который принесёт радость, не всегда
                  <br />
                  простая задача...
               </Paragraph>

               <Paragraph>
                  Благодаря нашему сервису у вас есть возможность не только
                  <br />
                  обрадовать подарком, но и помочь другим приобрести
                  <br />
                  необходимые им вещи.
               </Paragraph>

               <Paragraph>
                  В разделе благодарительность вы можете найти список
                  <br />
                  опубликованных вещей, забронировать, и связываетесь <br />с их
                  обладателем.
               </Paragraph>
            </Grid>
         </StyledGrid>

         <SliderWrapper>
            <StyledSlider {...sliderSettings}>
               {FRIENDS.map(({ img, name, company, role, personname }, i) => (
                  <Slide key={i}>
                     <AvatarWrapper>
                        <TeamAvatar src={img} alt={name} />
                     </AvatarWrapper>

                     <TeamName>
                        {personname},
                        <br />
                        {role}
                        <br />
                        {company}
                     </TeamName>
                  </Slide>
               ))}
            </StyledSlider>
         </SliderWrapper>
      </StyledContainer>
   </Section>
)

export default AboutAs

const Section = styled('section')(({ theme }) => ({
   backgroundColor: '#fff',
   paddingTop: theme.spacing(10),
   paddingBottom: theme.spacing(10),
}))

const StyledContainer = styled(Container)(({ theme }) => ({
   maxWidth: '1200px',
}))
const StyledGrid = styled(Grid)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'row-reverse',
}))

const Title = styled(Typography)(({ theme }) => ({
   fontSize: '46px',
   fontWeight: 600,
   marginBottom: theme.spacing(2),
}))

const Paragraph = styled(Typography)(() => ({
   marginTop: '10px 100px 0 0 ',
   lineHeight: 1.6,
}))

const LaptopImage = styled('img')(() => ({
   width: '100%',
   height: 'auto',
   maxWidth: '100%',
   display: 'block',
}))

const SliderWrapper = styled(Box)(({ theme }) => ({
   marginTop: theme.spacing(10),
}))

const StyledSlider = styled(Slider)(() => ({
   display: 'flex',
   alignItems: 'center',
   maxWidth: '100%',
   margin: '0 auto',

   '& .slick-slide': {
      padding: '0 16px',
   },
}))

const Slide = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   width: '200px',
}))

const AvatarWrapper = styled(Box)(() => ({
   width: '170px',
   height: '170px',
   marginBottom: '12px',
}))

const TeamAvatar = styled(Avatar)(() => ({
   width: '100%',
   height: '100%',
   borderRadius: '0',
   objectFit: 'cover',
}))

const TeamName = styled(Typography)(() => ({
   fontWeight: 500,
   textAlign: 'center',
}))
