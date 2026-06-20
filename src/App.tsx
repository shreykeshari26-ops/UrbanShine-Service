import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import FloatingButtons from './components/FloatingButtons.tsx';
import Home from './pages/Home.tsx';
import ServiceDetails from './pages/ServiceDetails.tsx';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
          </Routes>
        </div>
        <Footer />
        <FloatingButtons />
      </div>
    </BrowserRouter>
  );
}

export default App;

