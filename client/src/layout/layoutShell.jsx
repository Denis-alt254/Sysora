import Navbar from "../components/nav-bar"

export default function LayoutShell ({children}){
    return(
        <div>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
        </div>
    )
}