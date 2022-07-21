import { useContext } from "react";
import { Radio, RadioChangeEvent, Result } from 'antd';
import { Context } from "../context/Context";
import { Section } from "../Interfaces/Interfaces";

export default function Selected({ section, value }: { section: string, value: number }) {
    const { State, addSection, setStep } = useContext(Context);
    const { Sections } = State;

    const onChange = (e: RadioChangeEvent) => {
        const newAmount: Section[] = Sections.map((Sections: any) => {
            return Sections.section === section ? { ...Sections, value: e.target.value, isActived: true } : Sections;
        });
        addSection(newAmount)
    };

    return (
        <div style={{ display: 'flex' }}>
            <span>{section}.&nbsp;-&nbsp;</span>
            <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>1</Radio>
                <Radio value={2}>2</Radio>
                <Radio value={3}>3</Radio>
                <Radio value={4}>4</Radio>
                <Radio value={5}>5</Radio>
            </Radio.Group>
        </div>
    )
}
