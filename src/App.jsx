import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Archive from './pages/Archive.jsx';
import Detail from './pages/Detail.jsx';
import AIStructure from './pages/AIStructure.jsx';

export default function App(){
  return <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Archive/>}/>
      <Route path="/archive/:id" element={<Detail/>}/>
      <Route path="/ai-structure" element={<AIStructure/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>;
}
