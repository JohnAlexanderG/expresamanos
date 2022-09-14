export interface UserData {
    name: string,
    age: number,
    school: string,
    course: string,
    email: string
}

export interface Section {
    section: string;
    value: number;
    isActived: boolean;
}

export interface State {
    userData: UserData;
    interests: number[];
    Sections: Section[];
    skills: number[];
    SkillsSections: Section[];
    step: number;
    videoUrl: string;
}
