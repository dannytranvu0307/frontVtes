import { useTranslation } from 'react-i18next';
function HomeUserData(){
    const { t } = useTranslation();
    return (
    <div className="flex gap-20 ">
        <div className=""><span className='text-xs'>{t('name2')}</span><div className='bg-[#D9D9D9] p-1 rounded-lg flex-1 w-40'> tran van vu </div></div>
        <div className=""><span className='text-xs'>{t('departmentId')}</span><div className=' bg-[#D9D9D9] p-1 rounded-lg flex-1 w-40 '> pkd </div></div>

    </div>
    )
}
export default HomeUserData