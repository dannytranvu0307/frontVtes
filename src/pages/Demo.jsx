import { useState, useEffect } from 'react';
import ExportExcel from '../functional/ExportExcel';

function App() {
    // conver imt to base64 
    const [base64IMG, setBase64IMG] = useState();
    
    //lst options after add the options to export
    const [exportOptions, setExportOptions] = useState([]);

    //lst evidences after add the img to export
    const [evidences, setEvidences] = useState([]);

    // preview current item be choosed
    const [item, setItem] = useState(null);

    // preview current evidence for item
    const [previewItemImg, setPreviewItemImg] = useState(null);

    // fake data
    const user = {
        fullname: "LE HOANG PHUC",
        department: "G1"
    }
  
    // conver img to base64 functional
    const convertToBase64 = (files) => {
        const reader = new FileReader()
        reader.readAsDataURL(files)
        reader.onload = () => {
            setBase64IMG(reader.result)
        }
    }

    // handle render current option after addition of item
    const handleAddOption = (i) =>{
        setItem(i);
    };

    // handle export excel file 
    const handleExport = (user, exportOptions, evidences) => {
        ExportExcel({user, exportOptions, evidences})
    }

    // preview the img after choose
    const handlePreviewEvi = (e) => {
        const files = e.target.files[0]
        files.preview = URL.createObjectURL(files)
        convertToBase64(files)
    }

    //handle add options to export 
    const handleAddOptionToExport = () => {
        console.log((previewItemImg) === null)
        if (!(previewItemImg || item) === null){
            console.log("o day")
        }else{
            setExportOptions(prev => [
                ...prev,item
            ]);
            setEvidences((prev) => 
            [ ...prev,base64IMG ]
            );
            setItem(null);
            setPreviewItemImg(null)
        }
    }
    const handle = (e) => {
        console.log(e.target.files[0])
    }

    // fake options
    const options = [{
                date: "yesterday",
                destination:"fujitsu asd asd asd asdasd asd sad asda sdas das dasd asdas das dsad as",
                transportation:"電車",
                start:"東京駅",
                end:"品川駅",
                one_round:"往復",
                cost:2300,
            },{
                date:"today",
                destination:"Hitachi",
                transportation:"電車",
                start:"東京駅",
                end:"品川駅",
                one_round:"往復",
                cost:2300,
            }];

    // clear the url after preview 
    useEffect(()=>{

        return () => URL.revokeObjectURL(previewItemImg)
    },[evidences])

    return (
        <>
        <h1>choose ops plz</h1>
        <ul>
        {
            options.map((key,i)=>(
                <li style={{color:"#000", cursor:"pointer"}} key={i} onClick={()=>handleAddOption(key)}>{key.date}, {key.destination}, {key.transportation}, {key.start},
                {key.end}, {key.one_round}, {key.cost}</li>
            ))
        }
        </ul>

        <br/>
        <h1>My choose</h1>
        <input type="file" onChange={e=>handle(e)}/>
        
        {
        item &&  
        (
            <div >
            {item.date}, {item.destination}, {item.transportation}, {item.start},
            {item.end}, {item.one_round}, {item.cost}
            <input type="file" required accept='.jpg, .png|image/*' multiple style={{marginLeft: "20px"}} placeholder='img' onChange={handlePreviewEvi}/>
            {
                previewItemImg && 
                (<img style={{marginLeft: "20px"}} src={previewItemImg.preview} width="80px"/>)
            }
            <button style={{backgroundColor: "red"}} onClick={()=>handleAddOptionToExport()}>Add</button>
            </div> 
        )
        }
        <h1>To export</h1>
        <ul>
        {
            exportOptions &&  exportOptions.map((item,i)=>(
            <li key={i}>
            {item.date}, {item.destination}, {item.transportation}, {item.start},
            {item.end}, {item.one_round}, {item.cost}
            {
                evidences && 
                (<img style={{marginLeft: "20px"}} src={evidences[i]} width="80px"/>)
            }
            </li>
            ))
        }
        </ul>
        <button onClick={()=>handleExport(user,exportOptions,evidences)}>Export</button>
        </>
    );
    }

export default App;