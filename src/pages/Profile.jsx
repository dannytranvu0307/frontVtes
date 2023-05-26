import { useState, useCallback, useMemo, memo, useEffect } from "react";
import { fullName, email, department, password, start, goal } from '../instaces';
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectIsLoading } from "../features/auth/loginSlice";
import { userUpdate } from "../features/user/userSlice"
import { useTranslation } from 'react-i18next';
import axios from "axios";
import ReasonTicket from '../pages/ReasonTicket';
import FormInput from "../components/FormInput";


const Profile = () => {

    // user profile
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [disabledName, setDisabledname] = useState(true)
    const [disabledDepartment, setDisabledDepartment] = useState(true)
    const [disabledPassWord, setDisabledPassword] = useState(true)
    const user = useSelector(selectUser)
    // const user = useSelector(selectUser)
    const [inputUserName, setInputUserName] = useState(user.fullName);
    const [inputDepartment, setInputDepartment] = useState(user.department.departmentId);
    const [inputCurrentPassword, setCurrentPassword] = useState("");
    const [inputNewPassword, setInputNewPassword] = useState("");
    const [inputConfirmNewPassword, setInputConfirmNewPassword] = useState("");
    const [form, setForm] = useState({ ...user, oldPassword: inputCurrentPassword, newPassword: inputNewPassword });

    const isLoading = useSelector(selectIsLoading)

    useEffect(() => {
        setForm({ ...user, oldPassword: inputCurrentPassword, newPassword: inputNewPassword })
    }, [inputCurrentPassword, inputNewPassword])

    const infor = [
        { ...fullName, disabled: disabledName, value: inputUserName },
        { ...department, disabled: disabledDepartment, type: "departmentId", value: inputDepartment },
        { ...email, disabled: true, value: user.email },
        { ...password, disabled: disabledPassWord, placeholder: "●●●●●●●●●●●●", }
    ]

    const passwords =
        [
            {
                id: "current_password",
                label: "current_password",
                name: "current_password",
                type: "password",
                required: true,
                placeholder: "current_password_pla",
                htmlFor: "current_password",
                value: inputCurrentPassword
            }, {
                id: "new_password",
                label: "new_password",
                name: "new_password",
                type: "password",
                htmlFor: "new_password",
                placeholder: "new_password_pla",
                required: true,
                value: inputNewPassword
            },
            {
                id: "confirm_new_password",
                label: "confirm_new_password",
                name: "confirm_new_password",
                type: "password",
                htmlFor: "confirm_new_password",
                placeholder: "confirm_new_password",
                required: true,
                value: inputConfirmNewPassword
            }]

    const handleDisable = () => {
        setDisabledPassword(true);
        setCurrentPassword("")
        setInputNewPassword("")
        setInputConfirmNewPassword("")
    }

    // user ticket
    const [mounted, setMounted] = useState(true);
    const res = {
        data: "",
        message: "something wrong",
        status: 403
    }

    const [error, setError] = useState();
    const handleToggleTicket = () => {
        setMounted(!mounted)
    }

    useEffect(() => {
        if (res.status === 403) {
            setError("err_same_name")
        }
    }, [res])

    const inputs = [start, goal]

    const onSearch = () => {
        console.log(start.value, goal.value)
    }

    const onSubmit = e => {
        e.preventDefault();
        const { department, computerPass, fares, ...userData } = form
        dispatch(userUpdate({ departmentId: department.departmentId, ...userData }))
    }

    return (
        <div className="flex flex-col items-center px-6 py-8 h-full md:h-full lg:py-0 mb-16">
            <div className="min-w-77 bg-white rounded-lg shadow md:mt-0 sm:w-full md:w-full  xl:p-0">
                <div className="grid grid-cols-2 p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className=" col-span-2 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        {t("profile")}
                    </h1>
                    <form id="profile" className="flex flex-wrap w-full" onSubmit={e => onSubmit(e)}>
                        <div className="flex flex-col  w-full flex-none">
                            <div className="relative mt-6">
                                <FormInput onChange={(e) => setInputUserName(e.target.value)} value={inputUserName} {...infor[0]} />
                                {disabledName && <svg onClick={() => setDisabledname(false)} fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5} stroke="currentColor"
                                    className="w-6 h-6 absolute right-0 top-0 translate-y-[35px]  cursor-pointer mr-2 hover:text-gray-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>}
                                <div className="relative mt-6">
                                    <FormInput onChange={e => setInputDepartment(e.target.value)} value={inputDepartment} {...infor[1]} />
                                    {disabledDepartment && <svg onClick={() => setDisabledDepartment(false)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                        className="w-6 h-6 absolute right-0 top-0 translate-y-[35px]  cursor-pointer mr-2 hover:text-gray-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>}
                                </div>
                                <div className="relative mt-6">
                                    <FormInput value={user.email} {...infor[2]} />
                                </div>
                                {disabledPassWord ?
                                    <div className="relative mt-6">
                                        <FormInput {...infor[3]} />
                                        <svg onClick={() => setDisabledPassword(false)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                            className="w-6 h-6 absolute right-0 top-0 translate-y-[35px]  cursor-pointer mr-2 hover:text-gray-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                    </div> : (<div className="relative">
                                        <div className="relative  mt-6" >
                                            <FormInput onChange={(e) => setCurrentPassword(e.target.value)} value={inputCurrentPassword}  {...passwords[0]} />
                                        </div>
                                        <div className="relative  mt-6" >
                                            <FormInput onChange={(e) => setInputNewPassword(e.target.value)} value={inputNewPassword} {...passwords[1]} />
                                        </div>
                                        <div className="relative  mt-6" >
                                            <FormInput onChange={(e) => setInputConfirmNewPassword(e.target.value)} value={inputConfirmNewPassword} {...passwords[2]} />
                                        </div>
                                        <div className="absolute right-0 bg-red-500 rounded-full h-7 w-7 text-white flex my-5 cursor-pointer">
                                            <svg onClick={handleDisable} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
                                                className="w-6 h-6 flex mx-auto translate-y-[1px]">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                            </svg>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                        {/* <div className="w-full mt-8 flex col-span-2 justify-between">
                            <button
                                type="submit"
                                className="w-auto text-white bg-primary-600 hover:bg-primary-500 focus:ring-4 focus:outline-none  focus:ring-primary-300 font-medium rounded-lg  text-sm px-5 py-2.5 text-center ">
                        {t("cancel")}</button>
                            <button
                                type="submit"
                                className="w-auto text-white  bg-primary-600 hover:bg-primary-500  focus:ring-4 focus:outline-none    focus:ring-primary-300 font-medium rounded-lg   text-sm px-5 py-2.5 text-center ">
                                {t("save")}</button>

                        </div> */}
                    </form>
                    <div id="computerPass" className="flex flex-wrap w-full" >
                        <div className="ml-6 mt-6 flex-1">
                            <span
                                className="flex mb-2 text-sm font-medium text-gray-900 grow-0 items-end">
                                {t("reason_ticket")}
                            </span>
                            {
                                mounted ?
                                    <div onClick={handleToggleTicket} className="group flex w-[80px] border border-gray-500 border-solid rounded-[10px] px-2 py-1 items-center bg-gray-100 text-gray-900 cursor-pointer">
                                        <div className="duration-300 transition w-[20px] h-[20px] bg-green-500 text-white rounded-full flex items-center mr-2 group-hover:bg-gray-100 group-hover:text-green-500 group-hover:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 flex mx-auto">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>
                                        </div>
                                        {t("btnAdd")}
                                    </div> :
                                    <div className="relative">

                                        <svg onClick={handleToggleTicket} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
                                            className="w-5 h-5 hover:cursor-pointer hover:text-gray-500 absolute flex ml-auto top-0 right-0">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        <div className="flex justify-between space-x-[20px]" id="ReasonTicket">
                                            {inputs.map((input, key) => (
                                                <FormInput key={key} {...input} />
                                            ))}

                                        </div>
                                        <button
                                            onClick={onSearch}
                                            className="
                        my-4
                        flex
                         text-white 
                        bg-primary-600
                        mx-auto
                        hover:bg-primary-500 
                        focus:ring-4 focus:outline-none 
                        focus:ring-primary-300 font-medium rounded-lg 
                        text-sm px-5 py-2.5 text-center ">{t("search")}</button>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(Profile);