import Button from "./ui/button";

export default function NavDashboard(){
    return(
        <>
            <div className="bg-white p-3 nav-dashboard flex flex-row justify-between h-16">
                <div className="search-container">
                    <img className="search-icon" src="../search.png" alt="" />
                    <input type="text" placeholder="Search systems, deployments and logs..."/>
                </div>
                <div className="flex flex-row gap-7 w-125 items-center justify-center">
                    <img className="icons" src="../notification.png" alt="" />
                    <img className="icons" src="../apps.png" alt="" />
                    <Button className="bg-[#630ed4] px-6 py-2.5 rounded-xl text-white text-[14px] hover:bg-[#7c3aed] transition-all active:scale-95 shadow-lg shadow-[#630ed4]/20">Deploy</Button>
                    <div className="flex flex-row gap-4 w-2xl pr-0">
                        <div className="flex flex-col">
                            <h3>Alex Chen</h3>
                            <p>Senior Architect</p>
                        </div>
                        <img className="profile" src="../cloudscale.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}