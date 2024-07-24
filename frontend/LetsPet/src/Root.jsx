import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import './pages/home/Home.css'

export default function Root() {
    return (
        <>  
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}