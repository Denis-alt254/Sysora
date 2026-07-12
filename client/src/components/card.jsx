export default function Card({children}){
    return(
        <>
            <div className="bg-white rounded-2xl p-7">
                <main>{children}</main>
            </div>
        </>
    )
}