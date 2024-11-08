"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Modal, ModalContent, useDisclosure, ModalProps } from "@nextui-org/modal";

type ModalContextType = {
    openModal: ({children, opction}: {children: ReactNode, opction: ModalProps}) => void;
    
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [modalChildren, setModalChildren] = useState<ReactNode>(undefined);
    const [opction, setOpction] = useState<ModalProps>();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    useEffect(() => {
        if (!isOpen) {
            setModalChildren(undefined);
            setOpction(undefined);
        };
    }, [isOpen]);

    const openModal = ({ children, opction }: { children: ReactNode, opction: ModalProps }) => {
        setModalChildren(children);
        setOpction(opction);
        onOpen();
    };

    
    return (
        <ModalContext.Provider value={{ openModal }}>
            {children}
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} {...opction}>
                <ModalContent>
                    {() => (
                        <> {modalChildren} </>
                    )}
                </ModalContent>
            </Modal>
        </ModalContext.Provider>
    );
};

const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};

export { useModal, ModalProvider };
