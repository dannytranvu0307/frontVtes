import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import FormInput from '../components/FormInput';
import {start, goal, via} from "../instaces"

const ReasonTicket = () => {

    const { t } = useTranslation();

    const [mounted, setMounted] = useState(true);

    const handleToggleTicket = () => {
        setMounted(!mounted)
    }

    const inputs = [start, goal]


    return (
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
                            className="w-5 h-5 absolute flex ml-auto top-0 right-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        <form className="flex justify-between space-x-[20px]" id="ReasonTicket">
                            {inputs.map((input, key)=>(
                                <FormInput {...input} />
                            ))}
                        </form>
                        <button 
                        type=""
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
    )
}

export default ReasonTicket