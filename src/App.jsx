import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar.tsx';
import { AboutPage } from './pages/about.tsx';
import { HomePage } from './pages/Home.tsx';
import { NotFoundPage } from './pages/not-found.tsx';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
