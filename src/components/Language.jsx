import { useTranslation } from 'react-i18next';
import {useEffect, useState} from 'react';
const Language = () => {
    const {t,i18n} = useTranslation();
    const [select,setSelect] = useState("jp");
    
    const handleChange = (e) => {
        setSelect(e.target.value)
    }

    useEffect(()=>{
        i18n.changeLanguage(select)
    },[select])

    return (          
        <div className="language-options relative inline-flex self-center hover:text-gray-600 rounded">
            <label>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </label>
            <select onChange={(e)=>handleChange(e) }
            defaultValue={select} 
            className="
            text-base font-bold rounded 
            text-gray-600 h-10 w-50 pl-5 pr-10
            bg-white 
            hover:border-2 hover:border-gray-400 focus:outline-none 
            appearance-none
                ">
                <option value="en">{t("english")}</option>
                <option value="jp">{t("japanese")}</option>
            </select>
        </div>
    )
}
export default Language