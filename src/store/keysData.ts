import { ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { getDataKeys } from '@/graphql/querys'
import { ResponseDataKeys, DataKeys } from "@/types/Keys";

export const dataKeys = ref<DataKeys>({})

export function loadDataKeys() {
    const { onResult, onError } = useQuery( getDataKeys )

    onResult(result => {
        if(!result.loading){
            const data: ResponseDataKeys[] = result.data.getKeys;
            dataKeys.value = data.reduce<DataKeys>((acc, value) => {
                acc[value.type as keyof DataKeys] = JSON.parse(value.data)
                return acc;
            }, {});
        }
    })

    onError(error => {
        console.error(error)
    })
}