type ContentItem = {
    id: number;
    name: string;
};

export type ContentType = {
    [category: string]: ContentItem[];
};
