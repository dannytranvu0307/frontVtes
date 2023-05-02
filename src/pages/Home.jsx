
import { useTranslation } from 'react-i18next';
function Home(){
    const {t,i18n} = useTranslation();
    const handleLangue =() =>{
        if(i18n.language =='jp'){
         i18n.changeLanguage('en')
        }else{
         i18n.changeLanguage('jp')
        }
       }
    return (
        <div>
            <div>{t("welcome")}</div>
            <button onClick={handleLangue}>changeLanguage</button>
        </div>
    )
}
export default Home