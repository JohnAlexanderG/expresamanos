import { createContext } from "react";
import { State } from "../Interfaces/Interfaces";

export type ContextProps = {
    State: State;
    addInterest: (interest: number) => void;
    addSection: (Section: any) => void;
    resetSection: () => void;
    setStep: (step: number) => void;
    setUrlVideo: (urlVideo: string) => void;
}

export const Context = createContext<ContextProps>({} as ContextProps);