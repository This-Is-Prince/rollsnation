"use client";

import { createContext, useEffect, ReactNode } from "react";
import { initFirebaseAppCheck } from "@/src/services/firebase-client";

const AppCheckContext = createContext(undefined);

export const AppCheckProvider = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        initFirebaseAppCheck();
    }, []);

    return (
        <AppCheckContext.Provider value={undefined}>
            {children}
        </AppCheckContext.Provider>
    );
};