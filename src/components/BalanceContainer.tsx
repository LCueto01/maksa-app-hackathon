import { useState } from "react";
import { CurrentUser } from "../Types/types";

interface BalanceProps{
    currentUser: CurrentUser
}

const BalanceContainer = ({currentUser}:BalanceProps) => {
    const [balance,setBalance] = useState(currentUser.balance)

    return ( <div className="balanceContainer">
        <h2>Welcome back, {currentUser.name}</h2>
       <h1 className="balanceText">{`£${currentUser.balance}.00`}</h1>
    </div> );
}
 
export default BalanceContainer;