import { Link } from "react-router-dom"

function NavBar() {
    return(
        <div className="navbar">
            <div className="logo">
                <Link className="" to='/home'>Sysora</Link>
            </div>
            <div className="nav-links">
                <Link to='/home' >Home</Link>
                <Link to='/architecture' >Architecture</Link>
                <Link to='/documentation' >Documentation</Link>
                <Link to='/ai-lab' >Ai Lab</Link>
            </div>
        </div>
    )
}

export default NavBar