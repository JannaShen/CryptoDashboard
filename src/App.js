import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard';
import NavigationBar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DepositAUD from './Deposit/deposit';
import Transfer from './Send/send';


function App() {
  return (
    
    <div className="App">
      <BrowserRouter> 
      <NavigationBar/>    
       <Routes>
         <Route path='/' element={<Dashboard/>}/>
         <Route path="/deposit" element={<DepositAUD/>}/>
         <Route path="/send" element={<Transfer/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
    
  );
}

export default App;
