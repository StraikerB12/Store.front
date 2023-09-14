export interface Tag {
    id: number;
    name?: string;
    color: string;
    img?: string;
}

export interface Post {
    id: number;
    source: string;
    channel_name: string;
    channel_img?: string;
    name?: string;
    create_date: string;
    tags?: Tag[]
}


