export interface ResponseDataKeys {
    data: string;
    type: string;
    __typename: string;
}


// 2022-05-25 09:00:00
export type DateType = `${string}-${string}-${string} ${string}:${string}:${string}`

export interface InfoKeys {
    isAuth: boolean;
    timeKey: DateType | null;
}

export interface DataKeys{
    VK: KeyVK;
    TG: KeyTG;
}

export interface KeyVK extends InfoKeys {
    id: string;
    secretKey: string;
    serviceKey: string;
}

export interface KeyTG extends InfoKeys {
    id: string;
}