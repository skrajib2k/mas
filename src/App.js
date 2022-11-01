import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavbarBottom from './components/NavbarBottom';
import BazzerManList from './pages/BazzerManList';
import History from './pages/History';
import Home from './pages/Home';
import Message from './pages/Message';
import MillSheet from './pages/MillSheet';

function App() {
  return (
    <section className="w-1/3 mx-auto h-screen bg-gray-800 relative">
      <div className="px-2 py-3">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/bazzer-man-list" element={<BazzerManList />} />
        <Route path="/mill-sheet" element={<MillSheet />} />
        <Route path="/message" element={<Message />} />
      </Routes>
      <div className="bg-red-400 absolute bottom-0 left-0 right-0">
        <NavbarBottom />
      </div>
    </section>
  );
}

export default App;
