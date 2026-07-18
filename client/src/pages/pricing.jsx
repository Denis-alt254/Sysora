export default function Pricing(){
    return(
        <>
            <div>
                <section className="p-7">
                    <div className="flex flex-col justify-center items-center text-center pl-80 pr-80">

                        <div>
                            <p>Predictable Pricing for High-Scale Teams</p>
                        </div>
                        <div>
                            <h1>Scale your cloud with</h1>
                            <h1>precision engineering.</h1>
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
            </div>
        </>
    )
}