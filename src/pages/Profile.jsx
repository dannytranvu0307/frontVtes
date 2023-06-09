import { useState, useMemo, memo, useEffect } from "react";
import { fullName, email, department, password, start, goal } from '../instaces';
import { useDispatch, useSelector } from "react-redux";
import { selectUser, authenticate } from "../features/auth/loginSlice";
import { userUpdate, selectUpdateSuccess } from "../features/user/userSlice";
import { useTranslation } from 'react-i18next';
import ErrorNotification from "../components/ErrorNotification";
import { baseURL } from "../features/auth/loginSlice";
import axios from "axios";
import FormInput from "../components/FormInput";
import ValidatorSubmit from "../functional/ValidatorSubmit";


const Profile = () => {
    // init function
    const { t } = useTranslation();
    const dispatch = useDispatch();
    // user infomation
    const user = useSelector(selectUser);
    // enable or disable state instances ①
    const [disabledName, setDisabledname] = useState(true);
    const [disabledDepartment, setDisabledDepartment] = useState(true);
    const [disabledPassWord, setDisabledPassword] = useState(true);
    const [lstCp, setLstCp] = useState([])

    // user infor state [dependences ①]
    const infor = [
        { ...fullName, disabled: disabledName },
        { ...department, disabled: disabledDepartment, type: "departmentId" },
        { ...email, disabled: true },
        { ...password, text:'type',disabled: disabledPassWord, placeholder: "●●●●●●●●●●●●", }
    ]
    // commuter pass search instances
    const inputTickets = [start, goal]

    //  password update instances
    const passwords = [{
            id: "current_password",
            label: "current_password",
            name: "current_password",
            type: "password",
            required: true,
            placeholder: "current_password_pla",
            htmlFor: "current_password",
        }, {
            id: "new_password",
            label: "new_password",
            name: "new_password",
            type: "password",
            htmlFor: "new_password",
            placeholder: "new_password_pla",
            required: true,
        },
        {
            id: "confirm_new_password",
            label: "confirm_new_password",
            name: "confirm_new_password",
            type: "password",
            htmlFor: "confirm_new_password",
            placeholder: "confirm_new_password",
            required: true,
        }]

    // commuter pass state
    const [commuterPass, setCommuterPass] = useState({ start: "", goal: "", viaDetails: [] })

    // start point 
    const [startPoint, setStartPoint] = useState({
        stationCode: "",
        stateName: ""
    })

    // goal point
    const [goaltPoint, setGoalPoint] = useState({
        stationCode: "",
        stationName: ""
    })
    // update success message state
    const isSuccess = useSelector(selectUpdateSuccess);
    // form input for user infomation
    const [form, setForm] = useState({});

    // sugesstion state
    const [startSuggestion, setStartSuggestion] = useState([])
    // sugesstion state
    const [goaltSuggestion, setGoalSuggestion] = useState([])

    // set init value for user and input form
    useEffect(() => {
        if (user) {
            setForm({
                fullName: user.fullName,
                departmentId: user.department.departmentId,
                email: user.email,
                current_password: null,
                new_password: null,
                confirm_new_password: null,
            });
            if (user.commuterPass) {
                setCommuterPass({
                    start: user.commuterPass.departure,
                    goal: user.commuterPass.destination,
                    viaDetails: user.commuterPass.viaDetails
                })
            }
        }
    }, [user])

    // side effect proccess
    useEffect(() => {
        dispatch(authenticate())
    }, [])

    // value start and goal point was changed will be call api

    useEffect(()=>{

    },[])

    const ApiSearchStation = async (name, value) => {
        try {
            const res = await axios.get(`${baseURL}/stations?stationName=${value}`,{withCredentials: true})
            if (name === "start") {
                setStartSuggestion([...res.data.data])
            } else {
                setGoalSuggestion([...res.data.data])
                
            }
        } catch (err) {
            console.log(err.response)
        }
    }

    useEffect(() => {

    }, [commuterPass.start, commuterPass.goal])

    const handleStartPoint = (stationCode, stationName) => {
        setStartPoint({ stationCode: stationCode, stationName: stationName })
        setCommuterPass({ ...commuterPass, start: stationName })
        setStartSuggestion([])
    }

    const handleGoalPoint = (stationCode, stationName) => {
        setGoalPoint({ stationCode: stationCode, stationName: stationName })
        setCommuterPass({ ...commuterPass, goal: stationName })
        setGoalSuggestion([])
    }

    const onChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const [validError, setInvalidError] = useState()
    // dissable handle change password
    const handleDisable = () => {
        setDisabledPassword(true);
        setForm({ ...form, current_password: null, new_password: null, confirm_new_password: null })
    }

    // user ticket mount or not
    const [mounted, setMounted] = useState(true);

    // onclick change state mount btn
    const handleToggleTicket = () => {
        setMounted(!mounted)
    }

    // submit to search commuter pass 
    const onSubmitSearch = async () => {
        try {
            const res = await axios.get(`${baseURL}/cp-routes?start=${startPoint.stationCode}&goal=${goaltPoint.stationCode}`,{withCredentials: true})
            setLstCp(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }


    const handleUpdateItem = (e,start_,goal_,links_ ) => {
        setCommuterPass({start:start_,goal:goal_, viaDetails:links_})
        const Elements = document.querySelectorAll('div.divCp')
        Elements.forEach((item, i) => {
            if (item.classList.contains("clicked")){
                item.classList.remove("clicked",'bg-blue-700','text-white')
            }
        })
        e.target.classList.add('clicked', 'bg-blue-700', 'text-white')
    }

    // update commuter pass value start and goal
    const onChangeStation = e => {
        setCommuterPass({ ...commuterPass, [e.target.name]: e.target.value })
        ApiSearchStation(e.target.name,e.target.value)
    }

    // submit all record on form
    const onSubmit = e => {
        e.preventDefault();
        const $ = document.querySelector.bind(document)
        const formSubmit = $('#profile')
        const eName =  document.querySelector("#fullName")
        const eDepartmentId =  document.querySelector("#departmentId")

        const eOldPassword =  document.querySelector("#current_password")
        const eNewPassword =  document.querySelector("#new_password")
        const eConfirmNewPassword=  document.querySelector("#confirm_new_password")
        const { departmentId, fullName, email, current_password, new_password, confirm_new_password,...userData } = form
        if (ValidatorSubmit(formSubmit, [eName, eDepartmentId, eOldPassword, eNewPassword, eConfirmNewPassword]))
            dispatch(userUpdate({
                fullName: fullName,
                email: email,
                departmentId: +departmentId,
                oldPassword: current_password,
                newPassword: new_password,
                commuterPass: {
                    departure:commuterPass.start, 
                    destination:commuterPass.goal, 
                    viaDetails: commuterPass.viaDetails}
            }));
    }

    return (
        <div className="flex flex-col items-center px-6 py-8 h-full md:h-full lg:py-0 mb-16">
            <div className="min-w-77 bg-white rounded-lg shadow md:mt-0 xl:p-0">
                <div className="flex flex- p-6  sm:p-8">
                    <div className="flex flex-col">
                        <h1 title="aaaa-aaaaaa-aaaaaaa-aaaaaaaaaaaa" className="w-full text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            {t("profile")}
                        </h1>
                        <div className="flex">
                            <form id="profile" className="flex flex-wrap min-w-[500px]" onSubmit={e => onSubmit(e)}>
                                <div className="flex flex-col  w-full flex-none">
                                    <div className="relative mt-6">
                                        <FormInput onChange={(e) => onChange(e)} value={form.fullName} {...infor[0]} />
                                        {disabledName && <svg onClick={() => setDisabledname(false)} fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5} stroke="currentColor"
                                            className="w-6 h-6 absolute right-0 top-0 translate-y-[35px]  cursor-pointer mr-2 hover:text-gray-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>}
                                        <div className="relative mt-6">
                                            <FormInput onChange={(e) => onChange(e)} value={form.departmentId} {...infor[1]} />
                                            {disabledDepartment && <svg onClick={() => setDisabledDepartment(false)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                className="w-6 h-6 absolute right-0 top-0 translate-y-[35px]  cursor-pointer mr-2 hover:text-gray-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>}
                                        </div>
                                        <div className="relative mt-6">
                                            <FormInput value={form.email} {...infor[2]} />
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
                                                    <FormInput onChange={(e) => onChange(e)} value={form.current_password}  {...passwords[0]} />
                                                </div>
                                                <div className="relative  mt-6" >
                                                    <FormInput onChange={(e) => onChange(e)} value={form.new_password} {...passwords[1]} />
                                                </div>
                                                <div className="relative  mt-6" >
                                                    <FormInput onChange={(e) => onChange(e)} value={form.confirm_new_password} {...passwords[2]} />
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
                            </form>
                            <div id="computerPass" className="flex flex-wrap" >
                                <div className="ml-6 mt-6 flex-1">
                                    <span
                                        className="flex mb-2 text-sm font-medium text-gray-900 grow-0 items-end">
                                        {t("reason_ticket")}
                                    </span>
                                    {mounted ? (
                                        commuterPass.start === "" && commuterPass.goal === "" ?
                                            <div onClick={handleToggleTicket} className="group flex w-[80px] border border-gray-500 border-solid rounded-[10px] px-2 py-1 items-center bg-gray-100 text-gray-900 cursor-pointer">
                                                <div className="duration-300 transition w-[20px] h-[20px] bg-green-500 text-white rounded-full flex items-center mr-2 group-hover:bg-gray-100 group-hover:text-green-500 group-hover:rotate-180">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 flex mx-auto">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                    </svg>
                                                </div>
                                                {t("btnAdd")}</div> : <div className="flex flex-col">
                                                <div className="space-y-4">
                                                    <div className="flex flex-col min-w-[150px]">
                                                        <h1 className="text-sm font-medium">{t("start")}</h1>
                                                        <span className="mt-2 border flex rounded-[10px] h-[40px] text-stone-500">
                                                            <p className="flex my-auto px-2.5">{commuterPass && commuterPass.start}</p>
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col min-w-[150px]">
                                                        <h1 className="text-sm font-medium">{t("goal")}</h1>
                                                        <span className="mt-2 border flex rounded-[10px] h-[40px] text-stone-500">
                                                            <p className="flex my-auto px-2.5">{commuterPass && commuterPass.goal}</p>
                                                        </span>
                                                    </div>
                                                    <button
                                                        onClick={handleToggleTicket}
                                                        className="flex ml-auto w-auto text-black border 
                                                        border-black bg-gray-50 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none 
                                                         focus:bg-gray-100 font-medium rounded-lg  text-sm px-5 py-2 text-center">{t("change")}</button>
                                                </div>
                                            </div>
                                    ) : (
                                        <>
                                            <div className="relative">
                                                <svg onClick={handleToggleTicket} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
                                                    className="w-5 h-5 hover:cursor-pointer hover:text-gray-500 absolute flex ml-auto top-0 right-0">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                                <div className="flex justify-between space-x-[20px]" id="ReasonTicket">
                                                    <div className="relative">
                                                        <FormInput value={commuterPass.start} onChange={e => onChangeStation(e)} {...inputTickets[0]} />

                                                        {/* <SearchCommuterPass name="start" setPoint={setStartPoint} onSuggestion={setStartSuggestion} value={commuterPass.start}/> */}
                                                        <div className="absolute bg-white rounded drop-shadow-lg">
                                                            {startSuggestion.map((item, i) => (
                                                                <p className="px-2 py-1 duration-100 
                                                        transision-all cursor-pointer 
                                                        hover:bg-blue-200
                                                        last:rounded-b
                                                        first:rounded-t
                                                        "
                                                                    onClick={() => handleStartPoint(item.stationCode, item.stationName)}
                                                                    key={i}>{item.stationName}
                                                                </p>
                                                            ))}
                                                        </div>

                                                    </div>


                                                    <div className="relative">
                                                        <FormInput value={commuterPass.goal} onChange={e => onChangeStation(e)} {...inputTickets[1]} />

                                                        {/* <SearchCommuterPass name="goal" setPoint={setGoalPoint} onSuggestion={setGoalSuggestion} value={commuterPass.goal} /> */}
                                                        <div className="absolute bg-white rounded drop-shadow-lg">
                                                            {goaltSuggestion.map((item, i) => (
                                                                <p className="px-2 py-1 duration-100 
                                                            transision-all cursor-pointer 
                                                            hover:bg-blue-200
                                                            last:rounded-b
                                                            first:rounded-t
                                                            "
                                                                    onClick={() =>
                                                                        handleGoalPoint(item.stationCode, item.stationName)}
                                                                    key={i}>{item.stationName}
                                                                </p>
                                                            ))}
                                                        </div>

                                                    </div>
                                                </div>
                                                <button
                                                    onClick={onSubmitSearch}
                                                    className="my-4 flex text-white bg-primary-600 mx-auto hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">{t("search")}</button>
                                            </div>
                                            <div className="space-y-3">
                                                {lstCp && lstCp.map((item, i) => (
                                                    <div key={i} className="group cursor-pointer">
                                                        <div className={`divCp justify-items-stretch w-full border rounded-[10px] border-black flex h-10 px-3 pointer`} 
                                                        onClick={(e) => handleUpdateItem(e,item.summary.start.stationName,item.summary.goal.stationName,item.commuterPassLink)} key={i}>
                                                            <span className="pointer-events-none flex my-auto after:content-['ー'] after:px-1">{item.summary.start.stationName}</span>
                                                            <span className="pointer-events-none flex my-auto  whitespace-nowrap text-ellipsis overflow-hidden max-w-[200px]">
                                                                {item.sections.map((e, i) => {
                                                                    if (e.type === "point" && e.stationName !== item.summary.start.stationName && e.stationName !== item.summary.goal.stationName) {
                                                                        return <span className="after:content-['ー'] after:px-2" key={i}>{e.stationName}</span>
                                                                    }
                                                                })
                                                                }
                                                            </span>
                                                            <span className="pointer-events-none flex my-auto ">{item.summary.goal.stationName}</span>
                                                            <span className="pointer-events-none flex my-auto pl-3 ml-auto">{t("transfer")}：{item.summary.move.transitCount}{t('times')}</span>
                                                        </div>
                                                        <div className="absolute flex flex-col hidden group-hover:block z-99 bg-white drop-shadow-lg px-3 py-2 rounded">
                                                            {item.sections.map((e, i) => {
                                                                if (e.type === "move" && e.transport) {
                                                                    return <div key={i} className="pointer-events-none flex my-auto after:px-1"><span  className="border border-2 rounded mx-2" style={{borderColor: e.transport.lineColor}}></span>{e.transport.lineName}</div>
                                                                } else if (e.type === "point") {
                                                                    return <div key={i} className="pointer-events-none flex my-auto after:px-1">{e.stationName}</div>
                                                                }
                                                                else {
                                                                    return <spanp className="text-gray-500 border border-2 rounded mx-2"></spanp>
                                                                }
                                                            })}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full px-8 mb-4 mt-20 flex col-span-2 justify-between">
                    <button
                        type="submit"
                        className="w-auto text-white bg-primary-600 hover:bg-primary-500 focus:ring-4 focus:outline-none  focus:ring-primary-300 font-medium rounded-lg  text-sm px-5 py-2.5 text-center ">
                        {t("cancel")}</button>
                    <button
                        onClick={e => onSubmit(e)}
                        type="submit"
                        className="w-auto text-white  bg-primary-600 hover:bg-primary-500  focus:ring-4 focus:outline-none    focus:ring-primary-300 font-medium rounded-lg   text-sm px-5 py-2.5 text-center ">
                        {t("save")}</button>

                </div>
            </div>
            {isSuccess && <ErrorNotification>userInfoUpdateMessageSuccess</ErrorNotification>}
        </div>
    )
}
export default memo(Profile);