import {memo, useCallback} from "react";
import logo from "../static/img/VTI_logo.png";
import { Link } from "react-router-dom";
const Navbar = (props) => {
    
    const onToggle = useCallback((e) =>{
        // if(e.target.id)
        console.log(e.target.parentElement)
    },[])

    const {children, t} = {...props}
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <Link to="/" className="flex items-center">
                    <img src={logo} className="h-8 mr-3" alt="VTI Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VTES</span>
                </Link>
                <div className="flex items-center md:order-2">
                    <div id="menu-icon" className="mx-6 cursor-pointer px-3 py-1 rounded hover:bg-gray-200 ">
                        <svg onClick={(e)=>onToggle(e)} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 relative">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <ul className="absolute hidden bg-gray-200 left-0">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Some Orther</a></li>
                        </ul>
                    </div>
                    {children}               
                </div>
                <div>
                </div>

            </div>
        </nav>
    )
}

export default memo(Navbar);