"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";

import { content } from "@/data/componentPage/content";

type ThemeContextType = {
    getPath: () => string[];
    getNavPosition: () => "sticky" | "static";
    setTitle: (title: "Getting Started" | "Components" | "Special Effects") => void;
    getTitle: () => string;
    getLastPath: () => string | undefined;
};

const LocationContext = createContext<ThemeContextType | undefined>(undefined);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [path, setPath] = useState<string[]>([]);
    const [titleName, setTitleName] = useState<string>("");
    const pathname = usePathname();

    useEffect(() => {
        const path = pathname.split("/");
        setPath(path);
    }, [pathname]);

    useEffect(() => {
        const p = pathname;
        if (p.endsWith("/(page)")) {
            setTitle("Getting Started");
        } else {
            const tag = p.split("/").pop();
            if (!tag) {
                setTitle("Getting Started");
                return;
            }

            if (content["Getting Started"].find((item) => item.name === tag)) {
                setTitle("Getting Started");
            } else if (content["Components"].find((item) => item.name === tag)) {
                setTitle("Components");
            } else if (content["Special Effects"].find((item) => item.name === tag)) {
                setTitle("Special Effects");
            } else {
                setTitle("Getting Started");
            }
        }

        return () => {
            setTitle("Getting Started");
        };
    }, []);

    const getPath = () => {
        return path.length > 1 ? path.slice(1) : [path[0]];
    };

    const getLastPath = () => {
        return pathname.split("/").pop();
    };

    const getNavPosition = (): "sticky" | "static" => {
        if (pathname === "/") {
            return "sticky";
        } else {
            return "static";
        }
    };

    const setTitle = (title: string) => {
        setTitleName(title);
    };

    const getTitle = () => titleName;

    return (
        <LocationContext.Provider value={{ getPath, getNavPosition, setTitle, getTitle, getLastPath }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocation = () => {
    const context = useContext(LocationContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
