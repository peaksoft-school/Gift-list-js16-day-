import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Box } from '@mui/material'
import { RIBBON_THUNK } from '../../../store/slices/ribbon/RibbonThunk'
import Bookeds from '../../../pages/user/bookeds/Bookeds'

const Ribbon = () => {
   const dispatch = useDispatch()
   const { feed, feedById } = useSelector((state) => state.ribbon)

   useEffect(() => {
      dispatch(RIBBON_THUNK.getAllFeed())
      dispatch(RIBBON_THUNK.getFeedById(1))
   }, [dispatch])

   return (
      <Box display="flex" flexDirection="column" gap={2}>
         <Box>
            {Array.isArray(feed) &&
               feed.map((item) => <Bookeds key={item.id} item={item} />)}
         </Box>

         <Box>{feedById && <Bookeds key={feedById.id} item={feedById} />}</Box>
      </Box>
   )
}

export default Ribbon
