import { Section, State } from '../Interfaces/Interfaces';

type ReducerActions =
    | { type: 'ADD_INTEREST', payload: number }
    | { type: 'ADD_INTEREST_SECTION', payload: Section[] }
    | { type: 'RESET_INTEREST_SECTION', payload: Section[] }
    | { type: 'SET_STEP', payload: number }
    | { type: 'SET_URL_VIDEO', payload: string }

export const InterestsReducer = (state: State, action: ReducerActions): State => {
    switch (action.type) {
        case "ADD_INTEREST":
            return { ...state, interests: [...state.interests, action.payload] }
        case "ADD_INTEREST_SECTION":
            return { ...state, Sections: action.payload }
        case "RESET_INTEREST_SECTION":
            return { ...state, Sections: action.payload }
        case "SET_STEP":
            return { ...state, step: action.payload }
        case "SET_URL_VIDEO":
            return { ...state, videoUrl: action.payload }

        default:
            return state;
    }
}