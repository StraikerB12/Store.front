export interface ResponseDataKeys {
    data: string;
    type: string;
    __typename: string;
}

export interface DataKeys {
    VK?: KeyVK;
    TG?: KeyTG;
}

export interface KeyVK {
    id: string;
    secretKey: string;
    serviceKey: string;
}

export interface KeyTG {
    id: string;
}