import { useContext } from "react";
import { Context } from "../../context/Context";
import { data } from "../../utils/data";
import ButtonContinue from "../ButtonContinue";
import SelectedSections from "../SelectedSections";
import FormDataUser from '../FormDataUser';

import './styles.css';

export default function Content() {
    const { State } = useContext(Context)
    const { step } = State;

    return (
        <div className="content-wrapper">
            {data.map((_step) => {
                if (_step.step === step) {
                    return (
                        <div
                            key={`item-${_step}`}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                marginTop: '2rem'
                            }}>
                            <h1>{_step.text_title}</h1>
                            <p>{_step.description}</p>
                            {(step === 2) && (
                                <ul>
                                    {_step.list_options_text.map((item, idx) => <li key={idx} >{item}</li>)}
                                </ul>
                            )}
                            {(step === 0) && <FormDataUser />}
                            {(step >= 3 && step <= 13) && <SelectedSections options={_step.list_options_text} />}
                            {(step !== 0) && <ButtonContinue />}
                        </div>
                    )
                }
            })}
        </div>
    )
}
