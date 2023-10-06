import { DataKeys, DateType } from "@/types/Keys";

export type Time = Record<keyof DataKeys, DateType>
export type TimeRezult = Record<keyof DataKeys, boolean>

export function useTimeKeys(times: Time) {
    const timeRezult: TimeRezult = {} as TimeRezult
    const now = (new Date()).getTime()

    for (const time in times){
        const key = time as keyof DataKeys
        const timeItem = (new Date( times[key])).getTime()

        timeRezult[key] = timeItem > now
    }

    return timeRezult;
}


//     if (obj.hasOwnProperty(key)) {}
