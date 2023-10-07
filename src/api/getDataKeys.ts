import { useQuery } from '@vue/apollo-composable'
import { ApolloError } from '@apollo/client'
import { getDataKeys } from '@/graphql/querys'
import { DataKeys } from "@/types/Keys"

interface ResponseDataKeys {
    data: string;
    type: string;
    __typename: string;
}

export function useGetDataKeys() {
    return new Promise(function(resolve, reject) {
        const { onResult, onError } = useQuery( getDataKeys )

        onResult(result => {
            if(!result.loading){
                const data: ResponseDataKeys[] = result.data.getKeys;
                const dataKeys = data.reduce<DataKeys>((acc, value) => {
                    acc[value.type as keyof DataKeys] = JSON.parse(value.data)
                    return acc
                }, {} as DataKeys)

                resolve(dataKeys)
            }
        })
    
        onError(error => {
            reject(new ApolloError(error))
        })
    })
}