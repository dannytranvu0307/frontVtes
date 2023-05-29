
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderInput from '../components/HomepageComponent/HeaderInput';
import SearchBus from '../components/HomepageComponent/SearchBus';
import SearchTrain from '../components/HomepageComponent/SearchTrain';
import HomeUserData from '../components/HomepageComponent/HomeUserData';
import HomeFooter from '../components/HomepageComponent/HomeFooter1';
import Table from '../components/HomepageComponent/Table';
import HomeFooter2 from '../components/HomepageComponent/HomeFooter2';
import PreviewImage from '../components/HomepageComponent/PreviewImage';
import SearchResult from '../components/HomepageComponent/SearchResult';
import { useSelector } from 'react-redux';
import axios from 'axios';
function Home() {
   const { t } = useTranslation();
    const [data,setData] =useState({date:"",vehicle:t('train'), Destination:"", price:"" , round:t('1way'),departure:"",arrival:"", payment:"" ,transport:""});
    const [error,setError]=useState({date:false ,payment:false,Destination:false,departure:false,arrival:false , price:false})
    const [TableData,setTableData]= useState([])
    const [image, setImage] =useState([]);
    const [imageURL, setImageURL] =useState([]);
    const [searching , setSearching] = useState([])
    const  user= useSelector(state =>state.login.user)
     useEffect(()=>{
      if(user){
        setTableData(user.fares)
      }

     },[TableData])




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
        setData({ ...data, Destination:option});

      };
      const handleDeparture =(option) => {
        setData({ ...data,departure:option});

      };
      const handleArrial = (option) => {
        setData({ ...data,arrival:option});

      };  
      const handleTransport= (option) => {
        setData({ ...data,transport:option});
      };
      const handlePrice= (option) => {
        setData({ ...data,price:option});
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
       setImageURL(imageURL.filter((_, i) => i!== index))
       setImage(image.filter((_ , i) => i!== index))
       URL.revokeObjectURL(image[index])
       console.log(URL)
       }

       
       const handleValidation = () => {
        if(data.vehicle===t('train')){
          const { date, Destination, departure, arrival, payment , price} = data;
          const updatedError = {
          date: date === "",
          Destination: Destination === "",
          departure: departure === "",
          arrival: arrival === "",
          payment: payment === "",
          price: price ===""
        };
        setError(updatedError);
        if(Object.values(updatedError).every((value)=> value===false)){

          const form = {
             visitLocation: data.Destination,
             departure:data.departure,
             destination: data.arrival,
             payMethod: data.payment===t('IC')?"1":"2",
             useCommuterPass: true,
             isRoundTrip: true,
             fee: 2000,
             transportation: "電車",
             visitDate: "2023/04/06"
          }


          axios.post('http://localhost:8080/api/v1/fares', form, {
            withCredentials: true,
          })
            .then(response => {
              // Handle the response
              console.log(response.data);
            })
            .catch(error => {
              // Handle errors
              console.error(error);
            });

          









          setData({date:"",vehicle:t('train'), Destination:"", price:"" , round:t('1way'),departure:"",arrival:"", payment:"" ,transport:""})
          setSearching([])
        }else{
          console.log("dame")
        }
      }else{
        const { date, Destination, departure, arrival,price} = data;
        const updatedError = {
          date: date === "",
          Destination: Destination === "",
          departure: departure === "",
          arrival: arrival === "",
          price: price ===""
        };
        setError(updatedError);
        if(Object.values(updatedError).every((value)=> value===false)){
          setTableData((prev)=>[...prev,{...data,payment:t('cash')}])
        }else{
          console.log("dame")
        }
      }

        }
       

      const handleAddTable=()=>{
        handleValidation()
      
      }



useEffect(()=>{
return () => imageURL.forEach((url)=>{
    URL.revokeObjectURL(url)
  })
},[])

    return (
        <div className="w-full h-full bg-[#F9FAFB] ">
          
         
          <div className='flex  sm:flex-col md:flex-row h-full  mb-auto'>  
             <div className='flex flex-col basis-1/3 border-r-2 border-gray-500 px-3 h-full '>
              <div className='flex '>
                <HeaderInput onDateChange={handleDateChange} data ={data} 
                             onVehiclechange={handleVehicleChange} 
                             onPayment ={handlePayment} 
                             onRound ={handleRound } 
                             onDestination ={handleDestination} 
                             error={error}
                             setError={setError}
                 /> </div>
              <div className='flex'>
                 {data.vehicle===t('train')&&<SearchTrain 
                
                 onSearching={setSearching} onDepart ={handleDeparture} onArrival={handleArrial} onTransport ={handleTransport} data={data} error ={error} setError={setError}/>}
                 {data.vehicle===t('bus')&&<SearchBus onDepart ={handleDeparture} onArrival={handleArrial} data={data} error ={error} setError={setError}/>}
                 {data.vehicle===t('taxi')&&<SearchBus onDepart ={handleDeparture} onArrival={handleArrial} data={data } error ={error} setError={setError}/>}
               </div>
               <SearchResult search={searching} data={data} onPrice={handlePrice} />
              <div className='flex mt-auto pb-[150px]'><HomeFooter onPrice={handlePrice} data ={data} onAdd={handleAddTable} error ={error} setError={setError}/></div>
             </div>



             <div className='pl-5 w-full flex-1 h-full'>
              <div className='flex flex-col h-full'>
                <div className='flex'><HomeUserData /></div>
                <div className=''> <Table tableData={TableData}/></div>
                <div className='border-dotted border border-gray-400 w-[90%] my-2 h-[30%]'><PreviewImage image={imageURL} onDelete ={handleDeleteImage}/></div>
                <div className='flex mt-auto pb-[150px]' ><HomeFooter2 onFileChange={handleFileChange}/></div>
              </div>
               
             </div>



         
          </div>
        </div>
)
}
export default Home