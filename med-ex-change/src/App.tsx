import './App.css'
import LoginForm from './Components/login-page/LoginForm'
import ImgLogin from './Components/login-page/ImgLogin'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  
  return (
    <>
      {/* <ImgLogin/>
      <LoginForm/> */}

      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
