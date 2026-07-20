import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <>
            <footer className="w-full bg-white border-t border-[#d3e4fe]/20 pt-20 pb-12">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
                        <div className="col-span-2 lg:col-span-2">
                            <div className="logo">
                                <Link className="account-tree" to='/home'><img className = 'account-t' src="../account-tree.png" alt="account tree" />Sysora</Link>
                            </div>
                            <p className="text-[14px] text-[#4a4455] max-w-xs mb-8">The complete engineering platform for modern cloud teams. From architecture to automated deployment.</p>
                            <div className="flex gap-4">
                                <div className="socials">
                                    <img className="socials-images" src="../twitter.png" alt="" />
                                </div>
                                <div className="socials">
                                    <img className="socials-images" src="../email.png" alt="" />
                                </div>
                                <div className="socials">
                                    <img className="socials-images" src="../code.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4>Product</h4>
                            <nav>
                                <a href="">Architecture</a>
                                <a href="">Deployments</a>
                                <a href="">AI Lab</a>
                                <a href="/pricing">Pricing</a>
                            </nav>
                        </div>
                        <div>
                            <h4>Resources</h4>
                            <nav>
                                <a href="">Documentation</a>
                                <a href="">Changelog</a>
                                <a href="">Community</a>
                                <a href="">Help Center</a>
                            </nav>
                        </div>
                        <div>
                            <h4>Company</h4>
                            <nav>
                                <a href="">About</a>
                                <a href="">Careers</a>
                                <a href="">Blog</a>
                                <a href="">Contact</a>
                            </nav>
                        </div>
                        <div>
                            <h4>Legal</h4>
                            <nav>
                                <a href="">Privacy</a>
                                <a href="">Terms</a>
                                <a href="">Security</a>
                            </nav>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-[#d3e4fe]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-[#4a4455] opacity-60">
                        <p>© 2024 Sysora Cloud Platforms. All rights reserved.</p>
                        <div className="flex gap-8">
                            <a className="hover:text-[#630ed4]" href="">Twitter</a>
                            <a className="hover:text-[#630ed4]" href="">LinkedIn</a>
                            <a className="hover:text-[#630ed4]" href="https://github.com/Denis-alt254">GitHub</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}