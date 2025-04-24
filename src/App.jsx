import { useState } from 'react'
import SaleModal from './components/UI/sale/SaleModal'
import DescriptionCard from './components/UI/description/DescriptionCard'
import MailingList from './components/UI/sale/MailingList'

const App = () => {
   const [open, setOpen] = useState(false)

   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)

   return (
      <>
         <buton onClick={handleOpen}>Открыть модалку</buton>
         <SaleModal open={open} handleClose={handleClose} />
         
         
         <MailingList />
         <DescriptionCard />
        
      </>
   )
}
export default App
