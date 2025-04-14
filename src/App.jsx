import FriendCards from './components/UI/card/FriendCards'
import FRIENDS from './utils/constants/data/'
import React from 'react'

const App = () => {
   return (
      <div>
         {FRIENDS.map((friend, id) => (
            <FriendCards key={id} friend={friend} />
         ))}
      </div>
   )
}

export default App
