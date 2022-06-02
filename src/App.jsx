import { Routes, Route } from 'react-router-dom';
import './App.css';
import { NavbarComponent } from './components/navbar.tsx';
import { AboutPage } from './pages/about.tsx';
import { HomePage } from './pages/Home.tsx';
import { ContactPage } from './pages/contact.tsx';
import { NotFoundPage } from './pages/not-found.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
