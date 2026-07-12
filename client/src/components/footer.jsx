import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <>
            <div>
                <div className="flex flex-col bg-white p-3 m-3">
                    <div className="footer-parent-containers">
                        <div className="footer-children-containers">
                            <div className="logo">
                                <Link className="account-tree" to='/home'><img className = 'account-t' src="../account-tree.png" alt="account tree" />Sysora</Link>
                            </div>
                            <p>The complete engineering platform for modern cloud teams. From architecture to automated deployment.</p>
                            <div className="flex flex-row gap-7">
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
                        <div className="footer-children-containers">
                            <h3>Product</h3>
                            <div className="footer-grand-child">
                                <a href="">Architecture</a>
                                <a href="">Deployments</a>
                                <a href="">AI Lab</a>
                                <a href="">Pricing</a>
                            </div>
                        </div>
                        <div className="footer-children-containers">
                            <h3>Resources</h3>
                            <div className="footer-grand-child">
                                <a href="">Documentation</a>
                                <a href="">Changelog</a>
                                <a href="">Community</a>
                                <a href="">Help Center</a>
                            </div>
                        </div>
                        <div className="footer-children-containers">
                            <h3>Company</h3>
                            <div className="footer-grand-child">
                                <a href="">About</a>
                                <a href="">Careers</a>
                                <a href="">Blog</a>
                                <a href="">Contact</a>
                            </div>
                        </div>
                        <div className="footer-children-containers">
                            <h3>Legal</h3>
                            <div className="footer-grand-child">
                                <a href="">Privacy</a>
                                <a href="">Terms</a>
                                <a href="">Security</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between align-bottom mt-10">
                        <p>© 2024 Sysora Cloud Platforms. All rights reserved.</p>
                        <div className="flex flex-row gap-7">
                            <a href="">Privacy Policy</a>
                            <a href="">Terms of Service</a>
                            <a href="">Status</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}