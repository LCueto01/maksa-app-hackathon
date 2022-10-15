import { useState,createContext } from "react";
import BottomNavBar from "../components/BottomNavBar";
import Contacts from "../components/Contacts";
import PendingInvoice from "../components/PendingInvoice";
import SplitInvoices from "../components/SplitInvoices";
import BalanceContainer from "../components/BalanceContainer";
import { CurrentUser, Invoice } from "../Types/types";
import { create } from "domain";

const baseUser: CurrentUser = {
    id:1,
    name: "John Smith",
    balance: 2500,
    contacts: [{
        id: 2,
       name: "Peter Griffin"
    },{id:3,
        name:"Kanye West"}],
    pendingInvoice: [{invoiceId:1,venue: "Subway",requester: "Snoop Dogg",message:"I bought you like two subways, it would be nice if you could pay me back quickly",amount: 15.00, date:"11/10/2022"},
    ],
    splitInvoice: [{
        venue:"Maggie Mays",
        total:80
    }]

}

export const UserContext = createContext(baseUser)

const Home = () => {

    const [currentUser,setCurrentUser] = useState(baseUser)
    
    const updateBalance = (value:number) => {
        setCurrentUser({...currentUser, balance: value})
    }
    const updatePendingInvoice = (newInvoices: Array<Invoice>) => {
        setCurrentUser({...currentUser, pendingInvoice: newInvoices})
    }

    return ( 
    <div>
        <UserContext.Provider value ={baseUser}>
            <BalanceContainer currentUser={currentUser}/>
            <SplitInvoices/>
            <PendingInvoice currentUser={currentUser} updateInvoice = {updatePendingInvoice} pendingInvoices={baseUser.pendingInvoice} updateBalance={updateBalance}/>
            <Contacts contacts ={baseUser.contacts}/>
        </UserContext.Provider>
    
        <BottomNavBar/>
    </div> );
}
 
export default Home;