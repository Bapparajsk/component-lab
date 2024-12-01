export interface Type {
    id: string;
    userId: string;
    developerName: string;
    title: string;
    description?: string;
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
