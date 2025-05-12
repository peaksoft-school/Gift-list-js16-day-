import React from 'react'
import BreadCrumbs from './BreadCrumbs'
import { Avatar, Box, styled, Typography } from '@mui/material'
import DescriptionAva from '../../../assets/images/descriptionAva.png'
import AvatarPhoto from '../../../assets/images/avatarPhoto.png'
import { Margin } from '@mui/icons-material'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { CHARITY_THUNK } from '../../../store/slices/charity/charityThunk'

const CharityDescription = () => {
   const links = [
      { href: '/Благотворительность ', label: 'Благотворительность ' },
      { href: '/description', label: 'Iphone 13 Pro ' },
   ]

   const { charities } = useSelector((state) => state.charities)

   const { id } = useParams()
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(CHARITY_THUNK.getById(id))
   }, [dispatch])
   return (
      <StyledBlockList>
         <BreadCrumbs links={links} />
         <StyledContainer1>
            <StyledBlockMain>
               <img src={DescriptionAva} alt="photo" />
               <StyledTextBlock>
                  <StyledAva>
                     <Avatar src={AvatarPhoto}></Avatar>
                     <StyledData>
                        <Typography variant="paragraf">Rupert Kunde</Typography>
                        <Typography>+996 705 86 95 44</Typography>
                     </StyledData>
                     <Typography variant="p"> В ожидании</Typography>
                  </StyledAva>

                  <Typography variant="h6">Iphone 13 Pro</Typography>
                  <Typography variant="p">
                     Дисплей Super Retina XDR с технологией ProMotion и быстрым,
                     плавным откликом. Грандиозный апгрейд системы камер,
                     открывающий совершенно новые возможности. Исключительная
                     прочность. A15 Bionic — самый быстрый чип для iPhone. И
                     впечатляющее время работы без подзарядки. Всё это Pro.
                  </Typography>
                  <StyledBlockLi>
                     <Box>
                        <Value>Категория:</Value>
                        <Label>Школьные</Label>
                        <br />
                        <Value>Подкатегория:</Value>
                        <Label>Сумка</Label>
                     </Box>

                     <StyledState>
                        <Value>Состояние:</Value>
                        <Label>Б/У</Label>
                        <br />
                        <Value>Дата добавления:</Value>
                        <Label>08.05.2025</Label>
                     </StyledState>
                  </StyledBlockLi>
               </StyledTextBlock>
            </StyledBlockMain>
            <ButtonContainer>
               <StyledButton variant="warning" type="button">
                  Удалить
               </StyledButton>
               <StyledButton2 variant="outlined" color="primary" type="button">
                  Редактировать
               </StyledButton2>
            </ButtonContainer>
         </StyledContainer1>
      </StyledBlockList>
   )
}

export default CharityDescription

const StyledBlockList = styled(Box)(() => ({
   background: '#F7F8FA',
   width: '100%',
   marginTop: '80px',
   padding: '20px 20px',
}))
const StyledContainer1 = styled(Box)(() => ({
   background: '#ffffff',
   width: '1086px',
   height: '100%',
   padding: '20px',
   borderRadius: '10px',
}))
const StyledBlockMain = styled(Box)(() => ({
   display: 'flex',
}))
const StyledTextBlock = styled(Box)(() => ({
   padding: '20px',

   '& .MuiTypography-h6': {
      fontSize: '18px',
      fontWeight: '500',
      paddingTop: '20px',
      color: '#020202',
   },
   '& .MuiTypography-p ': {
      fontSize: '14px',
      fontWeight: '400',
   },
}))
const StyledAva = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   '& .MuiTypography-p': {
      marginLeft: '400px',
      fontSize: '14px',
      color: '#3774D0',
   },
}))
const StyledData = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   marginLeft: '10px',
   lineHeight: '30px',
   '&.MuiTypography-root MuiTypography-paragraf ': {
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: ' 16px',
      lineHeight: ' 100%',
      letterSpacing: ' 2%',
   },
   '& .MuiTypography-body1': {
      fontFamily: 'Inter',
      fontWeight: '400',
      fontSize: ' 14px',
      lineHeight: ' 100%',

      color: '#5C5C5C',
   },
}))
const StyledBlockLi = styled(Box)(() => ({
   display: 'flex',
   marginTop: '30px',
}))

const StyledState = styled(Box)(() => ({
   marginLeft: '200px',
}))
const Label = styled(Typography)(() => ({
   fontWeight: 400,
   fontSize: '16px',
}))

const Value = styled(Typography)(() => ({
   color: '#5C5C5C',
   fontSize: '14px',
}))

const ButtonContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   gap: '16px',
   marginLeft: '700px',
   marginTop: '50px',
}))
const StyledButton = styled(Button)(() => ({
   width: '121px',

   '&.MuiButton-root': {
      height: '37px',
      border: 'none',
      fontSize: '14px',
   },
}))
const StyledButton2 = styled(Button)(() => ({
   width: '175px',
   '&.MuiButton-root': {
      height: '37px',
      fontSize: '14px',
   },
}))
