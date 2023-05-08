import ExcelJS from 'exceljs';
import FormatDate from './FormatDate';
const ExportExcel = (props) =>{
    
    const {user, exportOptions, evidences} = {...props}

    const toDay = new Date();

    const handleTotalCost = () => {
        const total = exportOptions.reduce((i,next)=>{
            return i + next.cost
        },0)
        return total
    }

    const middle = { vertical: 'middle', horizontal: 'center' };
    const vertical_middle = { vertical: 'middle'};
    const middle_right = { vertical: 'middle' , horizontal: 'right' };

    const cell_ = [
                { position:"A3", header: '申請日', key: 'req_date'},
                { position:"A4", header: '部署名', key: 'deparment' },
                { position:"D4", header: '氏名', key: 'fullname' },
                { position:"A6", header: '日付', key: 'date' },
                { position:"B6", header: '訪問先', key: 'destination' },
                {  position:"C6", header: '交通機関', key: 'transportation' }, 
                {  position:"D6", header: '出発地', key: 'start' },
                {  position:"E6", header: '到着地', key: 'end' },
                {  position:"F6", header: '片/往', key: 'one_round' }, 
                {  position:"G6", header: '金額', key: 'cost' },
            ];

            const border_cel = {
                            top: {style:'thin'},
                            left: {style:'thin'},
                            bottom: {style:'thin'},
                            right: {style:'thin'}
                        }
    // const options = {
    //     filename: './streamed-workbook.xlsx',
    //     useStyles: true,
    //     useSharedStrings: true
    // };
    const workbook = new ExcelJS.Workbook();

    const worksheet =  workbook.addWorksheet('交通費精算書', {
        pageSetup:{paperSize: 9, orientation:'landscape'}
    });

    // define column for sheet
    worksheet.columns = [
        { header: '日付', key: 'date' },
        {  header: '訪問先', key: 'destination',width: 15  },
        {  header: '交通機関', key: 'transportation' }, 
        {  header: '出発地', key: 'start' },
        {  header: '到着地', key: 'end' },
        {  header: '片/往', key: 'one_round' }, 
        {  header: '金額', key: 'cost' }
    ];

    
    // default merge column
    worksheet.mergeCells('A1', 'G1');
    worksheet.mergeCells('B3', 'C3');
    worksheet.mergeCells('B4', 'C4');
    worksheet.mergeCells('E4', 'G4'); 
    
    // header for sheet
    const HEADER_TITLE =  worksheet.getCell('A1');
    HEADER_TITLE.value = "交通費精算書";

    // header style
    HEADER_TITLE.alignment = middle
    HEADER_TITLE.font = 
        {   bold: true, size: 15  };

    // add empty row
    worksheet.addRow([]);
   

    // Infomation row
    worksheet.getCell('A3').value = "申請日";

    const b3_cell = worksheet.getCell('B3')
    b3_cell.border = border_cel;      
    b3_cell.value = FormatDate(toDay,"YYYY年MM月DD日");
    b3_cell.alignment =middle_right;

    worksheet.getCell('A4').value = "部署名";

    const b4_cell =  worksheet.getCell('B4')
    b4_cell.value = user.department
    b4_cell.border = border_cel;
    b4_cell.alignment = middle_right;

    worksheet.getCell('D4').value = "氏名";
    const e4_cell =  worksheet.getCell('E4')
    e4_cell.value = user.fullname
    e4_cell.border = border_cel;
    e4_cell.alignment =  middle_right;

    // add empty row
    worksheet.addRow([]);

    cell_.map((key) => {
        worksheet.getCell(key.position).border = border_cel;
        worksheet.getCell(key.position).alignment = vertical_middle;
        worksheet.getCell(key.position).value = key.header
        worksheet.getCell(key.position).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'ffddebf7' },
            bgColor: { argb: 'ffddebf7' }
                        }
    });

    exportOptions.map(item=>{
        let row = worksheet.addRow(item);
        row.alignment = vertical_middle;
        row.eachCell({ includeEmpty: true }, function(cell, colNumber) {
            worksheet.getCell(cell.address).border = border_cel;
        })
    });
    

    // Total row
    worksheet.mergeCells(`A${exportOptions.length + 7}`,`F${exportOptions.length + 7}`) //merge cells

    // cost title
    const cost_title = worksheet.getCell(`A${exportOptions.length + 7}`)
    cost_title.border = border_cel
    cost_title.value = "合計";
    cost_title.alignment = middle

    // cost
    const cost = worksheet.getCell(`G${exportOptions.length + 7}`);
    cost.value = handleTotalCost();
    cost.border = border_cel 
    cost.alignment = vertical_middle

    worksheet.eachRow({ includeEmpty: false }, function(row, rowNumber) {
       row.height = 29.2
    });

    const worksheet2 =  workbook.addWorksheet('添付証憑', {
        pageSetup:{paperSize: 12, orientation:'landscape'}
    });
     evidences.map( async (evidence,i) => {
         let img = workbook.addImage({
             base64: evidence,
             extension: 'png',
            });
            worksheet2.addImage(img,`A${i*30+1}:G${(i+1)*30}`)
        })
        
        // export data to excel
        console.log("a")
        workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer],{
            type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        })

        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "交通費精算書.xlsx";
        anchor.click();
        window.URL.revokeObjectURL(url);
    });
                    
}

export default ExportExcel;