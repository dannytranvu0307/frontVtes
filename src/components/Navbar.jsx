import { memo } from "react";
import logo from "../static/img/VTI_logo.png";
import { Link } from "react-router-dom";
const Navbar = (props) => {
    function dropdown() {
        document.querySelector("#submenu").classList.toggle("hidden");
        document.querySelector("#arrow").classList.toggle("rotate-0");
    }
    const auth = true

    const openSideBar = () => {
        if (auth){
            document.querySelector(".sidebar").classList.toggle("hidden");
        }
    }

    const { children, t } = { ...props }
    return (
        <nav className="bg-white border-gray-200">
            <div className="max-w-screen flex flex-wrap items-center justify-between">
                <div className="flex items-center cursor-pointer">
                    <span
                        className="text-white text-4xl top-5 left-4 cursor-pointer p-2"
                        onClick={openSideBar}
                    >
                        <img src={logo} className="flex item-center h-12  hover:bg-gray-200 rounded" alt="VTI Logo" />
                    </span>
                    <div
                        className="sidebar fixed top-0 bottom-0 
                        lg:left-0 p-2 w-[300px] overflow-y-auto 
                        text-center bg-white drop-shadow-md">
                        <div className="text-gray-100 text-xl">
                            <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img src={logo} className="flex item-center h-12 rounded" alt="VTI Logo" />
                                        <h1 className="font-bold text-gray-900 text-[20px] ml-3">VTES</h1>
                                    </div>
                                    <div
                                    className="bi bi-x cursor-pointer ml-28 "
                                    onClick={openSideBar}
                                    >
                                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                        className="w-6 h-6 order-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>

                            </div>
                            <div className="my-2 bg-gray-600 h-[1px]"></div>
                        </div>
                        <div
                            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                        >
                            <i className="bi bi-house-door-fill"></i>
                            <span className="text-[15px] ml-4 text-gray-900 font-bold">Home</span>
                        </div>
                        <div
                            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white
                            hover:bg-gradient-to-r from-cyan-500 to-blue-500
                            "
                        >
                            <i className="bi bi-bookmark-fill"></i>
                            <span className="text-[15px] ml-4 text-gray-900 font-bold">Bookmark</span>
                        </div>
                        <div className="my-4 bg-gray-600 h-[1px]"></div>
                    </div>
                </div>
                <div className="flex items-center order-1">
                    {children}
                </div>
                <div>
                </div>

            </div>
        </nav>
    )
}

export default memo(Navbar);