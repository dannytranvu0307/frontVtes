import { apiSlice } from "../../api/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/signin',
                method: "post",
                body: {...credentials} 
            })
        }),
    })
})

export const {
    useLoginMutation
} = authApiSlice