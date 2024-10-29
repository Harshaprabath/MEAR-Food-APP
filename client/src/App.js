import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from '../src/Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import About from './Components/About/About';
import BookTable from './Components/BookTable/BookTable';
import Footer from './Components/Footer/Footer';
import SinInUp from './Components/Sin-in-up/SinInUp';
import Profile from './Components/Profile/Profile';

function App() {
  const location = useLocation();

  const isSinInUp = location.pathname === '/sininup';

  return (
    <div>
      {!isSinInUp && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<BookTable />} />
        <Route path="/sininup" element={<SinInUp />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      {!isSinInUp && <Footer />}
    </div>
  );
}

export default App;
