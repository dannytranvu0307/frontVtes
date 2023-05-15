import { useTranslation } from 'react-i18next';
import { useState } from "react";
import "../static/css/validators.css";
import Validators from "../functional/Validators";

const FormInput = (props) => {
    const $ = document.querySelector.bind(document)
    const [formId,setFormId] = useState();
    const [focused, setFocused] = useState(false);
    const {label, invalidErrorMessage, onChange, id,forHtml, ...inputProps} = props
    const [error, setError]= useState({
        name:"",
        email: "",
        password: "",
        confirm_password: ""
    });


    const { t } = useTranslation();
    const handleFocus = (e) => {
        setFormId(document.querySelector(`input#${e.target.name}`).parentElement.parentElement)
        if (!(focused === true)){
            setFocused(true);
        }
    };
    const checkChange = e => {
        // onChange()
        console.log("change")
    }

    const onBlur = e => {
        console.log(e.target.value)
        setError(
            Validators(formId,e.target,e.target.value)
        )
    }

    return (
        <div id="input-field"  className= "grid">
            <label 
                htmlFor={forHtml} 
                className="flex mb-2 text-sm font-medium text-gray-900 grow-0 items-end">
                {label}
            </label>
            <input 
                {...inputProps}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={(e) =>handleFocus(e)
                  }
                
                id={id} 
                focused={focused.toString()}
                className="
                    bg-gray-50 border 
                    border-gray-300 
                    text-gray-900 
                    sm:text-sm 
                    rounded-lg 
                    focus:ring-primary-600
                    focus:border-primary-600 
                    w-full p-2.5
                    " 
                {...inputProps}
                />
                <span className="text-red-500">{"" || t(error[id])}</span>
        </div>
    )
}

export default  FormInput