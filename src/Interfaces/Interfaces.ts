export interface Section {
    section: string;
    value: number;
    isActived: boolean;
}

export interface State {
    interests: number[];
    Sections: Section[];
    step: number;
    videoUrl: string;
}