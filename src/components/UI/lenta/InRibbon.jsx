import {
   Box,
   Avatar,
   Typography,
   ViewModuleIcon,
   ViewListIcon,
   Card,
   CardContent,
   CardMedia,
   styled,
   IconButton,
} from '@mui/material'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import ViewModuleIcon from '@mui/icons-material/ViewModule'
import ViewListIcon from '@mui/icons-material/ViewList'
import { useNavigate } from 'react-router'

const users = [
   {
      fullName: 'Аида Каримова',
      avatar:
         'https://i.pinimg.com/736x/b8/25/f8/b825f8aca31785c9165e18a279771100.jpg',
      gift: 'Название подарка',
      date: '12.04.22',
      event: 'День рождения',

      image: 'https://i.pinimg.com/736x/29/73/48/297348ada49c214cc138cf8784557d00.jpg',
   },
]

const InRibbon = () => {
   const navigate = useNavigate()

   return (
      <StyledContainer>
         <BoxContainer>
            <StyledTypography>Лента</StyledTypography>

            <CustomTabs
               value={viewMode}
               onChange={handleChange}
               aria-label="view mode tabs"
            >
               <CustomTab
                  icon={<ViewModuleIcon />}
                  aria-label="grid view"
                  selected={viewMode === 0}
               />
               <CustomTab
                  icon={<ViewListIcon />}
                  aria-label="list view"
                  selected={viewMode === 1}
               />
            </CustomTabs>
         </BoxContainer>

         <GiftList>
            {users.map((user) => (
               <GiftCard onClick={() => navigate('/inner-page')}>
                  <CardMedia image={user.image} title={user.gift} />
                  <Content>
                     <Box>
                        <UserInfo>
                           <Avatar src={user.avatar} />
                           <Typography>{user.fullName}</Typography>
                        </UserInfo>
                        <Typography>{user.gift}</Typography>
                        <Typography>{date}</Typography>
                     </Box>
                     <Box>
                        <Typography variant="caption" color="success.main">
                           {user.event}
                        </Typography>
                        <Typography>
                           {user.reserved ? 'Забронирован' : ''}
                        </Typography>
                     </Box>
                     <IconButton>
                        <MoreVertIcon />
                     </IconButton>
                  </Content>
               </GiftCard>
            ))}
         </GiftList>
      </StyledContainer>
   )
}

export default InRibbon

const StyledContainer = styled(Box)(() => ({
   padding: '20px 40px',
   backgroundColor: '#F8F9FA',
   minHeight: '100vh',
}))

const StyledTypography = styled(Typography)(() => ({
   fontSize: '20px',
   fontWeight: 600,
   marginBottom: '20px',
}))

const GiftList = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '16px',
}))

const GiftCard = styled(Card)(() => ({
   display: 'flex',
   alignItems: 'center',
   padding: '10px',
   borderRadius: '12px',
   boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
   backgroundColor: '#fff',
}))

const Content = styled(CardContent)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '100%',
   padding: '8px 16px',
   '&:last-child': {
      paddingBottom: '8px',
   },
}))

const UserInfo = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '6px',
   marginBottom: '4px',
}))
const BoxContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-between',
}))
const CustomTabs = styled(Tabs)({
   '& .MuiTabs-indicator': {
      backgroundColor: '#7B61FF',
   },
})

const CustomTab = styled(({ selected, ...props }) => <Tab {...props} />)(
   ({ selected }) => ({
      opacity: 1,
      color: selected ? '#7B61FF' : 'gray',
      '& .MuiTab-iconWrapper': {
         color: selected ? '#7B61FF' : 'gray',
      },
   })
)
