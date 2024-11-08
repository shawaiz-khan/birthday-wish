import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Name from './components/Name';
import Welcome from './components/Welcome';
import Gift from './components/Gift';
import Wish from './components/Wish';
import Message from './components/Message';
import FireworksComponent from './components/Fireworks';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Name />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/wish" element={<Wish />} />
        <Route path="/message" element={<Message />} />
        <Route path="/fireworks" element={<FireworksComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;