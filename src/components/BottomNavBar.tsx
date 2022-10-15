import {useNavigate} from "react-router-dom"




const BottomNavBar = () => {
    const navigate =useNavigate()
  return (
    <div className="navBar">
      <button onClick={() => navigate("/")}>Home</button>
      <button>Purchases</button>
      <button onClick={() => navigate("/invoice") }>Invoices</button>
    </div>
  );
};

export default BottomNavBar;
