import Button from "../components/button"
export default function Pricing(){
    return(
        <>
            <div>
                <section className="p-7">
                    <div className="flex flex-col justify-center items-center text-center pl-80 pr-80">

                        <div>
                            <span className="text-[blueviolet]">Predictable Pricing for High-Scale Teams</span>
                        </div>
                        <div>
                            <h1>Scale your cloud with</h1>
                            <h1 className="text-[blueviolet]">precision engineering.</h1>
                        </div>
                        <p>From solo developers to global enterprises, Sysora provides the infrastructure transparency you need to build with confidence.</p>
                        <div className="flex flex-row items-center text-center justify-center gap-7 mt-10">
                            <span>Monthly</span>
                            <span className="price-selection"></span>
                            <span>Yearly</span>
                            <span>SAVE 20%</span>
                        </div>
                    </div>
                </section>

                <section className="flex flex-row gap-7 m-3 p-3">
                    <div className="flex flex-col p-3 bg-white rounded-2xl">
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

                    <div className="bg-white rounded-2xl p-3">
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

                    <div className="bg-white rounded-2xl p-3">
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
                
            </div>
        </>
    )
}