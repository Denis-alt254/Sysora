import Navbar from "../components/nav-bar"

export default function LayoutShell ({children}){
    return(
        <div className="bg-gray-100">
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
        </div>
    )
}