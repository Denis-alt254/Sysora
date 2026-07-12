export default function Security({children}){
    return(
        <>
            <div className="flex flex-col bg-white rounded-2xl p-3 gap-2 security">
                <main>{children}</main>
            </div>
        </>
    )
}