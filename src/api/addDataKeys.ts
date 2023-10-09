import { useMutation } from '@vue/apollo-composable'
import { ApolloError } from '@apollo/client'
import { addDataKeys } from '@/graphql/querys'

// interface ResponseDataKeys {
//     type: string;
//     data?: string;
//     error?: string;
// }

export function useAddDataKeys(type: string, data: string) {
    const { mutate, onDone, onError } = useMutation( addDataKeys ) // loading

    return new Promise(function(resolve, reject) {
        mutate({ type, data })
        onDone(result => { resolve(result) })
        onError(error => { 
            // console.log(error.graphQLErrors)
            reject(new ApolloError(error)) 
        })
    })
}