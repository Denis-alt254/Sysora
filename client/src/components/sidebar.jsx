export default function SideBar({children}){
    return(
        <>
            <div className="flex flex-col gap-4">
                <main>{children}</main>
                <div className="sidebar">
                    <div className="sidebar-element">
                        <img src="../account-tree.png" alt="" />
                        <p>Architecture</p>
                    </div>
                    <div className="sidebar-element">
                        <img src="docs.png" alt="" />
                        <p>Documentation</p>
                    </div>
                    <div className="sidebar-element">
                        <img src="project.png" alt="" />
                        <p>Planning</p>
                    </div>
                    <div className="sidebar-element">
                        <img src="team.png" alt="" />
                        <p>Team</p>
                    </div>
                    <div className="sidebar-element">
                        <img src="code-lab.png" alt="" />
                        <p>AI Lab</p>
                    </div>
                    <div className="sidebar-element">
                        <img src="deployment.png" alt="" />
                        <p>Deployment</p>
                    </div>
                    <div className="sidebar-element">
                        <img src="docs.png" alt="" />
                        <p>Monitoring</p>
                    </div>
                </div>
            </div>
        </>
    )
}