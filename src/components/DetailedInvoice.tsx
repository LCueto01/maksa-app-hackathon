import { User,Invoice } from "../Types/types";
import { useContext } from "react";
import {UserContext} from "../pages/Home"



const DetailedInvoice = () => {

    const currentUser = useContext(UserContext)
    console.log(currentUser)

    const mapInvoices = currentUser.pendingInvoice.map((invoice) => (
        <div key={invoice.invoiceId} className ="pendingInvoiceContainer">
            <div className="invoiceName">
                <h2>{invoice.requester}</h2>
                <h3 className="dateText">Venue: {invoice.venue}</h3>
                <h3 className = "dateText">Date: {invoice.date}</h3>
                <h3>{invoice.message}</h3>
            </div>
          
            </div>))

    return ( <div>{mapInvoices}

    </div> );
}
 
export default DetailedInvoice ;