import { useTranslation } from 'react-i18next';
import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
const Language = () => {
    const {t,i18n} = useTranslation();
    const [mounted, setMounted] = useState(false);
    const [select,setSelect] = useState("en");
    
    
    const handleChange = (e) => {

        if (i18n.language !== e.target.value){
            i18n.changeLanguage(e.target.value)
        }
    }
    
    useEffect(()=>{
        if (select==="en"){
            setSelect("en")
        }
        else {
            setSelect("jp")
        }
    },[select])

    return (          
        <div className="language-options relative inline-flex self-center hover:text-gray-600 rounded">
            <label></label>
            <select onChange={(e)=>handleChange(e)} 
            className="text-base font-bold rounded 
            border-2 border-purple-700 text-gray-600 h-10 w-50 pl-5 pr-10
            bg-white hover:border-gray-400 focus:outline-none 
            appearance-none
                ">
                <option  value="en"> {t("english")}</option>
                <option  value="jp">{t("japanese")}</option>
            </select>
        </div>
    )
}
export default Language