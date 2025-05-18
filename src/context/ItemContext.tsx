'use client'
import { createContext, useContext, useState, ReactNode } from "react";

interface Item {
    nomi: string;
    manzil: string;
    telefon: string;
    yonalish: string;
}

interface ItemContextType {
    item: Item | null;
    setItem: (item: Item) => void;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export function ItemProvider({ children }: { children: ReactNode }) {
    const [item, setItem] = useState<Item | null>(null);

    return (
        <ItemContext.Provider value={{ item, setItem }}>
    {children}
    </ItemContext.Provider>
);
}

export function useItem() {
    const context = useContext(ItemContext);
    if (!context) throw new Error("useItem must be used within ItemProvider");
    return context;
}
