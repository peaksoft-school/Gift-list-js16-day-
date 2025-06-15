import { useEffect } from 'react'
import { Box, styled, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Pluse from '../../../assets/images/pluse.png'
import Button from '../../../components/UI/Button'
import { useNavigate } from 'react-router'
import CharityCard from '../../../components/UI/card/CharityCard'
import { USER_CHARITY_THUNK } from '../../../store/slices/user/charity/userCharityThunk'

const Charity = () => {
   const { charity } = useSelector((state) => state.charity)

   const dispatch = useDispatch()
   const navigate = useNavigate()

   useEffect(() => {
      dispatch(USER_CHARITY_THUNK.getAllUserCharity())
   }, [])

   const handleNavigate = (id) => {
      dispatch(USER_CHARITY_THUNK.getById({ id, navigate }))
   }

   const handleChangeOption = () => {}

   const handleCreateNavigate = () => navigate('/user/charity/create')

   return (
      <StyledContainer>
         <HeaderRow>
            <Typography>Благотворительность</Typography>

            <StyledMainButton
               variant="outlined"
               color="primary"
               type="button"
               onClick={handleCreateNavigate}
            >
               <img src={Pluse} alt="icon" />
               Добавить праздник
            </StyledMainButton>
         </HeaderRow>

         <Box className="charity-list">
            {charity.map((charity) => (
               <CharityCard
                  key={charity.giftId}
                  charity={charity}
                  onNavigate={handleNavigate}
                  onChangeOption={handleChangeOption}
               />
            ))}
         </Box>
      </StyledContainer>
   )
}

export default Charity

const StyledContainer = styled(Box)(() => ({
   background: '#F7F8FA',
   width: '100%',
   padding: '0px 20px',
   display: 'flex',
   flexDirection: 'column',
   gap: '31px',

   '& .charity-list': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '3rem',
   },
}))

const HeaderRow = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',

   '& .MuiTypography-body1': {
      color: '#020202',
      fontSize: '20px',
      fontWeight: '500',
   },

   '& img ': {
      marginRight: '10px',
      color: '#FFFFFF',
   },
}))

const StyledMainButton = styled(Button)(() => ({
   '&.MuiButton-root': {
      width: '250px',
      height: '40px',
      fontSize: '14px',
   },
}))
