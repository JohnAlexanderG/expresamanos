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
                    if (step >= 30 && (_step.step >= 30 && _step.step <= 39)) {
                        return <Step style={{ display: step >= 40 ? 'none' : 'block' }} key={`option-${_step}`} title={_step.text_title} />
                    }
                    if (step >= 40 && (_step.step >= 40 && _step.step <= 49)) {
                        return <Step style={{ display: step >= 50 ? 'none' : 'block' }} key={`option-${_step}`} title={_step.text_title} />
                    }
                    if (step >= 50 && (_step.step >= 50 && _step.step <= 59)) {
                        return <Step style={{ display: step >= 60 ? 'none' : 'block' }} key={`option-${_step}`} title={_step.text_title} />
                    }
                    if (step >= 60 && (_step.step >= 60 && _step.step <= 69)) {
                        return <Step style={{ display: step >= 70 ? 'none' : 'block' }} key={`option-${_step}`} title={_step.text_title} />
                    }
                })}
            </Steps>
        </div>
    )
}
