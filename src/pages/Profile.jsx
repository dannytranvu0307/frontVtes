import { useState, useCallback, useMemo, memo, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import UserInfo from "./UserInfo";
import FormInput from "../components/FormInput";
import ReasonTicket from '../pages/ReasonTicket';


const Profile = () => {
    const { t } = useTranslation();
    const [form, setForm] = useState();
    // change language
    const user = useMemo(()=>({
        name: "NGUYEN VAN A",
        department: "営業第一部",
        email: "emailcuatao@gmail.com.vn",
    }),[])

    const onChange=(e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }
    const onSubmit = e => {
        e.preventDefault();
    }
    return (

        <div className="flex flex-col items-center px-6 py-8 h-full md:h-full lg:py-0">
            <div className="min-w-77 bg-white rounded-lg shadow md:mt-0 sm:w-full md:w-full  xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        {t("profile")}
                    </h1>


                    <form id="profile" className="flex" onSubmit={e => onSubmit(e)}>
                        <UserInfo onChange={onChange} {...user} />
                        <ReasonTicket />
                        <div className="mt-8 flex col-span-2 justify-between">
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

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default memo(Profile);