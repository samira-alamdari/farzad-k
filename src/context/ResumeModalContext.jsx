import { createContext, useContext } from "react";
import { useState } from "react";

export const CreateResumeModal = createContext();
export const useResumeModal = () => {
    return useContext(CreateResumeModal);
}

export const ResumeModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }
    return (
        <CreateResumeModal.Provider value={{ isModalOpen, toggleModal }}>
            {children}
        </CreateResumeModal.Provider>
    )
}