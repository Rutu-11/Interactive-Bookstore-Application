import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Container } from "react-bootstrap";
import { useState } from 'react';
import AllRoutes from './Routes/AllRoutes';


export const Layout = ({children}) => {
  const [sidebar, setSidebar] = useState(false);
  console.log(process.env)
  const handleSidebar = () => {
    return setSidebar(!sidebar);
  };
  return(
    <>
    <Navbar handleSidebar={handleSidebar} />
    <div className="app_container">
      <Sidebar sidebar={sidebar} handleSidebar={handleSidebar} />

      <Container fluid className="app_main">
      
        {children}
      
      </Container>
    </div>
  </>
  )
}
function App() {
  return (
   <AllRoutes/>
  );
}

export default App;
