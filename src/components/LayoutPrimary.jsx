import { Outlet } from "react-router-dom"


const LayoutPrimary = () => {
    return (
        <div className="w-96 mx-auto mt-10 p-10">
            <Outlet />
        </div >
    )
}

export default LayoutPrimary