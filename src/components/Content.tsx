import { useContext } from "react";
import { Context } from "../context/Context";
import { data } from "../utils/data";
import ButtonContinue from "./ButtonContinue";
import SelectedSections from "./SelectedSections";
import FormDataUser from './FormDataUser';

export default function Content() {
    const { State } = useContext(Context)
    const { step } = State;

    return (
        <>
            {data.map((_step) => {
                if (_step.step === step) {
                    return (
                        <div
                            key={`item-${_step}`}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '2rem'
                            }}>
                            <h1>{_step.text_title}</h1>
                            {(step === 0) && <FormDataUser />}
                            {(step >= 3 && step <= 13) && <SelectedSections />}
                            {(step !== 0) && <ButtonContinue />}
                        </div>
                    )
                }
            })}
        </>
    )
}
