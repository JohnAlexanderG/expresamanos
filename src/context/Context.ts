import { createContext } from "react";
import { State, UserData } from "../Interfaces/Interfaces";

export type ContextProps = {
    State: State;
    addUserData: (userData: UserData) => void;
    addInterest: (interest: number) => void;
    addSection: (Section: any) => void;
    resetSection: () => void;
    addSkills: (interest: number) => void;
    addSectionSkills: (Section: any) => void;
    resetSectionSkills: () => void;
    setStep: (step: number) => void;
    setUrlVideo: (urlVideo: string) => void;
}

export const Context = createContext<ContextProps>({} as ContextProps);