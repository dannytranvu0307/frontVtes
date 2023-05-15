import {useState} from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const SignUp =()=>{
    // change language
    const { t } = useTranslation();

    // init form obj
    const [form, setForm] = useState({
        full_name: "",
        email: "",
        password: "",
        confirm_password: ""
    });

    // break obj
    const {full_name, email, password, confirm_password} = form

    // input change
    const onChange = e => {
        setForm({...form, [e.target.name] : e.target.value})
    }


    const onSubmit = e => {
        e.preventDefault();
        console.log(form)
    }



    return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        {t("register")}
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={e => onSubmit(e)}>
                    <div>
                            <label htmlFor="full_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                {t("name")}
                            </label>
                            <input 
                                type="text" 
                                name="full_name" 
                                id="full_name" 
                                value={full_name}
                                onChange={e=>onChange(e)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={t("name_pla")} required=""/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                {t("email")}
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                value={email}
                                onChange={e=>onChange(e)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("password")}</label>
                            <input 
                            type="password" 
                            onChange={e=>onChange(e)} 
                            value={password} 
                            name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        </div>
                        <div>
                            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("confirm_password")}</label>
                            <input 
                            type="confirm_password" 
                            onChange={e=>onChange(e)} 
                            value={confirm_password} 
                            name="confirm_password" id="confirm_password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        </div>
            
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
     </div>    
    )
}
export default SignUp