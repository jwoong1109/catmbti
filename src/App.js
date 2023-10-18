import Homepage from './pages/Homepage';
import Home from './pages/Home1';
import Home3 from './pages/Home3';
import Question from './pages/Question1';
import Question3 from './pages/Question3';
import Result from './pages/Result1';
import Result3 from './pages/Result3';
import Join from './pages/Join';
import Login from './pages/Login';
import Card from './pages/card';

import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Homepage />} /> 
      <Route path="/Join" element={<Join />} /> 
      <Route path="/Login" element={<Login />} /> 
      <Route path="/Home1" element={<Home />} />
      <Route path='/Home3' element={<Home3 />} />
      <Route path="/question1" element={<Question />} />
      <Route path='/question3' element={<Question3 />} />
      <Route path="/result1" element={<Result />} />
      <Route path='/result3' element={<Result3 />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
}

export default App;
