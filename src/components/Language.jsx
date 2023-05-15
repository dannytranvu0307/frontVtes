import { useTranslation } from 'react-i18next';
const Language = () => {
    
    const {t,i18n} = useTranslation();
    
    const handleChange = (x) => {
        console.log(x)
        if (i18n.language !== x){
            i18n.changeLanguage(x)
        }
    }
    return (
        <ul className="py-2 font-medium">
            <li>
                <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">
                    <div onClick={()=>handleChange("en")} className="mx-4 my-2 inline-flex items-center">
                        {t("english")}
                    </div>
                </a>
            </li>
      </ul>
    )
}
export default Language