import { useTranslation } from 'react-i18next';
import {memo, useRef} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



function HeaderInput({ onDateChange,data,onVehiclechange, onPayment , onRound, onDestination}) {
    const { t } = useTranslation();
  
    return (
<div className='w-full border-b-[1.5px] border-gray-500'>
 <div className='flex sm:flex-col md:flex-row gap-3'>

       <div className='shrink w-32 '>
           <span className='whitespace-nowrap text-xs '>{t("date")}</span>
           <div className='flex bg-white relative border border-black '>
                <DatePicker
                className='w-full text-sm h-6 px-2'
                selected={data.date}
                onChange={date => onDateChange(date)}
                dateFormat="yyyy/MM/dd"
                 placeholderText='YYYY/MM/DD'/>  
           
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 absolute right-2"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" /></svg>
           </div>
        </div>



       <div className='shrink w-26'>
          <span className='whitespace-nowrap text-xs '>{t("vehicle")}</span>
          <div className=" flex border border-black bg-white  relative sm:w-1/2 lg:w-full">
          
             <select
              value ={data.vehicle}
              onChange={(e)=>{onVehiclechange(e.target.value)}}
              className="
              h-6 pr-4 pl-2
              flex-auto 
              text-xs
              appearance-none
               ">
               <option  value="train">{t("train")}</option>
               <option  value="bus">{t("bus")}</option>
               <option  value="taxi">{t("taxi")}</option>
             
             </select>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                className="w-4 h-4 bottom-1/2 translate-y-1/2 text-gray-600 absolute right-0 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
           </div>
          
          
       </div>

      {data.vehicle==="train"&& <div className='shrink w-16'>
          <span className='whitespace-nowrap text-xs '>{t("purchase")}</span>
          <div className=" flex   border border-black bg-white relative  ">
          
             <select
              value={data.payment}
              onChange={(e)=>{onPayment(e.target.value)}}
              className="
              h-6 px-2
              flex-auto 
              text-xs
              appearance-none
               "> 
               <option value=''></option>
               <option  value={t("cash")}>{t("cash")}</option>
               <option  value={t("ic")}>{t("ic")}</option>
               
             
             </select>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                className="w-4 h-4 bottom-1/2 translate-y-1/2 text-gray-600 absolute right-0 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
           </div>
       </div>}

       {data.vehicle==="train" &&  <div className='shrink w-16'>
           <span className='whitespace-nowrap text-xs'>{t("Round")}</span>
           <div className=" flex border border-black bg-white  relative ">
          
            <select
             value={data.round}
             onChange={(e)=>{onRound(e.target.value)}}
             className="
             text-base 
             h-6 px-2
             border-2 border-white
             text-gray-600 h-6 
             text-xs
             flex-auto 
             appearance-none
                ">
               
                <option value={t("1way")}>{t("1way")}</option>
                <option value={t("2way")}>{t("2way")}</option>
              
             </select>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                className="w-4 h-4 bottom-1/2 translate-y-1/2 text-gray-600 absolute right-2 flex-initial ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
       </div>}

</div>
<div className='py-5 '>
    <span className=''>{t('Destination')}</span>
    <div className='' ><input className='w-full h-8 px-2 border border-black' placeholder={t('Destination_pla')} onChange={(e)=> onDestination(e)} /></div> 
</div>
</div>
)
}
export default memo(HeaderInput) 
