import {useState} from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function Login(){
    // change language
    const { t } = useTranslation();

    // init form obj
    const [form, setForm] = useState({
        email: "",
        password: "",
        remember: false
    });

    // break obj
    const { email, password, remember} = form

    // input change
    const onChange = e => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    // checked?
    const handleCheck = (e) =>{
        setForm({...form, [e.target.name] : e.target.checked})
    }


    const onSubmit = e => {
        e.preventDefault();
        console.log(form)
    }



    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        {t("login")}
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={e => onSubmit(e)}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                                {t("email")}
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                value={email}
                                onChange={e=>onChange(e)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required=""/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("password")}</label>
                            <input 
                            type="password" 
                            onChange={e=>onChange(e)} 
                            value={password} 
                            name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember"  value={remember}  name="remember" onChange={e=>handleCheck(e)}  aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" 
                    
                                    className="text-gray-500 dark:text-gray-300">{t("remember")}</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">{t("forgot_password")}</a>
                        </div>
                        <button 
                        type="submit" 
                        className="w-full text-white 
                        bg-btn-light 
                        hover:bg-btn-hover 
                        focus:ring-4 focus:outline-none 
                        focus:ring-primary-300 font-medium rounded-lg 
                        text-sm px-5 py-2.5 text-center ">{t("login")}</button>
                        <p className="text-sm font-light text-gray-500">
                        {t("sign_up_description")} <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">{t("sign_up_link")}</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Login