import { SectionType } from "@/components/mainPage/Introduction/data";

export const Sidebar = ({sections, activeSection} : {sections: SectionType[], activeSection: string}) => {

  return (
    <div className={"w-1/6 h-auto relative flex justify-center"}>
      <div className={"fixed"}>
        <ul className={"space-y-4"}>
          {sections.map((section: SectionType) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block px-4 py-2 rounded-md ${
                  activeSection === section.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
