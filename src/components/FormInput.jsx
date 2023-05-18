import { useTranslation } from 'react-i18next';
import { useState,useRef,useCallback,memo } from "react";
import Validators from "../functional/Validators";

const FormInput = (props) => {
    const [focused, setFocused] = useState("hidden");
    const {label, invalidErrorMessage, placeholder,id,forHtml,...inputProps} = props

    const [error, setError]= useState({
        name:"",
        email: "",
        password: "",
        confirm_password: "",
        department:""
    });

    const ref = useRef();

    const { t } = useTranslation();

    const handleFocus = useCallback((e) => {
        setFocused("");
    },[])

    const onBlur = useCallback(() => {
        setError(
            Validators(ref.current.parentElement.parentElement,ref.current,ref.current.value)
        )
    },[])

    return (
        <div id="input-field"  className= "grid">
            <label 
                htmlFor={forHtml} 
                className="flex mb-2 text-sm font-medium text-gray-900 grow-0 items-end">
                {t(label)}
                </label>
            {
                label !== "department" ? (

                
                <input 
                    ref={ref}
                    {...inputProps}
                    onBlur={onBlur}
                    onFocus={(e) =>handleFocus(e)
                    }
                    placeholder={t(placeholder)}
                    id={id} 
                    className={`
                    bg-gray-50 border border-gray-300 
                    text-gray-900 sm:text-sm rounded-lg 
                    focus:ring-primary-600 
                    focus:border-primary-600 w-full p-2.5 ${error[id] && ("border-red-500 bg-red-100")}`}
                    {...inputProps}
                />):(
                <select
                    onBlur={onBlur}
                    onFocus={(e) =>handleFocus(e)
                    }
                    ref={ref}
                    {...inputProps}
                    className={`
                    bg-gray-50 border border-gray-300 
                    text-gray-700 sm:text-sm rounded-lg 
                    focus:ring-primary-600
                    focus:border-primary-600 w-full p-2.5 ${error[id] && ("border-red-500 bg-red-100")}`}>
                    <option value="">{t("chooseDepartment")}</option>
                    <option value="BOD">BOD</option>
                    <option value="COMMOM">COMMOM</option>
                    <option value="営業第一部">営業第一部</option>
                    <option value="営業第ニ部">営業第ニ部</option>
                    <option value="営業第三部">営業第三部</option>
                    <option value="大阪事業所">大阪事業所</option>
                    <option value="開発第一グループ">開発第一グループ</option>
                    <option value="開発第二グループ">開発第二グループ</option>
                    <option value="開発第三グループ">開発第三グループ</option>
                    <option value="開発第四グループ">開発第四グループ</option>
                    <option value="開発第五グループ">開発第五グループ</option>
                    <option value="開発第六グループ">開発第六グループ</option>
                    <option value="マーケティング部">マーケティング部</option>
                    <option value="総務部">総務部</option>
                    <option value="人事部">人事部</option>
                    <option value="採用部">採用部</option>
                    <option value="経理・会計ー財務部">経理・会計ー財務部</option>
                </select>)
                 }
                <span className={`${focused} text-red-500 text-xs`}>{"" || t(error[id])}</span>
           
        </div>
    )
}

export default  memo(FormInput)