import './App.css';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
