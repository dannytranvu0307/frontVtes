import {useState, useCallback, useMemo, memo} from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import Validators from "../functional/Validators";

const SignUp = () => {
    const { t } = useTranslation();
    // change language


const onSubmit = useCallback(e => {
    e.preventDefault();
},[])
const inputs = useMemo(()=>{
    return [{
            id:"name",
            label:"name",
            name:"name",
            htmlFor: "name",
            type: "text",
            placeholder: "name_pla",
            required: true
        },
        {
            id:"department",
            label:"department",
            name:"department",
            htmlFor: "department",
            required: true
        },
        {
            id:"email",
            label:"email",
            name:"email",
            type: "email",
            htmlFor: "email",
            placeholder: "email_pla",
            required: true,
        },
        {
            id:"password",
            label:"password",
            name:"password",
            type: "password",
            htmlFor: "password",
            placeholder: "password_pla",
            required: true,
        },
        {
            id:"confirm_password",
            label:"confirm_password",
            name:"confirm_password",
            type: "password",
            htmlFor: "confirm_password",
            placeholder: "confirm_password_pla",
            required: true,
        }
    ]
},[])

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
                    type="submit" title="ádddddddddddd ádddddddddddd áddddddddddddáddddddddddddáddddddddddddáddddddddddddádddddddddddd asd asd asd asd asdas ads ads asdas ds dsas"
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
 export default memo(SignUp);