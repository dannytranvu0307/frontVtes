import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
const SwitchButton = () => {
  const [isOn, setIsOn] = useState(false);
  const { t } = useTranslation();
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
<div>
 <div><span className="text-sm font-medium text-black ">{t('reason_ticket')}</span></div>
 <label className="relative inline-flex items-center mr-5 cursor-pointer ">
  <input type="checkbox" value="" className="sr-only peer"checked={isOn} onChange={handleToggle} />
  <div className="w-11 h-6 bg-[#4B5563] rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] peer-checked:after:bg-green-600 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  after:bg-white"></div>
</label>
</div>


  );
};

export default SwitchButton;