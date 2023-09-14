import { ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { getDataKeys } from '@/graphql/querys'

export const dataKeys = ref({})

export function loadDataKeys() {
    const { onResult, onError } = useQuery( getDataKeys )

    onResult(result => {
        
        console.log(result.data)
    })

    onError(error => {
        console.error(error)
    })
}