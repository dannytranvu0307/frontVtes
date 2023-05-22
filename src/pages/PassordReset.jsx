import FormInput from "../components/FormInput";
import { useTranslation } from 'react-i18next';
import {email} from "../instaces"
import {useState} from "react";
import { Link } from "react-router-dom";

const PasswordReset = () => {
    const [form, setForm] = useState();
    const { t } = useTranslation();

    const onSubmit = e => {
        e.preventDefault();

        const submitInput = document.querySelectorAll("input[type='text']")
        const formSubmit = document.querySelector("#resetpassword")
        if (ValidatorSubmit(formSubmit,submitInput)){
            console.log("submit form")
        }
    }


    const onChange = e => {
        setForm({[e.target.name]:e.target.value})
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="relative p-6 space-y-4 md:space-y-6 sm:p-8">
                    <Link to="/login">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                        className="w-6 h-6 right-2 top-2 cursor-pointer absolute hover:text-gray-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Link>

                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        {t("ResetPassword")}
                    </h1>
                    <div className="py-4 text-gray-500">{t("ConfirmEmaiMessage")}</div>
                    <form id="passwordreset" className="space-y-4 md:space-y-6" onSubmit={e => onSubmit(e)}>
                        <FormInput {...email} onChange = {e => onChange(e)} placeholder="ex_email"/>
                        <div className="flex justify-end">
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