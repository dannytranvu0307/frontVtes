export default function(workbook,evidences){
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
}