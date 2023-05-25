
import { useEffect, useState } from 'react';
import HeaderInput from '../components/HomepageComponent/HeaderInput';
import SearchBus from '../components/HomepageComponent/SearchBus';
import SearchTrain from '../components/HomepageComponent/SearchTrain';
import HomeUserData from '../components/HomepageComponent/HomeUserData';
import HomeFooter from '../components/HomepageComponent/HomeFooter1';
import Table from '../components/HomepageComponent/Table';
import HomeFooter2 from '../components/HomepageComponent/HomeFooter2';
import PreviewImage from '../components/HomepageComponent/PreviewImage';
function Home() {

    const [data,setData] =useState({date:"",vehicle:"train",Destination:"", price:"" , round:"",departure:"",arrival:"", payment:""});
    const [TableData,setTableData]= useState([])
    const [image, setImage] =useState([]);
    const [imageURL, setImageURL] =useState([]);

    
    const handleDateChange = (newData) => {
      setData({ ...data,date:newData});
    };
    const handleVehicleChange = (option) => {
        setData({ ...data,vehicle:option});
      };
      const handlePayment = (option) => {
        setData({ ...data,payment:option});
      };

      const handleRound = (option) => {
        setData({ ...data,round:option});
      };

      const handleDestination= (option) => {
        setData({ ...data,Destination:option});

      };

      const handleFileChange = (file) => {
      
          setImage([...image,...file])

          const urls =[]

          for(let i=0; i<file.length;i++){
            urls.push({name:file[i].name,fileURL:URL.createObjectURL(file[i])})
          }
          setImageURL([...imageURL,...urls])
      
      };

      const handleDeleteImage= (index)=>{
       setImageURL(imageURL.filter((_, i) => i !== index))
       }

      const handleAddTable=()=>{
        setTableData(prev =>[...prev,data])
      }

  console.log(TableData)


    return (
        <div className="w-full h-full bg-[#F9FAFB] flex grow">
          <div className='flex  sm:flex-col md:flex-row h-full  mb-auto'>  
             <div className='flex flex-col basis-1/3 border-r-2 border-gray-500 px-3 h-full '>
              <div className='flex '>
                <HeaderInput onDateChange={handleDateChange} data ={data} 
                             onVehiclechange={handleVehicleChange} 
                             onPayment ={handlePayment} 
                             onRound ={handleRound } 
                             onDestination ={handleDestination} 
                 /> </div>
              <div className='flex'> {data.vehicle==="train"&&<SearchTrain />}
                                     {data.vehicle==="bus"&&<SearchBus />}
                                     {data.vehicle==="taxi"&&<SearchBus />}
               </div>
              <div className='flex mt-auto pb-5'><HomeFooter onAdd={handleAddTable}/></div>
             </div>



             <div className='pl-5 basis-2/3 h-full'>
              <div className='flex flex-col h-full'>
                <div className='flex'><HomeUserData /></div>
                <div className=''> <Table tableData={TableData}/></div>
                <div className='border-dotted border border-gray-400 w-[90%] my-2 h-[30%]'><PreviewImage image={imageURL} onDelete ={handleDeleteImage}/></div>
                <div className='flex mt-auto pb-5' ><HomeFooter2 onFileChange={handleFileChange}/></div>
              </div>
               
             </div>



          </div>
        </div>
)
}
export default Home