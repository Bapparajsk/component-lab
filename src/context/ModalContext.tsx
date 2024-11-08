"use client";

import { createContext,  useContext, useEffect, useState } from "react";
import { Modal, useDisclosure, ModalProps, ModalContent } from "@nextui-org/modal";

type ModalContextType = {
    openModal: (opction: ModalProps) => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [opction, setOpction] = useState<ModalProps>();
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

    useEffect(() => {
        if (!isOpen) {
            setOpction(undefined);
        };
        console.log("isOpen", isOpen);
        
    }, [isOpen]);

    const openModal = (modal: ModalProps) => {
        setOpction(modal);
        onOpen();
    };

    const closeModal = () => {
        onClose();
        setOpction(undefined);
    };
    
    
    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} {...opction}>
                <ModalContent>
                    {() => (
                        <>
                            {opction?.children}
                        </>
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
