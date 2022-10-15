import {User} from "../Types/types"
import {useNavigate} from "react-router-dom"


interface ContactsProps{
   contacts: Array<User>
}

const Contacts = ({contacts}:ContactsProps) => {
const navigate = useNavigate()

    const mapContacts = contacts.map((contact) => 
            <div className="contactFrame">
                    <img className="userImage" src={require("./userimage.png")}></img>
                    <a onClick = {() => navigate(`/user?id=${contact.id}`)}className="contactText">{contact.name}</a>
            </div>
    )

    return ( <div className ="contactContainer">
        <h2>Contacts</h2>
        {mapContacts}
    </div>);
}
 
export default Contacts;