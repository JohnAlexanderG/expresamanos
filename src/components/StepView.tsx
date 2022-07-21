import { useContext } from "react";
import { Steps } from "antd";
const { Step } = Steps;
import { Context } from "../context/Context";
import { data } from "../utils/data";

export default function StepView() {
    const { State } = useContext(Context)
    const { step } = State;
    return (
        <div style={{ width: '56px', borderRight: '1px solid #e0e0e0', padding: '1rem', backgroundColor: '#fefefe' }} >
            <Steps size='small' direction='vertical' current={step}>
                {data.map((_step) => {
                    return <Step key={`option-${_step}`} />
                })}
            </Steps>
        </div>
    )
}
