export interface Type {
    id: number;
    userId: string;
    developerName: string;
    title: string;
    discription?: string;
    tag: Set<string>;
    flags: Set<string>;
    mainCode: () => JSX.Element;
    flag?: string;
    useGiler: {
        exampleCode: string;
        dependencies?: string;
        utils?: boolean;
        tailwind?: {
            code: string;
            highlightLines: number[];
        },
        source?: {
            code: string;
            fileName: string;
        }
    };
};
