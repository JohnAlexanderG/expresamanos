import { useReducer } from 'react';

import { State } from "../Interfaces/Interfaces"
import { Context } from "./Context"
import { InterestsReducer } from './Reducer';

export const initialState: State = {
    interests: [],
    Sections: [
        { section: '1', value: 0, isActived: false },
        { section: '2', value: 0, isActived: false },
        { section: '3', value: 0, isActived: false },
        { section: '4', value: 0, isActived: false },
        { section: '5', value: 0, isActived: false },
        { section: '6', value: 0, isActived: false },
    ],
    step: 0,
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/expresamanos.appspot.com/o/videos%2F0001.mp4?alt=media&token=4374b295-9060-4718-8175-6f55d0aac9fd'
}

interface ProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const Provider = ({ children }: ProviderProps) => {

    const [State, dispatch] = useReducer(InterestsReducer, initialState);

    const addInterest = (interest: number) => {
        dispatch({ type: 'ADD_INTEREST', payload: interest })
    }

    const addSection = (Section: []) => {
        dispatch({ type: 'ADD_INTEREST_SECTION', payload: Section })
    }

    const resetSection = () => {
        const resetData = initialState.Sections.map((interests) => {
            return { section: interests.section, value: 0, isActived: false }
        })
        dispatch({ type: 'RESET_INTEREST_SECTION', payload: resetData })
    }

    const setStep = (step: number) => {
        dispatch({ type: 'SET_STEP', payload: step })
    }
    
    const setUrlVideo = (urlVideo: string) => {
        dispatch({ type: 'SET_URL_VIDEO', payload: urlVideo })
    }

    return (
        <Context.Provider value={{
            State,
            addInterest,
            addSection,
            resetSection,
            setStep,
            setUrlVideo
        }}>
            {children}
        </Context.Provider>
    )
}