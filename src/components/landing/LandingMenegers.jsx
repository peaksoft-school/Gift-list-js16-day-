import Slider from 'react-slick'
import { styled } from '@mui/material'
import { Container, Grid, Typography, Avatar, Box } from '@mui/material'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { teamDevelops } from '../../utils/constants/index'
import MackBook from '../../assets/images/MackBookPro.svg'

const sliderSettings = {
   infinite: true,
   arrows: false,
   speed: 5000,
   autoplay: true,
   autoplaySpeed: 0,
   cssEase: 'linear',
   pauseOnHover: true,
   variableWidth: true,
}

function LandingMenegers() {
   return (
      <Section>
         <StyledContainer>
            <Grid container spacing={6} alignItems="center">
               <Grid item xs={12} md={6}>
                  <Title>О проекте</Title>
                  <Paragraph>
                     Найти удачный подарок, который принесёт радость, не всегда
                     <br />
                     простая задача...
                  </Paragraph>
                  <Paragraph>
                     Благодаря нашему сервису у вас есть возможность не только{' '}
                     <br />
                     обрадовать подарком, но и помочь другим приобрести
                     <br />
                     необходимые им вещи.
                  </Paragraph>
                  <Paragraph>
                     В разделе благодарительность вы можете найти список
                     опубликованных вещей, забронировать, и связываетесь <br />с
                     их обладателем.
                  </Paragraph>
               </Grid>

               <Grid item xs={12} md={6}>
                  <ImageWrapper>
                     <LaptopImage src={MackBook} alt="Laptop" />
                  </ImageWrapper>
               </Grid>
            </Grid>

            <SliderWrapper>
               <StyledSlider {...sliderSettings}>
                  {teamDevelops.map((person, index) => (
                     <Slide key={index}>
                        <AvatarWrapper>
                           <TeamAvatar src={person.img} alt={person.name} />
                        </AvatarWrapper>
                        <TeamName>
                           {person.name}, {person.role} <br />
                           {person.company}
                        </TeamName>
                     </Slide>
                  ))}
               </StyledSlider>
            </SliderWrapper>
         </StyledContainer>
      </Section>
   )
}

export default LandingMenegers

const Section = styled('section')(({ theme }) => ({
   backgroundColor: '#fff',
   paddingTop: theme.spacing(10),
   paddingBottom: theme.spacing(10),
}))

const StyledContainer = styled(Container)(({ theme }) => ({
   maxWidth: '1200px',
}))

const Title = styled(Typography)(({ theme }) => ({
   fontSize: '46px',
   fontWeight: 600,
   marginBottom: theme.spacing(2),
}))

const Paragraph = styled(Typography)(({ theme }) => ({
   marginTop: '10px',
   lineHeight: 1.6,
}))

const ImageWrapper = styled(Box)(({ theme }) => ({
   display: 'flex',
   justifyContent: 'center',
}))

const LaptopImage = styled('img')(() => ({
   width: '100%',
   height: 'auto',
   maxWidth: '500px',
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

const TeamName = styled(Typography)(({ theme }) => ({
   fontWeight: 500,
   textAlign: 'center',
}))
