import {Routes,Route, useNavigate} from "react-router-dom"
import Base from "./pages/Base";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Invoice from "./pages/Invoices";




const App = () => {
  return ( <div>
   <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Base/>}/>
    <Route path="/invoice" element={<Invoice/>}/>
    <Route path="*" element = {<NotFound/>}/>
   </Routes>
  </div> );
}
 
export default App;

