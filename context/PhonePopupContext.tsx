"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { PhonePopup } from "@/components/ui/PhonePopup";

interface PhonePopupContextType {
    openPopup: (phoneNumber: string) => void;
}

const PhonePopupContext = createContext<PhonePopupContextType | undefined>(undefined);

export function PhonePopupProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");

    const openPopup = (number: string) => {
        setPhoneNumber(number);
        setIsOpen(true);
    };

    return (
        <PhonePopupContext.Provider value={{ openPopup }}>
            {children}
            <PhonePopup
                isOpen={isOpen}
                onOpenChange={setIsOpen}
                phoneNumber={phoneNumber}
            />
        </PhonePopupContext.Provider>
    );
}

export function usePhonePopup() {
    const context = useContext(PhonePopupContext);
    if (context === undefined) {
        throw new Error("usePhonePopup must be used within a PhonePopupProvider");
    }
    return context;
}
