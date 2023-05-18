import FormInput from "../components/FormInput";
import { useTranslation } from 'react-i18next';
import {useState} from "react";
const PasswordReset = () => {
    const { t } = useTranslation();
    const email = {
        id:"email",
        label:t("email"),
        name:"email",
        type: "email",
        htmlFor: "email",
        placeholder: "email@email.com",
        pattern: /^[A-Za-z]{1,15}[.][A-Za-z]{1,30}([0-9]{1,3})@(vti.com.vn)$/i,
        invalidErrorMessage: "lỗi ở đây asd dasdas dsad ad asd",
        required: true,
    }

    const onChange = e => {
        setEmail()
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        {t("ResetPassword")}
                    </h1>
                    <div className="py-4 text-gray-500">{t("ConfirmEmaiMessage")}</div>
                    <form className="space-y-4 md:space-y-6" onSubmit={e => onSubmit(e)}>
                        <FormInput {...email} placeholder="email@gmail.com" value={email.email}/>
                        <div className="flex justify-between">
                            <button 
                                type="submit" 
                                className="w-auto text-white
                                bg-primary-600
                                hover:bg-primary-500
                                focus:ring-4 focus:outline-none 
                                focus:ring-primary-300 font-medium rounded-lg 
                                text-sm px-5 py-2.5 text-center ">
                            {t("back")}</button>
                            <button 
                                type="submit" 
                                className="w-auto text-white
                                
                                bg-primary-600
                                hover:bg-primary-500
                                focus:ring-4 focus:outline-none 
                                focus:ring-primary-300 font-medium rounded-lg 
                                text-sm px-5 py-2.5 text-center ">
                            {t("send")}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </section>
    )
}
export default PasswordReset