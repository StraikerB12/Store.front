import { reactive } from 'vue'
import { useGetDataKeys } from '@/api/getDataKeys'
import { DataKeys } from "@/types/Keys";
import _ from "lodash";

export const dataKeys = reactive<DataKeys>({
    "VK": {
        id: null,
        secretKey: null,
        serviceKey: null,
        isEnterForm: false,
        isAuth: false,
        timeKey: null
    },
    "TG": {
        id: null,
        isEnterForm: false,
        isAuth: false,
        timeKey: null
    }
})

export function checkKeysTimes() {
    const now = (new Date()).getTime()

    for (const item in dataKeys){
        const timeKey = dataKeys[item as keyof DataKeys].timeKey

        if(!timeKey) continue
        const timeItem = (new Date(timeKey)).getTime()
        dataKeys[item as keyof DataKeys].isAuth = timeItem > now
    }
}

export async function getDataKeys() {
    const data = await useGetDataKeys()
    _.assignIn(dataKeys ,data)

    for (const item in dataKeys){
        const value = dataKeys[item as keyof DataKeys].id !== null
        dataKeys[item as keyof DataKeys].isEnterForm = value
    }
}