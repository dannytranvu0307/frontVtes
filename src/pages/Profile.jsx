import { useState, useCallback, useMemo, memo, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import UserInfo from "./UserInfo";
import axios from "axios";
import ReasonTicket from '../pages/ReasonTicket';


const Profile = () => {
    const { t } = useTranslation();

    const onSubmit = e => {
        e.preventDefault();
    }
    console.log("re-render")
    return (

        <div className="flex flex-col items-center px-6 py-8 h-full md:h-full lg:py-0 mb-16">
            <div className="min-w-77 bg-white rounded-lg shadow md:mt-0 sm:w-full md:w-full  xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        {t("profile")}
                    </h1>
                    <form id="profile" className="flex flex-wrap" onSubmit={e => onSubmit(e)}>
                        <UserInfo />
                        <ReasonTicket />
                        {/* <div className="w-full mt-8 flex col-span-2 justify-between">
                            <button
                            type="submit"
                                className="w-auto text-white
                            bg-primary-600
                            hover:bg-primary-500
                            focus:ring-4 focus:outline-none 
                            focus:ring-primary-300 font-medium rounded-lg 
                            text-sm px-5 py-2.5 text-center ">
                                {t("cancel")}</button>
                            <button
                                type="submit"
                                className="w-auto text-white
                            bg-primary-600
                            hover:bg-primary-500
                            focus:ring-4 focus:outline-none 
                            focus:ring-primary-300 font-medium rounded-lg 
                            text-sm px-5 py-2.5 text-center ">
                                {t("save")}</button>

                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default memo(Profile);

// to fetch at 'http://localhost:8080/api/v1/auth/signin' from origin 'http://localhost:5173' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'.