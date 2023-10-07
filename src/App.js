import Homepage from './pages/Homepage';
import Home from './pages/Home';
import Question from './pages/Question';
import Result from './pages/Result';
import Login from './pages/Login';

import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} /> 
      <Route path="/Login" element={<Login />} /> 
      <Route path="/Home" element={<Home />} />
      <Route path="/question" element={<Question />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
