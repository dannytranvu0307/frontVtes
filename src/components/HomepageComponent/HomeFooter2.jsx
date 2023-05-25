import { useTranslation } from 'react-i18next';

function HomeFooter2({onFileChange }){
    const { t } = useTranslation();

    return (
        <div className='flex justify-between w-full'>
        <div className='flex-auto space-y-2 '>
          
            <div className="flex items-center ">
        <label className=" flex items-center px-4 py-[6px] bg-primary-600 hover:bg-primary-500 text-white rounded-md shadow-md cursor-pointer group ">
                      <div className="duration-300 transition w-[20px] h-[20px] bg-green-500 text-white rounded-full flex items-center mr-2 group-hover:bg-gray-100 group-hover:text-green-500 group-hover:rotate-180">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 flex mx-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                   <span className='text-xs'>{t("UploadFile")}</span>
        <input
          type="file"
          className="hidden"
          onChange={e=>onFileChange(e.target.files)}
          multiple
        />
      </label>
      
    
    </div>
                
                
           
         </div>
        <div className='flex items-end px-10'>
            
         <button className=' flex items-center text-center justify-center w-32 h-8 rounded text-white text-xs  bg-green-700 hover:bg-green-500'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
   <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>{t("export") }</button>
        </div>

     </div>
    )
}
export default HomeFooter2;