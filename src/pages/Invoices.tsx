import BottomNavBar from "../components/BottomNavBar";
import DetailedInvoice from "../components/DetailedInvoice";
import {Tabs} from "antd"

const tabItems = [{label: "Current Invoices",key:"tab1",children:(<h1>No current Invoices</h1>)
},{label: "Outgoing Invoices",key:"tab2",children:(<DetailedInvoice/>)
},{label: "Requests",key:"tab3",children:(<h1>tab3</h1>)}]

const Invoice = () => {
    return ( <>
    
    <div className="invoicePage">
        <h1 className="balanceText">Invoices</h1>
        <Tabs items={tabItems}/>
    </div>
    <BottomNavBar/>
    </> );
}
 
export default Invoice;