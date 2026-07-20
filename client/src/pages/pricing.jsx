import Button from "../components/button"
export default function Pricing(){
    return(
        <>
            <div className="pt-20 min-h-screen">
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

                <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sections">
                    <div className="price-cards">
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

                    <div className="price-cards">
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

                    <div className="price-cards">
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
                    <div className=" max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-[32px] font-semibold tracking-[-0.01em] text-[#0b1c30] mb-2">Technical Feature Comparison</h2>
                            <p className="text-[16px] text-[#4a4455]">A deep dive into our architectural capabilities.</p>
                        </div>
                        
                        <div className="overflow-x-auto rounded-4xl border border-[#d3e4fe]/30 bg-white shadow-[0_10px_40px_-10px_rgba(99,14,212,0.04)]">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-[#d3e4fe]/20">
                                        <th className="th">CORE ARCHITECTURE</th>
                                        <th className="th">STARTER</th>
                                        <th className="th bg-[#630ed4]/5">TEAM</th>
                                        <th className="th">ENTERPRISE</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[14px]">
                                    <tr>
                                        <td>Compute Nodes</td>
                                        <td>Shared(Free-use)</td>
                                        <td className="bg-[#630ed4]/5">Burstable(Dedicated)</td>
                                        <td>Fixed Dedicated</td>
                                    </tr>
                                    <tr>
                                        <td>Memory Isolation</td>
                                        <td>L3 Cache Partition</td>
                                        <td className="bg-[#630ed4]/5">Hypervisor Enclave</td>
                                        <td>Physical Isolation</td>
                                    </tr>
                                    <tr>
                                        <td>Auto-scaling Latency</td>
                                        <td>&lt; 300ms</td>
                                        <td className="bg-[#630ed4]/5">&lt; 50ms</td>
                                        <td>&lt; 10ms</td>
                                    </tr>
                                    <tr>
                                        <td>Edge Functions</td>
                                        <td>10 Regions</td>
                                        <td className="bg-[#630ed4]/5">50+ Regions</td>
                                        <td>Global Mesh</td>
                                    </tr>
                                    <tr>
                                        <td>Api Rate Limiting</td>
                                        <td>1000, req/min</td>
                                        <td className="bg-[#630ed4]/5">10,000, req/min</td>
                                        <td>Uncapped</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </section>
                {/* CTA Section */}
                <section className="px-8 pb-32">
                    <div className="max-w-7xl mx-auto rounded-[3rem] bg-[#213145] text-[#ede0ff] p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="relative z-10 space-y-6 max-w-xl">
                            <h2 className="text-[48px] leading-tight font-bold">
                                Ready to optimize your <span className="text-[#d2bbff]">cloud stack?</span>
                            </h2>
                            <span className="text-[18px] opacity-80">
                                Join over 15,000 engineering teams building the future of distributed systems on Sysora.
                            </span>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="bg-[#630ed4] px-8 py-4 rounded-2xl font-bold text-[16px] hover:scale-105 transition-transform text-white">
                                Start Free Trial
                                </button>
                                <button className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl font-bold text-[16px] border border-white/20 hover:bg-white/20 transition-all text-white">
                                Request Demo
                                </button>
                            </div>
                        </div>
                        <div className="relative z-10 w-full md:w-auto">
                            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-4xl border border-white/10 space-y-6">
                                <div className="flex items-center gap-4">
                                    <img className="profile" src="../cto-NexusFlow.jpg" alt="" />
                                    <div>
                                        <div className="font-bold text-[16px]">Sarah Tan</div>
                                        <div className="text-[14px] opacity-60">CTO at NexusFlow</div>
                                    </div>
                                </div>
                                <span className="text-[16px] italic leading-relaxed">
                                "Sysora's pricing transparency was the deciding factor. We migrated our entire microservices architecture in 3 weeks and reduced egress costs by 40%."
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}