import { Routes, Route } from 'react-router-dom';
import './App.css';
import { NavbarComponent } from './components/navbar.tsx';
import { AboutPage } from './pages/about.tsx';
import { HomePage } from './pages/Home.tsx';
import { NotFoundPage } from './pages/not-found.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavbarComponent />
      <div className="container">
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
