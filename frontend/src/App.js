import './App.css';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'
import { Navbar } from './components/admin/Navbar';
import { Home } from './components/admin/Home';

function App() {
  return (
    <>
      <Router>
           <Navbar/>
          <Routes>
          <Route path='/' element={<Home />}/>
     
          
        </Routes>
      </Router>

    </>
  );
}

export default App;
