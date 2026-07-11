import { Link } from "react-router-dom"
import Button from "../components/button"
import { useState } from "react"
import { useEffect } from "react";

function Home(){

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const timer =   setTimeout(() => setIsActive(true),50)
        return () => clearTimeout(timer)
    }, []);
    
    return(
        <>
            <div className="p-3 m-3 grid grid-cols-2 gap-4">
                <div className="hero">
                    <div className="text-4xl font-bold mb-4">
                        <h1>Design.Document.Ship.</h1>
                        <h1><span className="text-purple-500">All in one</span> cloud platform</h1>
                    </div>
                    <p>Sysora brings architecture design, documentation, and team collaboration into a single, 
                        AI-powered workspace. Move from concept to production 
                        faster with built-in governance.
                    </p>
                    <div className="flex flex-row gap-10 mt-4">
                        <Link to='/register'><Button>Get Started for Free</Button></Link>
                        <Link to='/'><Button>Reguest Demo</Button></Link>
                    </div>
                    <div>
                        <h3 className="text-gray-700 mt-7">TRUSTED BUY INDUSTRY LEADERS</h3>
                    </div>
                </div>
                <div className="bg-gray-200 w-fit p-3 rounded-2xl">
                    <img className="border-s-fuchsia-500" src="../Sysora.png" alt="Sysora image" />
                </div>
            </div>

            <div className="flex flex-col mt-15 p-3 m-3">
                <h2 className="font-bold text-2xl mb-3">Quick Product Tour</h2>
                <div className="flex flex-row justify-between">
                    <p>Watch how Sysora simplifies the transition from architecture to deployment in seconds.</p>
                    <a href="#">View all features</a>
                </div>  
            </div>
            <div className={`grid grid-cols-2 gap-10 p-3 m-3 transition-all duration-800 ease-out ${isActive ?'translate-y-0 backdrop-opacity-100':'translate-y-15 opacity-50'}`}>
                <div className="w-fit">
                    <img src="../tour.png" alt="Tour image" />
                </div>
                <div className="flex flex-col gap-5">
                    <div className="tour-divs">
                        <h3>Visual Planning</h3>
                        <p>Drag-and-drop cloud components with real-time cost estimation.</p>
                    </div>
                    <div className="tour-divs">
                        <h3>Auto-Documentation</h3>
                        <p>Generate professional technical docs directly from your infrastructure.</p>
                    </div>
                    <div className="tour-divs">
                        <h3>One-Click Ship</h3>
                        <p>Deploy to AWS, Azure, or GCP with automated security gates.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home