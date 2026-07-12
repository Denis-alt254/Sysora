import { Link } from "react-router-dom"
import Button from "../components/button"
import { useState } from "react"
import { useEffect } from "react";
import Card from "../components/card";
import Security from "../components/security";

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
            <div className="p-3 m-3 mt-20 mb-10">
                <h2 className="font-bold text-2xl mb-3 text-center">Core Capabilities</h2>
                <p className="text-center">Everything you need to design, build, 
                    and scale world-class cloud infrastructure 
                    in one unified environment.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-10 p-3 m-3">
                <Card>
                    <div className="card-icons">
                        <img src="../account-tree.png" alt="" />
                    </div>
                    <h3>Architecture</h3>
                    <p>Visual diagramming tool with native cloud providers and reusable module templates.</p>
                    <div className="card">
                        <div className="card-checks">
                            <img src="../tick.png" alt="" />
                            <p>2000+ Cloud Icons</p>
                        </div>
                        <div className="card-checks">
                            <img src="../tick.png" alt="" />
                            <p>Real-time Sync</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="card-icons">
                        <img src="docs.png" alt="" />
                    </div>
                    <h3>Docs & Knowledge</h3>
                    <p>Centralized living documentation that stays in sync with your actual codebase.</p>
                    <div className="card">
                        <div className="card-checks">
                            <img src="../tick.png" alt="" />
                            <p>Markdown Support</p>
                        </div>
                        <div className="card-checks">
                            <img src="../tick.png" alt="" />
                            <p>Automatic Versioning</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="card-icons">
                        <img src="../project.png" alt="" />
                    </div>
                    <h3>Projects</h3>
                    <p>Roadmaps, milestones, and resource planning integrated with cloud tasks.</p>
                    <div className="card">
                        <div className="card-checks">
                            <img src="../tick.png" alt="" />
                            <p>Gantt Visualizers</p>
                        </div>
                        <div className="card-checks">
                            <img src="../tick.png" alt="" />
                            <p>Resource Alerts</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="card-icons">
                        <img src="../team.png" alt="" />
                    </div>
                    <h3>Team</h3>
                    <p>RBAC-controlled workspaces and threaded reviews for all architectural changes.</p>
                    <div className="card">
                        <div className="card-checks">
                            <img src="../tick.png" alt="" />
                            <p>Approval Workflows</p>
                        </div>
                        <div className="card-checks">
                            <img src="../tick.png" alt="" />
                            <p>Activity Streams</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="card-icons">
                        <img src="../code-lab.png" alt="" />
                    </div>
                    <h3>AI Code Lab</h3>
                    <p>Generate Infrastructure as Code (IaC) using our secure LLM assistant.</p>
                    <div className="card">
                        <div className="card-checks">
                            <img src="../tick.png" alt="" />
                            <p>Terraform/CDK Gen</p>
                        </div>
                        <div className="card-checks">
                            <img src="../tick.png" alt="" />
                            <p>Security Audits</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="card-icons">
                        <img src="../deployment.png" alt="" />
                    </div>
                    <h3>Deployments</h3>
                    <p>CI/CD pipelines with automated drift detection and multi-cloud support.</p>
                    <div className="card">
                        <div className="card-checks">
                            <img src="../tick.png" alt="" />
                            <p>Canary Releases</p>
                        </div>
                        <div className="card-checks">
                            <img src="../tick.png" alt="" />
                            <p>Auto-Rollback</p>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="p-3 m-3 grid grid-cols-2 gap-20">
                <div className="flex flex-col gap-7">
                    <h2>What customers say</h2>
                    <Card>
                        <p>"Sysora transformed our migration. We saved 400+ engineering hours in documentation alone."</p>
                        <div className="flex flex-row gap-7">
                            <img className="profile" src="../cloudscale.jpg" alt="" />
                            <div className="flex flex-col">
                                <p className="font-bold">Alex Rivers</p>
                                <p>CTO, CloudScale</p>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <p>"The AI Code Lab is a game changer for our junior DevOps team. It's like having a senior engineer on every PR."</p>
                        <div className="flex flex-row gap-7">
                            <img className="profile" src="../nexaflow.jpg" alt="" />
                            <div className="flex flex-col">
                                <p className="font-bold">Elena Wu</p>
                                <p>Head of Platform, Nexaflow</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="flex flex-col gap-7">
                    <h2>Security & Compliance</h2>
                    <p>We meet the highest standards for 
                        enterprise security, ensuring your data 
                        and infrastructure stay protected.
                    </p>
                    <div className="grid grid-cols-2 gap-5">
                        <Security>
                            <img className="security-icons" src="../certified.png" alt="" />
                            <h3>SOC 2 Type II</h3>
                            <p>CERTIFIED</p>
                        </Security>
                        <Security>
                            <img className="security-icons" src="../compliant.png" alt="" />
                            <h3>GDPR Ready</h3>
                            <p>COMPLIANT</p>
                        </Security>
                        <Security>
                            <img className="security-icons" src="../audited.png" alt="" />
                            <h3>ISO 27001</h3>
                            <p>AUDITED</p>
                        </Security>
                        <Security>
                            <img className="security-icons" src="../eligible.png" alt="" />
                            <h3>HIPAA</h3>
                            <p>ELIGIBLE</p>
                        </Security>
                    </div>
                    <div >
                        <button className="security-btn">Download Security Pack</button>
                    </div>
                </div>
            </div>
            <div>
                <div className="p-3 m-3 rounded-2xl h-70 text-center items-center flex flex-col gap-10 bg-[#7d2bfb]">
                    <h1 className="text-white font-bold">Ready to streamline your cloud?</h1>
                    <span className="text-[#ffffffe0]">Join 50,000+ engineers building the future on Sysora. Start your 14-day free trial today.</span>
                    <div className="flex flex-row gap-7 items-center pl-3 pr-3 w-150">
                        <Button>Get Started Now</Button>
                        <Button>Talk to Sales</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home