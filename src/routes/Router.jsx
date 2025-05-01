import { Route, Routes } from 'react-router'
import DescriptionCard from '../components/UI/mailing/DescriptionCard'
import MailingList from '../components/UI/mailing/MailingList'

const Router = () => {
   return (
      <Routes>
         <Route path="/" element={<MailingList />} />
         <Route path="/description" element={<DescriptionCard />} />
      </Routes>
   )
}

export default Router
