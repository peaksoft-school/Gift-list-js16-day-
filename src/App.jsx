import FriendCards from "./components/UI/card/FriendCards"
import { FRIENDS } from "./utils/constants/data"

const App = () => <>
<div className="container-card">
    {FRIENDS.map((friend) =>(
        <FriendCards key={friend.id} friend={friend}/> 
    ))}
</div>
</>

export default App
