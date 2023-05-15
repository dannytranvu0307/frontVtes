import ExcelJS from 'exceljs';
import FormatDate from './FormatDate';
// import Worksheet from './Worksheet';
import WorksheetImg from './WorksheetImg';
import Worksheet from './Worksheet';
const ExportExcel = (props) =>{

    "_USERNAME_20230511"
    
    // phân tách các props thành các const
    const {user, exportOptions, evidences} = {...props}
    // khởi tạo file excel 
    const workbook = new ExcelJS.Workbook();

    // dùng để tạo sheet 交通費精算書
    Worksheet(workbook, user,exportOptions)

    // dùng để tạo sheet 添付証憑
    WorksheetImg(workbook, evidences)
        
    // Dùng để export ra file excel theo kiểu buffter bằng cách fake url tạm thời
    workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer],{
            type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    })

    // tạo url
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "交通費精算書.xlsx";
    anchor.click();
    // xóa url
    window.URL.revokeObjectURL(url);
    });
                    
}

export default ExportExcel;