import {useState} from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import Validators from "../functional/Validators";
const ConfirmResetPassword = () => {
// change language
const { t } = useTranslation();

// init form obj
const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    input_empty: "",
});

// input change
const onChange = e => {
    setForm({...form, [e.target.name] :  e.target.value });
}

const onSubmit = e => {
    e.preventDefault();
    console.log(form)
}

const inputs = [
    {
        id:"name",
        label:t("name"),
        name:"name",
        htmlFor: "name",
        type: "text",
        placeholder: t("name_pla"),
        pattern:"^[A-Za-z0-9]{3,16}$",
        required: true
    },
    {
        id:"email",
        label:t("email"),
        name:"email",
        type: "email",
        htmlFor: "email",
        placeholder: "email@email.com",
        required: true,
    },
    {
        id:"password",
        label:t("password"),
        name:"password",
        type: "password",
        htmlFor: "password",
        placeholder: "●●●●●●●●●●●●",
        required: true,
    },
    {
        id:"confirm_password",
        label:t("confirm_password"),
        name:"confirm_password",
        type: "password",
        htmlFor: "confirm_password",
        placeholder: "●●●●●●●●●●●●",
        pattern: form.password,
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
                                onChange={onChange} 
                                {...input}
                                value={form[input.name]}
                            />
                        )}
                    )
                    }
                    <button 
                    type="submit" 
                    className="w-full text-white 
                    bg-btn-light 
                    hover:bg-btn-hover 
                    focus:ring-4 focus:outline-none 
                    focus:ring-primary-300 font-medium rounded-lg 
                    text-sm px-5 py-2.5 text-center ">{t("register")}</button>
                    <p className="text-sm font-light text-gray-500">
                    {t("sign_in_description")} <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">{t("sign_in_link")}</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
    </section>

)

}
 export default ConfirmResetPassword;