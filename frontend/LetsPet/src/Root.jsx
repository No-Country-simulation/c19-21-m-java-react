import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar.jsx"
import "../panda.config.mjs"

export default function Root() {
    return (
        <>  
            <NavBar />
            <Outlet />
        </>
    )
}