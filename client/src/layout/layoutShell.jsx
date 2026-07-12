import Footer from "../components/footer"
import Navbar from "../components/nav-bar"

export default function LayoutShell ({children}){
    return(
        <div className="bg-gray-100">
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}