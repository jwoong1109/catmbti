import Homepage from './pages/Homepage';
import Home from './pages/Home1';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import Home4 from './pages/Home4';
import Question from './pages/Question1';
import Question2 from './pages/Question2';
import Question3 from './pages/Question3';
import Question4 from './pages/Question4';
import Result from './pages/Result1';
import Result2 from './pages/Result2';
import Result3 from './pages/Result3';
import Result4 from './pages/Result4';
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
      <Route path="/Home2" element={<Home2 />} />
      <Route path='/Home3' element={<Home3 />} />
      <Route path='/Home4' element={<Home4 />} />
      <Route path="/question1" element={<Question />} />
      <Route path="/question2" element={<Question2 />} />
      <Route path='/question3' element={<Question3 />} />
      <Route path='/question4' element={<Question4 />} />
      <Route path="/result1" element={<Result />} />
      <Route path="/result2" element={<Result2 />} />
      <Route path='/result3' element={<Result3 />} />
      <Route path='/result4' element={<Result4 />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
}

export default App;
