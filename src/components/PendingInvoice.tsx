import { useState } from "react";
import { Invoice,CurrentUser } from "../Types/types";
import {Card, Button} from "antd"

interface PendingInvoiceProps{
currentUser: CurrentUser
pendingInvoices: Array<Invoice>
updateBalance: (value:number) => void
updateInvoice: (newInvocies: Array<Invoice>) => void
}

const PendingInvoice = ({pendingInvoices,currentUser,updateBalance, updateInvoice}:PendingInvoiceProps) => {

    const [hasBalance, setHasBalance] = useState(false)
    const [currentPending, setPending] = useState(pendingInvoices)

    const payInvoice = (user: CurrentUser, invoice: Invoice) => {
        
        const hasEnoughMoney = user.balance > invoice.amount
        hasEnoughMoney ? updateBalance(currentUser.balance -= invoice.amount): setHasBalance(false)
        
        const currentPendingInvoices = user.pendingInvoice
        const foundInvoice = currentPendingInvoices.find( i => i.invoiceId == invoice.invoiceId)

        const newInvoices = foundInvoice ? currentPending.filter((i) => i.invoiceId == invoice.invoiceId) : currentUser.pendingInvoice
       
        const filtered = currentPendingInvoices.map(i => i.invoiceId != invoice.invoiceId)

        setPending([])
        updateInvoice([])

        }

    const mapInvoices = currentPending.map((invoice) => (
    <div key={invoice.invoiceId} className ="pendingInvoiceContainer">
        <div className="invoiceName">
            <h2>{invoice.requester}</h2>
        </div>
        <div className="amntBtnPair">
            <h2 className="invoiceAmountOwed" >{`£${invoice.amount}`}</h2>
            <button className="payButton"  onClick ={() => payInvoice(currentUser,invoice)}>Pay now</button> 
        </div>
        </div>))

    return (<>

        {currentPending.length > 0 && <Card title="Owed Invoices" size="small">
        {mapInvoices}
       </Card>}
        {currentPending.length == 0 && <Card title ="Owed Invoices"> No owed invoices, good job!</Card>}
    </>  );
}
 
export default PendingInvoice;