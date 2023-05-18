import {useState} from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";

const ConfirmResetPassword = () => {
// change language
const { t } = useTranslation();

// init form obj
// const onSubmit = e => {
//     e.preventDefault();
//     console.log(form)
// }

const inputs = [
    {
        id:"password",
        label:t("new_password"),
        name:"password",
        type: "password",
        htmlFor: "password",
        placeholder: "● ● ● ● ● ● ●",
        required: true,
    },
    {
        id:"confirm_password",
        label:t("confirm_password"),
        name:"confirm_password",
        type: "password",
        htmlFor: "confirm_password",
        placeholder: "● ● ● ● ● ● ●",
        required: true,
    }
]

return (
    <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    {t("register")}
                </h1>
                <form id="confirm_reset_password" className="space-y-4 md:space-y-6" onSubmit={e => onSubmit(e)}>
                    {inputs.map((input,i)=>
                    {   
                        return  (
                            <FormInput 
                                key={i} 
                                {...input}
                            />
                        )}
                    )
                    }
                    <button 
                    type="submit" 
                    className="w-full text-white 
                    bg-primary-600
                    hover:bg-primary-500 
                    focus:ring-4 focus:outline-none 
                    focus:ring-primary-300 font-medium rounded-lg 
                    text-sm px-5 py-2.5 text-center ">{t("register")}</button>
                    <p className="text-sm font-light text-gray-500">
                    {t("sign_in_description")} 
                    <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">{t("sign_in_link")}</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
    </section>
)

}
 export default ConfirmResetPassword;