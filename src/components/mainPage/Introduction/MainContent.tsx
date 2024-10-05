import { SectionType } from "@/components/mainPage/Introduction/data";


export const MainContent = ({sections} : {sections: SectionType[]}) => {
    return (
        <div className={"w-5/6 z-10"}>
            {sections.map((section) => (
                <section
                    key={section.id}
                    id={section.id}
                    className={"h-auto max-w-[70%]"}
                >
                    {section.content}
                </section>
            ))}
        </div>
    );
};
