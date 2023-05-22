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
        <div className="flex flex-col items-center mb-16 py-8 h-full md:h-full lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:w-full h-full xl:p-0">
                <div className="flex flex-col  h-full">
                    <h1 className="text-xl pt-4 px-12 sm:px-12 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        {t("lbviewExportFileHistory")}
                    </h1>
                    {/* <span className="flex w-full justify-center text-gray-500 mt-4">{t("lbviewExportFileHistoryEmpty")}</span>
                     */}
                    {/* <div className="table-wrp block max-h-96 mt-4">
                        <table className="w-full">
                            <thead className="bg-white border-b sticky top-0">
                                <tr className="border border-borderTable">
                                    <th className="border border-borderTable w-1/5">{t("lbDate")}</th>
                                    <th className="border border-borderTable">{t("lbFileName")}</th>
                                </tr>
                            </thead>
                            <tbody className="h-96 overflow-y-auto">
                                {files.map((file, key) => (
                                    <tr className="border" key={key}>
                                        <td className="border px-2 border-borderTable">{file.uploadedTime}</td>
                                        <td className="px-2"><a target="_blank" href={file.fileURI}>{file.fileName}</a></td>
                                    </tr>))}
                            </tbody>
                        </table>
                    </div> */}
                    <div className="py-12">
                        <div className="max-w-7xl mx-auto">
                            <div className="bg-white overflow-hidden">
                                <div className="item mb-2 md:flex md:flex-wrap md:justify-between">
                                    <div className="container w-full">
                                        <div className="flex flex-col">
                                            <div className="overflow-x-hidden">
                                                <div className=" inline-block w-full sm:px-6 lg:px-8">
                                                    <div className="table-wrp block max-h-96">
                                                        <table className="border w-full">
                                                            <thead className="bg-gray-300 border sticky top-0">
                                                                <tr>
                                                                    <th scope="col" className="text-md text-center border w-1/5 font-medium text-gray-900 px-6 py-4 text-left">
                                                                        {t("lbDate")}
                                                                    </th>
                                                                    <th scope="col" className="text-md text-center border font-medium text-gray-900 px-6 py-4 text-left">
                                                                        {t("lbFileName")}
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="border h-96 overflow-y-auto">
                                                                {files.map((file, key) => (
                                                                    <tr className="bg-white border transition duration-300 ease-in-out hover:bg-gray-100" key={key}>
                                                                        <td className="text-sm border font-extrabold border-borderTable font-light px-6 py-4 whitespace-nowrap">{file.uploadedTime}</td>
                                                                        <td className="text-sm text-blue-700 underline px-6 py-4 whitespace-nowrap underline-offset-4"><a target="_blank" href={file.fileURI}>{file.fileName}</a></td>
                                                                    </tr>))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
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