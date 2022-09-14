import { Section, State, UserData } from '../Interfaces/Interfaces';

type ReducerActions =
    | { type: 'ADD_USER_DATA', payload: UserData }
    | { type: 'ADD_INTEREST', payload: number }
    | { type: 'ADD_INTEREST_SECTION', payload: Section[] }
    | { type: 'RESET_INTEREST_SECTION', payload: Section[] }
    | { type: 'ADD_SKILLS', payload: number }
    | { type: 'ADD_SKILLS_SECTION', payload: Section[] }
    | { type: 'RESET_SKILLS_SECTION', payload: Section[] }
    | { type: 'SET_STEP', payload: number }
    | { type: 'SET_URL_VIDEO', payload: string }

export const InterestsReducer = (state: State, action: ReducerActions): State => {
    switch (action.type) {
        case "ADD_USER_DATA":
            return { ...state, userData: { ...state.userData, ...action.payload } }
        case "ADD_INTEREST":
            return { ...state, interests: [...state.interests, action.payload] }
        case "ADD_INTEREST_SECTION":
            return { ...state, Sections: action.payload }
        case "RESET_INTEREST_SECTION":
            return { ...state, Sections: action.payload }
        case "ADD_SKILLS":
            return { ...state, skills: [...state.skills, action.payload] }
        case "ADD_SKILLS_SECTION":
            return { ...state, SkillsSections: action.payload }
        case "RESET_SKILLS_SECTION":
            return { ...state, SkillsSections: action.payload }
        case "SET_STEP":
            return { ...state, step: action.payload }
        case "SET_URL_VIDEO":
            return { ...state, videoUrl: action.payload }

        default:
            return state;
    }
}