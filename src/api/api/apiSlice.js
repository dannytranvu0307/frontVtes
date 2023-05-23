import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1/auth',
    credentials: "include",
    prepareHeaders: (headers ,{ getState }) => {
        const token = getState().auth.token
        if (token){
            headers.set("Authorization",`Bearer ${token}` )
        }
        return headers
    }
})

const baseQueryTryToReauth = async (args, api, extraOptions)=>{
    let result = await baseQuery(args, api, extraOptions)
    console.log(result)
    if (result?.error?.originalStatus === 403){
        console.log("sending refresh token")
        // afteer send refresh token we can get new access toekn
        const refreshResult = await baseQuery('/refresh-token', api, extraOptions)

        console.log(refreshResult)
        if (refreshResult?.data){
            const user = api.getState().auth.user
            // store the new token
            api.dispatch(setCredentials({...refreshResult.data,user}))

            // retry the original query with new access token
            result = await baseQuery(args, api, extraOptions)
        }
        else{
            api.dispatch(logOut())
        }
    }
    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryTryToReauth, 
    endpoints: builder => ({

    })
})