import { useLocation, Navigate  } from "react-router";
import { useSelector  } from "react-redux";
import { selectCurrentToken } from "./authSlice";

const RequireAuth = () => {
    const token = useSelector(selectCurrentToken)
    const location = useLocation()

    return (
        token
        ? <></> 
        : <Navigate to="/login" state={{from: location}} replace/>
    )
}

export default RequireAuth