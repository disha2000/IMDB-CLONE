import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {

  return (
    <div className="main-section">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
