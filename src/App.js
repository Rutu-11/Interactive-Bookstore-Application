import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Home/>
    </div>
  );
}

export default App;
