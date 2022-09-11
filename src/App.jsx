import './App.css';
import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CollectionDescription  from './pages/CollectionDescription'
import Collections  from './pages/Collections'
import Home from './pages/Home'
import Team from './pages/Team';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { onValue, ref } from 'firebase/database';
import { db } from './firebase';

function App() {
  const [reload, setreload] = useState(true);
  const [formData, setformData] = useState([]);
  if(formData===[]){
    setreload(false)
  }
  useEffect(() => { 
    onValue(ref(db , `/`),(snapshot)=>{
      const data = snapshot.val();
      setformData(data);
      // console.log(formData);
    });
    setreload(true);
  }, [reload]);
  return (
    <div>
       <Router>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home formData={formData}/>}  />
          <Route path="/CollectionDescription" element={<CollectionDescription />} />
          <Route path="/Collections"  element={<Collections formData={formData}/>} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
