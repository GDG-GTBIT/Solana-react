import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CollectionDescription  from './pages/CollectionDescription'
import Collections  from './pages/Collections'
import Home from './pages/Home'
import Team from './pages/Team';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
       <Router>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CollectionDescription" element={<CollectionDescription />} />
          <Route path="/Collections" element={<Collections />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
