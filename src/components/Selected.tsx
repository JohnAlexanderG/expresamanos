import { useContext } from "react";
import { Radio, RadioChangeEvent } from 'antd';
import { Context } from "../context/Context";
import { Section } from "../Interfaces/Interfaces";

export default function Selected({ section, value }: { section: string, value: number }) {
    const { State, addSection, addSectionSkills } = useContext(Context);
    const { Sections, SkillsSections, step } = State;

    const onChange = (e: RadioChangeEvent) => {
        let newAmount: Section[];
        if (step >= 3 && step <= 13) {
            newAmount = Sections.map((Sections: any) => {
                return Sections.section === section ? { ...Sections, value: e.target.value, isActived: true } : Sections;
            });
            addSection(newAmount)
        }
        if (step >= 29 && step <= 39) {
            newAmount = SkillsSections.map((Sections: any) => {
                return Sections.section === section ? { ...Sections, value: e.target.value, isActived: true } : Sections;
            });
            addSectionSkills(newAmount);
        }
    };

    return (
        <div key={`00${section}`} style={{ display: 'flex' }}>
            <span>{section}.&nbsp;-&nbsp;</span>
            <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>1</Radio>
                <Radio value={2}>2</Radio>
                <Radio value={3}>3</Radio>
                <Radio value={4}>4</Radio>
                {step >= 3 && step <= 13 && <Radio value={5}>5</Radio> } 
            </Radio.Group>
        </div>
    )
}
