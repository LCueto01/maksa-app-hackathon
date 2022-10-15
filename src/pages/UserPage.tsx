import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {Input} from "antd"
import BottomNavBar from "../components/BottomNavBar";

const users = [{
    id: 2,
   name: "Peter Griffin"
}]


const UserPage = () => {

    const [searchParams,setSearchParams] = useSearchParams()
    const [input,setInput] = useState("")


    const id = Number(searchParams.get("id"))

    const navigate = useNavigate()
    const foundUser = users.find(i => i.id == id) || {name: "jeff"}

    console.log(input)
    return (  <div className="userPage">
        
        <div className="userPageContent">
            <h1 className="userName">{foundUser!.name}</h1>

            <h2>Leave a message?</h2>
            <Input type="textArea"></Input>

            <h2>Enter an amount</h2>
            <Input onChange = {(e) => setInput(e.target.value)} size="large"/>
            <button className="requestButton">Request</button>
        </div>

        <BottomNavBar/>
    </div>);
}
 
export default UserPage;