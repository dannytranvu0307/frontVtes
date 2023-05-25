import { useTranslation } from 'react-i18next';

function SearchBus(){
    const { t } = useTranslation();
    return(
    <div className='pt-3'>
        <div className='flex pb-[40%]'>
            <div className='flex-auto'>
               <span className='my-2 text-xs'>{t("departure")}</span>
               <div className=' '><input className='w-full border-[1px] border-black rounded h-8 px-5' /></div> 
            </div>
            <div className='flex items-end'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg></div>
            <div className='flex-auto'>
            <span className='my-2 text-xs'>{t("arrival")}</span>
               <div className=' '><input className='w-full border-[1px] border-black rounded h-8 px-5' /></div> 
            </div>
            
        </div>
     
    </div>      
    )
}
export default SearchBus