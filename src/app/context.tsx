"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the BlobContext type
interface BlobContextProps {
	blob: Blob | null;
	setBlob: (blob: Blob | null) => void;
}

// Create the BlobContext with initial values
const BlobContext = createContext<BlobContextProps | undefined>(undefined);

// Define a custom hook for using the BlobContext
export const useBlob = () => {
	const context = useContext(BlobContext);
	if (!context) {
		throw new Error("useBlob must be used within a BlobProvider");
	}
	return context;
};

// Define the BlobProvider component
interface BlobProviderProps {
	children: ReactNode;
}

export const BlobProvider: React.FC<BlobProviderProps> = ({ children }) => {
	const [blob, setBlob] = useState<Blob | null>(null);

	return (
		<BlobContext.Provider value={{ blob, setBlob }}>
			{children}
		</BlobContext.Provider>
	);
};
