import {User} from "../Types/types"


interface ContactsProps{
   contacts: Array<User>
}

const Contacts = ({contacts}:ContactsProps) => {

    const mapContacts = contacts.map((contact) => 
            <div className="contactsContainer">
                    <img className="userImage" src={require("./userimage.png")}></img>
                    <h1 className="contactText">{contact.name}</h1>
            </div>
    )

    return ( <>{mapContacts}
    </>);
}
 
export default Contacts;