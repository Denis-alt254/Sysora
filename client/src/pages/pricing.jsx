import Button from "../components/button"
export default function Pricing(){
    return(
        <>
            <div>
                <section className="sections">
                    <div className="flex flex-col justify-center gap-4 items-center text-center p-7">

                        <span className="text-[blueviolet]">Predictable Pricing for High-Scale Teams</span>
                        <span className="flex flex-col gap-0 text-5xl font-bold">
                            <span>Scale your cloud with</span>
                            <span className="text-[blueviolet]">precision engineering.</span>
                        </span>
                        <p>From solo developers to global enterprises, Sysora provides the infrastructure transparency you need to build with confidence.</p>
                        <div className="flex flex-row items-center text-center justify-center gap-7 mt-7">
                            <span>Monthly</span>
                            <span className="price-selection"></span>
                            <span>Yearly</span>
                            <span>SAVE 20%</span>
                        </div>
                    </div>
                </section>

                <section className="flex flex-row gap-7 m-3 p-3 sections">
                    <div className="flex flex-col p-3 bg-white rounded-2xl transition-transform hover:-translate-y-1">
                        <div className="mb-3">
                            <div className="card-icons mb-3">
                                <img src="../starter.png" alt="" />
                            </div>
                            <h3>Starter</h3>
                            <p>Ideal for individual projects and hobbyist engineers.</p>
                        </div>
                        <span><span className="font-bold text-2xl">$0</span>/mo</span>
                        <span>Free forever</span>
                        <div className="mt-3 flex flex-col ">
                            <span className="card-checks">
                                <img src="../tick.png" alt="" />
                                <p>Up to 3 active projects</p>
                            </span>
                            <span className="card-checks">
                                <img src="../tick.png" alt="" />
                                <p>Community support</p>
                            </span>
                            <span className="card-checks">
                                <img src="../tick.png" alt="" />
                                <p>Standard CI/CD runners</p>
                            </span>
                            <span className="card-checks">
                                <img src="../wrong.png" alt="" />
                                <p>Custom domain mapping</p>
                            </span>
                        </div>
                        <div className="mt-7 mb-0">
                            <Button>Get Started</Button>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-3 transition-transform hover:-translate-y-1">
                        <div className="mb-3">
                            <div className="card-icons mb-3">
                                <img src="../team.png" alt="" />
                            </div>
                            <h3>Team</h3>
                            <p>Advanced collaboration for scaling engineering teams.</p>
                        </div>
                        <span><span className="font-bold text-2xl">$40</span>/mo</span>
                        <span>Billed annually</span>
                        <div className="mt-3 flex flex-col ">
                            <span className="card-checks">
                                <img src="../tick.png" alt="" />
                                <p>Everything in Starter</p>
                            </span>
                            <span className="card-checks">
                                <img src="../tick.png" alt="" />
                                <p>Unlimited projects</p>
                            </span>
                            <span className="card-checks">
                                <img src="../tick.png" alt="" />
                                <p>Priority 24/7 support</p>
                            </span>
                            <span className="card-checks">
                                <img src="../tick.png" alt="" />
                                <p>Custom domain & SSL</p>
                            </span>
                            <span className="card-checks">
                                <img src="../tick.png" alt="" />
                                <p>Shared team workspaces</p>
                            </span>
                        </div>
                        <div className="mt-7 mb-0">
                            <Button>Start 14-Day Trial</Button>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-3 transition-transform hover:-translate-y-1">
                        <div className="mb-3">
                            <div className="card-icons mb-3">
                                <img src="../enterprise.png" alt="" />
                            </div>
                            <h3>Enterprise</h3>
                            <p>Custom infrastructure for large-scale deployments.</p>
                        </div>
                        <span><span className="font-bold text-2xl">$40</span>/mo</span>
                        <span>Billed annually</span>
                        <div className="mt-3 flex flex-col ">
                            <span className="card-checks">
                                <img src="../tick.png" alt="" />
                                <p>Everything in Starter</p>
                            </span>
                            <span className="card-checks">
                                <img src="../tick.png" alt="" />
                                <p>Unlimited projects</p>
                            </span>
                            <span className="card-checks">
                                <img src="../tick.png" alt="" />
                                <p>Priority 24/7 support</p>
                            </span>
                            <span className="card-checks">
                                <img src="../tick.png" alt="" />
                                <p>Custom domain & SSL</p>
                            </span>
                            <span className="card-checks">
                                <img src="../tick.png" alt="" />
                                <p>Shared team workspaces</p>
                            </span>
                        </div>
                        <div className="mt-7 mb-0">
                            <Button>Start 14-Day Trial</Button>
                        </div>
                    </div>
                </section>

                <section className="sections">
                    <div className="flex flex-col gap-2 items-center">
                        <h2>Technical Feature Comparison</h2>
                        <p>A deep dive into our architectural capabilities.</p>

                        <table>
                            <thead>
                                <tr>
                                    <th>CORE ARCHITECTURE</th>
                                    <th>STARTER</th>
                                    <th>TEAM</th>
                                    <th>ENTERPRISE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Compute Nodes</td>
                                    <td>Shared(Free-use)</td>
                                    <td>Burstable(Dedicated)</td>
                                    <td>Fixed Dedicated</td>
                                </tr>
                                <tr>
                                    <td>Memory Isolation</td>
                                    <td>L3 Cache Partition</td>
                                    <td>Hypervisor Enclave</td>
                                    <td>Physical Isolation</td>
                                </tr>
                                <tr>
                                    <td>Auto-scaling Latency</td>
                                    <td>&lt; 300ms</td>
                                    <td>&lt; 50ms</td>
                                    <td>&lt; 10ms</td>
                                </tr>
                                <tr>
                                    <td>Edge Functions</td>
                                    <td>10 Regions</td>
                                    <td>50+ Regions</td>
                                    <td>Global Mesh</td>
                                </tr>
                                <tr>
                                    <td>Api Rate Limiting</td>
                                    <td>1000, req/min</td>
                                    <td>10,000, req/min</td>
                                    <td>Uncapped</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="sections">
                    <div className="grid grid-cols-2 p-3 m-3 bg-[#1c1c2c] text-white rounded-4xl">
                        <div className="flex flex-col gap-7 justify-center p-10">
                            <h1>Ready to <br/> optimize your <br/><span className="text-[blueviolet]">cloud stack?</span></h1>
                            <span>Join over 15,000 engineering teams building the future of distributed systems on Sysora.</span>
                            <div className="flex flex-row gap-7">
                                <Button>Start Free Trial</Button>
                                <Button>Request Demo</Button>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center p-10">
                            <div className="flex flex-col p-3 gap-7 justify-center bg-[#2c2c38] rounded-2xl">
                                <div className="flex flex-row gap-5">
                                    <img className="profile" src="../cto-NexusFlow.jpg" alt="" />
                                    <div className="flex flex-col">
                                        <span>Sarah Tan</span>
                                        <span>CTO at NexusFlow</span>
                                    </div>
                                </div>
                                <span>"Sysora's pricing transparency was the deciding factor. We migrated our entire microservices architecture in 3 weeks and reduced egress costs by 40%."</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}