import { useSelector, useDispatch } from "react-redux";
import { verify, selectIsActive, selectError } from "../features/auth/loginSlice";
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const VerifyCode = () => {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const error = useSelector(selectError)
    const dispatch = useDispatch()
    const param = useParams ('verifyCode')
    
    useEffect(()=>{
        dispatch(verify(param))
        .unwrap().then((res)=>{
            console.log(res)
            navigate("/login")
        })
    },[])
    // npm install --save-dev vite-plugin-rewrite-all
    return <>{t(error)}
        <Link to="/login">{t("back")}</Link></>
}
export default VerifyCode