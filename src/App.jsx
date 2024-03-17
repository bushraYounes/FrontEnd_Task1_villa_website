
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Properties from './pages/properties/Properties'
import SingleProperty from './pages/singleProperty/SingleProperty'
import Contact from './pages/contact/Contact'
import routes from './tools/routes'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import SubHeader from './components/SubHeader/SubHeader'
import { IoMail } from "react-icons/io5";
import { FaMap, FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";



function App() {

  const infolist = [
    { icon: <IoMail />, label: "info@company.com" },
    { icon: <FaMap />, label: "Sunny Isles Beach, FL 33160" }
  ]

  const icons = [
    <FaFacebook />,
    <FaTwitter />,
    <FaLinkedin />,
    <FaInstagram />
  ]
  
  return (
    <div className="app">
      <SubHeader infoItems={infolist} icons={icons} />
      <NavBar logo={"VILLA"} navItems={[{route:routes.home, label:"Home"},{route:routes.properties, label:"Properties"},{route:routes.singleProperty, label:"Property Details"}, {route:routes.contact, label:"Contact Us"}]} buttonContent={{ icon:  <FaCalendar />, label:"Schedule a visit"}} />
      <Routes>
        <Route path={routes.home} element={<Home />}></Route>
        <Route path={routes.properties} element={<Properties />}></Route>
        <Route path={routes.singleProperty} element={<SingleProperty />}></Route>
        <Route path={routes.contact} element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
