import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Parameters from './pages/Parameters';
import './App.css';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parameters" element={<Parameters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;