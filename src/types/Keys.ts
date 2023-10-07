
// 2022-05-25 09:00:00
export type DateType = `${string}-${string}-${string} ${string}:${string}:${string}`

export interface InfoKeys {
    isEnterForm: boolean;
    isAuth: boolean;
    timeKey: DateType | null;
}

export interface DataKeys{
    VK: KeyVK;
    TG: KeyTG;
}

export interface KeyVK extends InfoKeys {
    id: string | null;
    secretKey: string | null;
    serviceKey: string | null;
}

export interface KeyTG extends InfoKeys {
    id: string | null;
}