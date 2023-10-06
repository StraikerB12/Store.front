import { reactive } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { getDataKeys } from '@/graphql/querys'
import { ResponseDataKeys, DataKeys } from "@/types/Keys";
import { Time } from "@/authorizationSocial/useTimeKeys"

import _ from "lodash";

export let dataKeys = reactive<DataKeys>({
    "VK": {
        id: '',
        secretKey: '',
        serviceKey: '',
        isAuth: false,
        timeKey: null
    },
    "TG": {
        id: '',
        isAuth: false,
        timeKey: null
    }
})

export function getTimes(): Time {
    const times = {} as Time

    for (const item in dataKeys){
        const timeKey = dataKeys[item as keyof DataKeys].timeKey
        if(!timeKey) continue
        times[item as keyof DataKeys] = timeKey
    }

    return times
}

export function loadDataKeys() {
    const { onResult, onError } = useQuery( getDataKeys )

    onResult(result => {
        if(!result.loading){
            const data: ResponseDataKeys[] = result.data.getKeys;

            dataKeys = data.reduce<DataKeys>((acc, value) => {
                const item = _.assignIn(acc[value.type as keyof DataKeys], JSON.parse(value.data))
                acc[value.type as keyof DataKeys] = item
                return acc;
            }, dataKeys);
        }
    })

    onError(error => {
        console.error(error)
    })
}