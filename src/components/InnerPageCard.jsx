import { Box } from '@mui/material'
import { Typography } from 'antd'
import Menu6 from '../assets/icons/menu6.svg'
import Menu5 from '../assets/icons/menu5.svg'

const InnerPageCard = () => {
   return (
      <StyledMain>
         <HeaderRow>
            <Typography>Желаемые подарки</Typography>
            <Box>
               <img src={Menu6} alt="icon" />
               <img src={Menu5} alt="icon" />
            </Box>
         </HeaderRow>
      </StyledMain>
   )
}

export default InnerPageCard

const StyledMain = styled(Box)(() => ({
   margin: '65px 0 0 17.8rem',
   background: '#F7F8FA',
   width: '100%',
}))
const HeaderRow = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: '16px',
   padding: '10px',
}))
