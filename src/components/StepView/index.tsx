import { useContext } from "react";
import { Steps } from "antd";
const { Step } = Steps;
import { Context } from "../../context/Context";
import { data } from "../../utils/data";

import './styles.css';

export default function StepView() {
    const { State } = useContext(Context)
    const { step } = State;
    return (
        <div className="steps-wrappper">
            <Steps direction="vertical" current={step} size="small" >
                {data.map((_step, index) => {
                    if (_step.step <= 9) {
                        return <Step style={{ display: step >= 10 ? 'none' : 'block' }} key={`option-${_step}`} title={_step.text_title} />
                    }
                    if (step >= 10 && _step.step >= 10 && _step.step <= 19) {
                        return <Step style={{ display: step >= 20 ? 'none' : 'block' }} key={`option-${_step}`} title={_step.text_title} />
                    }
                    if (step >= 20 && (_step.step >= 20 && _step.step <= 29)) {
                        return <Step style={{ display: step >= 30 ? 'none' : 'block' }} key={`option-${_step}`} title={_step.text_title} />
                    }
                })}
            </Steps>
        </div>
    )
}
