import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import SwitchButton from './SwitchButton';

function SearchTrain(){
    const { t } = useTranslation();
    const [isInputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    
  const handleClick = () => {
    setInputVisible(true);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    setInputVisible(false);
  };
    return(
        <div className='pt-3 border-b-[1.5px] border-gray-500 pb-3'>
        <div className='flex'>
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
        <div className=' px-[25%] pt-5 '> 
       <div className='border border-black rounded '>   

      {isInputVisible ? (
        <input
          className='w-full border-[1px] border-black rounded h-8'
          type="text"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <button onClick={handleClick} className='w-full flex h-8 items-center  justify-center text-xs group'>
       <div className="duration-300 transition w-[20px] h-[20px] bg-green-500 text-white rounded-full flex items-center mr-2 group-hover:bg-gray-100 group-hover:text-green-500 group-hover:rotate-180">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 flex mx-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
      {t("addPath")}</button>
      )}
      </div>
      
        </div>

        <div><SwitchButton /></div>
        <button  className='w-24 h-8 items-center  text-xs justify-center rounded-md text-white flex mx-auto  bg-primary-600 hover:bg-primary-500'> {t("search")}</button>
    </div>      
    )
}
export default SearchTrain