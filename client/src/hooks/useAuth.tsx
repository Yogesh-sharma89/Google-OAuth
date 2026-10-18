import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getProfile, logout } from "../api/auth"

export const useGetProfile = ()=>{

    return useQuery({
        queryKey:['profile'],
        queryFn:getProfile,

        staleTime:5*60*1000,
        gcTime:10*60*1000,

        refetchOnWindowFocus:false,
        retry:false
    })
}

export const useLogout = ()=>{

    const queryClient = useQueryClient();

    return useMutation({
        mutationKey:["logout"],
        mutationFn:logout,

        onSuccess:()=>{
            queryClient.invalidateQueries({
                queryKey:["profile"]
            })
        }
    })
}