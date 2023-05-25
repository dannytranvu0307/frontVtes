import { useTranslation } from 'react-i18next';
function HomeFooter({onAdd}){
    const { t } = useTranslation();
    return (
     <div className='flex justify-between w-full'>
        <div className=''>
            <span className='my-5 text-xs'>{t("price")}</span>
            <div className=' '><input className='w-32 h-8 border-[1px] border-black rounded ' /></div> 
         </div>
        <div className='mt-auto flex'>
         <button className=' w-20 h-8 rounded text-white text-xs  bg-primary-600 hover:bg-primary-500' onClick={()=>onAdd()}>{t("add") }</button>
        </div>

     </div>
    )
}
export default HomeFooter;