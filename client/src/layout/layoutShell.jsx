import Footer from "../components/footer"

export default function LayoutShell ({children}){
    return(
        <div className="bg-gray-100">
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}