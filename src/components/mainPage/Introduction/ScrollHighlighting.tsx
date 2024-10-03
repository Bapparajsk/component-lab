"use client";

import { useEffect, useState } from "react";

import { Sidebar } from "@/components/mainPage/Introduction/Sidebar";
import { MainContent } from "@/components/mainPage/Introduction/MainContent";

import { sections } from "./data";



export const ScrollHighlighting = () => {

  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(({ id }) => {
      const sectionElement = document.getElementById(id);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => observer.disconnect();
  }, []);

    return (
        <div className={"w-full h-full flex"}>
          <MainContent sections={sections} />
          <Sidebar sections={sections} activeSection={activeSection} />
        </div>
    );
};
