import { Link } from "react-router-dom"
import Button from "./ui/button"

function NavBar() {
    return(
        <div className="navbar">
            <div className="logo">
                <Link className="account-tree" to='/home'><img className = 'account-t' src="../account-tree.png" alt="account tree" />Sysora</Link>
            </div>
            <div className="nav-links">
                <div className="links">
                    <Link to='/home' >Home</Link>
                    <Link to='/architecture' >Architecture</Link>
                    <Link to='/documentation' >Documentation</Link>
                    <Link to='/ai-lab' >Ai Lab</Link>
                </div>
                <div className="registration">
                    <Link to='/login'>Login</Link>
                    <Link to='/register' className="text-white"><Button>Get Started</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar