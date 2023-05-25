import { useSelector, useDispatch } from "react-redux";
import { verify, selectIsActive, selectError } from "../features/auth/loginSlice";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const VerifyCode = () => {
    const {t} = useTranslation()
    const isActive = useSelector(selectIsActive)
    const error = useSelector(selectError)
    const dispatch = useDispatch()
    const param = useParams ()
    useEffect(()=>{
        dispatch(verify(param)).unwrap().then()
    },[])
    return <>{t(error)}
        <Link to="/login">{t("back")}</Link></>
}
export default VerifyCode