import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Layout from './comonents/Layout';
import Home from './comonents/Home';
import About from './comonents/About';
import Contact from './comonents/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
