import BottomNavBar from "../components/BottomNavBar";
import Contacts from "../components/Contacts";
import { User,CurrentUser } from "../Types/types";

const baseUser: CurrentUser = {
    name: "John Smith",
    balance: 2500,
    contacts: [{
       name: "Bill Gates"
    },{name:"Kanye West"}]
}

const Home = () => {
    return ( 
    <div>
    <div className ="homePage">
        <h1>Welcome back, {baseUser.name}</h1>
       <h1 className="balanceText">{`£${baseUser.balance}.00`}</h1>
       <h2>contacts</h2>
       <Contacts contacts ={baseUser.contacts}/>
    </div>
        <BottomNavBar/>
    </div> );
}
 
export default Home;