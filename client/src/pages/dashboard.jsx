import Button from "../components/ui/button";
import Card from "../components/ui/card";
import DataCenterMap from "../components/data-center-map";
import NavDashboard from "../components/nav-dashboard";
import SideBar from "../components/sidebar";

export default function Dashboard(){
    return(
        <>  
            <div className="flex flex-row">
                <SideBar>
                    <div className="flex flex-row gap-7 m-3">
                        <div className="icons-container">
                            <img className="icons" src="../dashboard.png" alt="" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-violet-500">Sysora</h3>
                            <p className="icon-text">CLOUD ENGINEERING</p>
                        </div>
                    </div>
                </SideBar>
                <div className="flex flex-col m-0 p-0 w-full">
                    <NavDashboard />
                    <div className="flex flex-row gap-7 mt-4 min-w-fit h-full">
                        <div className="flex flex-col gap-10">
                            <Card className="bg-white w-full rounded-2xl p-3">
                                <h1>Systems healthy across 14 regions</h1>
                                <p>Your global infrastructure is operating at 99.98% availability. 32 nodes are currently active with zero critical alerts.</p>
                                <DataCenterMap />
                            </Card>
                            <Card>
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-col">
                                        <h2>Deployment Throughput</h2>
                                        <p>Avg. 142 successful deploys / week</p>
                                    </div>
                                    <div className="flex flex-row gap-7">
                                        <Button className="btn-primary">Week</Button>
                                        <Button className="btn-primary">Month</Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="bg-white rounded-2xl p-3 items-center text-center quota">
                            <h2>Resource Quota</h2>
                            <div className="resource-divs">
                                <img className="w-16 h-16 rounded-full" src="../twitter.png" alt="" />
                                <div className="resource-chilren-divs">
                                    <h3>Compute Units</h3>
                                    <p>1440 of 2000 CPU-hrs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}