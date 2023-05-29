import { useTranslation } from 'react-i18next';
import FormatDate from '../../functional/FormatDate'
import { memo, } from 'react';


const Table = ({tableData})=>{


    const { t } = useTranslation();
    const renderTable = () => {
        const table = [];
        for (let i = 0; i < (8-tableData.length); i++) {
          const row = [];
    
          for (let j = 0; j < 9; j++) {
            row.push(
              <td  className="bg-white border border-gray-400 px-6 py-3 "key={j}></td>
            );
          }
    
          table.push(<tr key={i}>{row}</tr>);
        }
    
        return table;
      };
 return (
    <div className='py-3'>
        
<div className=" relative max-h-[250px]  lg:max-w-[750px] overflow-auto">
    
    <table className="">
        <thead className="text-xs text-black uppercase bg-[#D9D9D9] ">
            <tr>
                <th scope="col" className="py-3 px-auto border border-gray-500">
                 {t('date2')}
                </th>
                <th scope="col" className="py-3 px-18 border border-gray-500">
                {t('destination')}
                </th>
                <th scope="col" className="border px-4 border border-gray-500">
                {t('vehicle')}
                </th>
                <th scope="col" className="py-3 px-6 border border-gray-500">
                {t('departure')}
                </th>
                <th scope="col" className="py-3 px-6 border border-gray-500">
                {t('arrival')}
                </th>
                <th scope="col" className="py-3  border border-gray-500">
                {t('Round')}
                </th>
                <th scope="col" className="py-3 px-1 border border-gray-500">
                {t('purchase')}
                </th>
                <th scope="col" className="py-3 px-2  border border-gray-500">
                {t('price')}
                </th>
                <th scope="col" className="px-1 py-3 border border-gray-500">
                {t('delete')}
                </th>
             
            </tr>
        </thead>
        <tbody>
         {tableData.map((data,i)=>(
            <tr className="bg-white" key={i}>
                <td className="px-2 py-1  border border-gray-400 text-xs">{data.visitDate}</td>
                <td className="px-2  border border-gray-400 text-xs">{data.visitLocation}</td>
                <td className="px-2  border border-gray-400 text-xs">{data.transportation}</td>
                <td className="px-2  border border-gray-400 text-xs">{data.departure}</td>
                <td className="px-2  border border-gray-400 text-xs">{data.destination}</td>
                <td className="px-2  border border-gray-400 text-xs">{data.isRoundTrip?t('2way'):t('1way')}</td>
                <td className="px-2  border border-gray-400 text-xs">{data.payMethod==='1'?t('IC'):t('cash')}</td>
                <td className="px-2  border border-gray-400 text-xs">{data.fee}</td>
                <td className="px-2  border border-gray-400 text-xs">delete</td>
            </tr>
         ))}

         {renderTable()} 
       
        </tbody>
    </table>
</div>


    </div>
 )
}

export default memo(Table);