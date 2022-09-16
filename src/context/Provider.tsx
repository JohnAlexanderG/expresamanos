import { useReducer } from 'react';

import { State, UserData } from "../Interfaces/Interfaces"
import { Context } from "./Context"
import { InterestsReducer } from './Reducer';

export const initialState: State = {
    userData: {
        age: 0,
        course: '',
        email: '',
        name: '',
        school: ''
    },
    interests: [],
    Sections: [
        { section: '1', value: 0, isActived: false },
        { section: '2', value: 0, isActived: false },
        { section: '3', value: 0, isActived: false },
        { section: '4', value: 0, isActived: false },
        { section: '5', value: 0, isActived: false },
        { section: '6', value: 0, isActived: false }
    ],
    skills: [],
    SkillsSections: [
        { section: '1', value: 0, isActived: false },
        { section: '2', value: 0, isActived: false },
        { section: '3', value: 0, isActived: false },
        { section: '4', value: 0, isActived: false },
        { section: '5', value: 0, isActived: false }
    ],
    step: 50,
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/expresamanos.appspot.com/o/videos%2F0001.mp4?alt=media&token=4374b295-9060-4718-8175-6f55d0aac9fd'
}

interface ProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const Provider = ({ children }: ProviderProps) => {

    const [State, dispatch] = useReducer(InterestsReducer, initialState);

    const addUserData = (userData: UserData) => {
        dispatch({ type: 'ADD_USER_DATA', payload: userData })
    }

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

    const addSkills = (interest: number) => {
        dispatch({ type: 'ADD_SKILLS', payload: interest })
    }

    const addSectionSkills = (Section: []) => {
        dispatch({ type: 'ADD_SKILLS_SECTION', payload: Section })
    }

    const resetSectionSkills = () => {
        const resetData = initialState.SkillsSections.map((interests) => {
            return { section: interests.section, value: 0, isActived: false }
        })
        dispatch({ type: 'RESET_SKILLS_SECTION', payload: resetData })
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
            addUserData,
            addInterest,
            addSection,
            resetSection,
            addSkills,
            addSectionSkills,
            resetSectionSkills,
            setStep,
            setUrlVideo
        }}>
            {children}
        </Context.Provider>
    )
}