import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom"
function History() {
    const { t } = useTranslation();

    const files = [
        {
            fileName: "aaaa",
            fileURI: "交通費精算書_PHUCLH_4月分",
            uploadedTime: "2023年10月03日"
        },
        {
            fileName: "bbbb",
            fileURI: "交通費精算書_PHUCLH_3月分",
            uploadedTime: "2023年10月04日"
        },
        {
            fileName: "ccc",
            fileURI: "交通費精算書_PHUCLH_2月分",
            uploadedTime: "2023年10月05日"
        },
        {
            fileName: "aaaa",
            fileURI: "交通費精算書_PHUCLH_4月分",
            uploadedTime: "2023年10月03日"
        },
        {
            fileName: "bbbb",
            fileURI: "交通費精算書_PHUCLH_3月分",
            uploadedTime: "2023年10月04日"
        },
        {
            fileName: "ccc",
            fileURI: "交通費精算書_PHUCLH_2月分",
            uploadedTime: "2023年10月05日"
        },
        {
            fileName: "交通費精算書_NGUYEN_NGUYEN_NGUYEN_NGUYEN_4月分.xlxs",
            fileURI: "交通費精算書_NGUYEN_NGUYEN_NGUYEN_NGUYEN_4月分.xlxs",
            uploadedTime: "2023年10月03日"
        },
        {
            fileName: "bbbb",
            fileURI: "交通費精算書_PHUCLH_3月分",
            uploadedTime: "2023年10月04日"
        },
        {
            fileName: "ccc asd asd asdasdas das das das das das dasd asd as asdas das das das dasd asd asd asd asd asd asdas dasd asd as dasd sad asd sdf sdf sdf sdfsd fsdf ds",
            fileURI: "交通費精算書_PHUCLH_2月分",
            uploadedTime: "2023年10月05日"
        },
        {
            fileName: "aaaa",
            fileURI: "交通費精算書_PHUCLH_4月分",
            uploadedTime: "2023年10月03日"
        },
        {
            fileName: "bbbb",
            fileURI: "交通費精算書_PHUCLH_3月分",
            uploadedTime: "2023年10月04日"
        },
        {
            fileName: "ccc",
            fileURI: "交通費精算書_PHUCLH_2月分",
            uploadedTime: "2023年10月05日"
        }
    ]
    return (
        <div className="flex flex-col mx-auto items-center -sm:py-4 sm:px-6 mb-16 py-8 h-full xl:w-3/5 lg:w-3/5 sm:w-full md:w-full lg:py-0">
            <div className="bg-white rounded-lg shadow md:mt-0 sm:w-full h-full xl:p-0">
                <div className="flex flex-col  h-full">
                    <h1 className="text-xl pt-8 px-12 sm:px-12 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        {t("lbviewExportFileHistory")}
                    </h1>
                    <div className="xl:py-8 xl:px-8 sm:py-1 sm:px-1 md:py-8 md:px-8">
                        <div className="mx-auto">
                            <div className="bg-white overflow-hidden">
                                <div className="item mb-2 md:flex md:flex-wrap md:justify-between">
                                    <div className="container">
                                        {/* <div className="flex flex-col"> */}
                                            <div className="overflow-x-hidden">
                                                <div className="border-borderTable-borderTable">
                                                    <div className="table-wrp  max-h-[420px]">
                                                        <table className="border table-fixed w-full border-borderTable-borderTable">
                                                            <thead className="bg-gray-300 border sticky top-0">
                                                                <tr>
                                                                    <th  className="text-md w-1/4 text-center border border-borderTable-borderTable font-medium text-gray-900 px-6 py-2 text-left">
                                                                        {t("lbDate")}
                                                                    </th>
                                                                    <th  className="text-md text-center border border-borderTable-borderTable   font-medium text-gray-900 px-6 py-2 text-left">
                                                                        {t("lbFileName")}
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="border w-1/5 h-96 ">
                                                                {files.map((file, key) => (
                                                                    <tr className="bg-white border  border-borderTable-borderTable transition duration-300 ease-in-out hover:bg-gray-100" key={key}>
                                                                        <td className="text-sm border font-extrabold border-borderTable-borderTable font-light px-6 py-2 whitespace-nowrap">{file.uploadedTime}</td>
                                                                        <td className="text-sm text-blue-700 underline px-6 py-2 whitespace-nowrap underline-offset-4"><a target="_blank" href={file.fileURI}>{file.fileName}</a></td>
                                                                    </tr>))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>     
                            </div>
                        </div>
                    </div>



                    <Link className="flex
                        justify-center
                        mt-auto
                        "
                        to="/"
                    >
                        <button
                            className="w-auto
                            text-white
                            bg-primary-600
                            hover:bg-primary-500
                            focus:ring-4 focus:outline-none 
                            focus:ring-primary-300 font-medium rounded-lg 
                            text-sm px-5 py-2.5 text-center mb-4">
                        
                            {t("btnToHome")}</button></Link>
                </div>
            </div>
        </div>
    )
}
export default History