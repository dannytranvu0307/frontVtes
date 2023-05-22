import { useState, useMemo } from "react";
import { useTranslation } from 'react-i18next';
import FormInput from "../components/FormInput";
function UserInfo(props) {

    const { onChange, name, department, email} = {...props}

    const inputs =
        [{
            index: 0,
            id: "name",
            label: "name",
            name: "name",
            htmlFor: "name",
            type: "text",
            defaultValue: name,
            required: true,
            disabled: true,
        },
        {
            index: 1,
            id: "department",
            label: "department",
            name: "department",
            type: "text",
            htmlFor: "department",
            defaultValue: department,
            disabled: true,
        },
        {
            index: 2,
            id: "email",
            label: "email",
            name: "email",
            type: "email",
            htmlFor: "email",
            value: email,
            disabled: true
        },
        {
            index: 3,
            id: "password",
            label: "password",
            name: "password",
            type: "password",
            htmlFor: "password",
            placeholder: "●●●●●●●●●●●●",
            required: true,
            disabled: true,
        }
        ]

    const password =
        [{
            index: 4,
            id: "new_password",
            label: "new_password",
            name: "new_password",
            type: "password",
            htmlFor: "new_password",
            placeholder: "new_password_pla",
            required: true,
        },
        {
            index: 5,
            id: "confirm_new_password",
            label: "confirm_new_password",
            name: "confirm_new_password",
            type: "password",
            htmlFor: "confirm_new_password",
            placeholder: "confirm_new_password",
            required: true,
        }]

    const [infor, setInfor] = useState(inputs)




    const handleEnable = (key) => {
        const newState = infor.map(obj => {
            //  if idex equals key, update disabled property
            if (obj.index === key) {
                if (obj.index === 1) {
                    return { ...obj, disabled: false, type: "department" };
                }
                if (obj.index === 3) {
                    return {
                        ...obj, disabled: false,
                        required: true,
                        id: "current_password",
                        label: "current_password",
                        name: "current_password",
                        htmlFor: "current_password",
                    };
                }
                return { ...obj, disabled: false };
            }
            return obj;
        });
        setInfor(newState);
    }

    const handleDisable = (key) => {
        const newState = infor.map(obj => {
            //  if idex equals key, update disabled property
            if (obj.index === key) {
                if (obj.index === 1) {
                    return { ...obj, disabled: false, type: "text" };
                }
                if (obj.index === 3) {
                    return {
                        ...obj, disabled: true,
                        required: false,
                        id: "password",
                        label: "password",
                        name: "password",
                        htmlFor: "password",
                    };
                }
                return { ...obj, disabled: true };
            }
            return obj;
        });
        setInfor(newState);
    }
    return (
        <div className="flex flex-col w-1/2 flex-none">
            {infor && infor.map((item, key) => (
                <div className="relative mt-6" key={key}>
                    <FormInput onChange={onChange} {...item} />
                    {item.disabled === false || !(item.name === "email") &&
                        <svg onClick={() => handleEnable(key)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-6 h-6 absolute right-0 top-0 translate-y-[35px]  cursor-pointer mr-2 hover:text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    }
                </div>
            ))}
            <>{
                !infor[3].disabled &&
                <div className="relative">
                    {password.map((item, key) => (
                        <div className="relative  mt-6" key={key}>
                            <FormInput  {...item} />
                        </div>))}
                        <div className="absolute right-0 bg-red-500 rounded-full h-7 w-7 text-white flex my-5 cursor-pointer">
                            <svg onClick={()=>handleDisable(3)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
                            className="w-6 h-6 flex mx-auto translate-y-[1px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>
                </div>
            }
            </>
        </div>
    )
}
export default UserInfo