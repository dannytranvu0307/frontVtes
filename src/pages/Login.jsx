import { useRef,useState, useEffect} from "react";
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { useLoginMutation} from '../features/auth/authApiSlice';
import { setCredentials } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

import {email, password} from "../instaces"

import FormInput from "../components/FormInput";
import ValidatorSubmit from "../functional/ValidatorSubmit";
import { set } from "date-fns";

function Login(){
    // change language
    const { t } = useTranslation();

    const userRef = useRef()
    const errRef = useRef()

    const inputs = [email, password]

    // init form obj
    const [form, setForm] = useState({});
    const [remember, setRemember] = useState(false);
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    const [login, {isLoading}] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(()=>{
        // userRef.current.focus()
    },[])

    useEffect(()=>{
        setErrMsg('')
    },[form])
    // input change
    const onChange = e => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    // checked?
    const handleCheck = (e) =>{
        setRemember(!remember)
    }


    const onSubmit = async e => {
        e.preventDefault();
        const submitInput = document.querySelectorAll("input[type='text']")
        const formSubmit = document.querySelector("#login")
        if (ValidatorSubmit(formSubmit,submitInput)){
            // try {
                // const userData = await login({...form}).unwrap()
                // console.log(userData)
                // dispatch(setCredentials({...userData}))
                // setUser('')
                // navigate('/')
            // }catch(err ){
            //     if (err?.response){
            //         setErrMsg('No server response');
            //     }else if (err.response?.code === 400){
            //         setErrMsg('Missing user name or password');
            //     }else if (err.response?.code === 401){
            //         setErrMsg('Authorized');
            //     }else {
            //         setErrMsg("Login Failed")
            //     }
            //     // errRef.current.focus();
            // }
            // console.log({...form, ["remember"]:remember})
            const headers = {
                "Content-Type":"Apllication/json"
            }
            const body = {...form, ["remember"]:remember}
            const res = await axios.post("http://localhost:8080/api/v1/auth/login", body, headers)
            console.log(res.data)
            if (res.data.code === '200'){
                console.log("pass")
                // navigate("/")
            }
        }
    }

    return isLoading ? <h1>Loading...</h1> :(
        <section 
        data-aos="fade-right"
        data-aos-offset="3"
        data-aos-easing="ease-in-sine"
        className="bg-gray-50 dark:bg-gray-900"
        >
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        {t("login")}
                    </h1>
                    <form id="login" className="space-y-4 md:space-y-6" onSubmit={e => onSubmit(e)}>
                        {inputs.map((input,i)=>(
                            <FormInput  key={i} 
                            onChange={e=>onChange(e)}
                            {...input}/>
                        ))}
                        <p ref={errRef}>{errMsg}</p>
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
                            <Link to="/passwordreset" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">{t("forgot_password")}</Link>
                        </div>
                        <button 
                        type="submit" 
                        className="
                        w-full 
                        text-white 
                        bg-primary-600
                        hover:bg-primary-500
                        focus:ring-4 focus:outline-none 
                        focus:ring-primary-500 font-medium rounded-lg 
                        text-sm px-5 py-2.5 text-center ">{t("login")}</button>
                        <p className="text-sm font-light text-gray-500">
                        {t("sign_up_description")}
                        <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">{t("sign_up_link")}</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Login