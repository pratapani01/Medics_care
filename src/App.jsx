import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Layout from './components/Layout/Layout';
import ScrollToTop from './components/Utils/ScrollToTop'; 

function App() {
  return (
    <> 
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;