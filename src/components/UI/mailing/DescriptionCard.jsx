import { Box, styled, Typography } from '@mui/material'
import Photo2Sale from '../../../assets/images/Photo2Sale.png'
import BreadCrumbs from './BreadCrumbs'

const DescriptionCard = () => {
   // const links = [
   //    { href: '/Рассылка', label: 'Рассылка' },
   //    { href: '/description', label: 'Тема рассылки' },

   // ]

   return (
      <FlexContainer>
         <BlockContainer>
            {/* <BreadCrumbs links={links} /> */}

            <StyledBox>
               <img src={Photo2Sale} alt="photo" />
               <StyledText>
                  <StyledParagraf variant="h5">Тема рассылки</StyledParagraf>
                  <StyledContent variant="h6">
                     Рубашка с технологией ProMotion и быстрым, плавным
                     откликом. Грандиозный апгрейд системы камер, открывающий
                     совершенно новые возможности. Исключительная прочность. A15
                     Bionic — самый быстрый чип для iPhone. И впечатляющее время
                     работы без подзарядки. Всё это Pro.
                  </StyledContent>
                  <StyledData>
                     <Typography variant="h6">Дата добавления:</Typography>
                     <Typography>12.04.2025</Typography>
                  </StyledData>
               </StyledText>
            </StyledBox>
         </BlockContainer>
      </FlexContainer>
   )
}

export default DescriptionCard

const FlexContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
}))
const BlockContainer = styled(Box)(() => ({
   // display: 'flex',
   // justifyContent: 'center',
   // alignItems: 'center',
   width: '1086px',
   height: '1024px',
   background: '#F7F8FA',
   margin: '100px',
}))

const StyledBox = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'start',
   padding: '30px',
   width: '1086px',
   height: '871px',
   background: '#FFFFFF',
   borderRadius: '10px',
   border: '1px solid #f1efef ',
}))

const StyledText = styled(Box)(() => ({}))

const StyledParagraf = styled('h1')(() => ({
   fontFamily: 'Inter',
   fontWeight: '500',
   fontSize: '18px',
   lineHeight: '130%',
   letterSpacing: '0px',
   verticalAlign: 'middle',
   paddingTop: '50px',
   paddingLeft: '20px',
}))

const StyledContent = styled('h6')(() => ({
   fontSize: '16px',
   fontFamily: ' Inter',
   fontWeight: '400',
   lineHeight: ' 130%',
   letterSpacing: ' 0px',
   verticalAlign: 'middle',
   width: '483',
   paddingTop: '30px',
   paddingLeft: '20px',
   color: '#000000',
}))

const StyledData = styled(Box)(() => ({
   color: '#5C5C5C',
   paddingLeft: '20px',
   paddingTop: '30px',

   '& .MuiTypography-root': {
      fontSize: '14px',
      fontFamily: ' Inter',
      fontWeight: '400',
      lineHeight: ' 130%',
      letterSpacing: ' 0px',
   },
   '&   .MuiTypography-body1': {
      color: '#000000',
      fontWeight: '500',
   },
}))
