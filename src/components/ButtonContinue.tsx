import { useContext } from "react";
import { ref } from 'firebase/storage';
import { Context } from "../context/Context";
import { addUsers, getVideo, storageRoot } from "../utils/firebase";
import { Button } from "antd";

export default function ButtonContinue() {

    const {
        State,
        addInterest,
        addSkills,
        resetSection,
        resetSectionSkills,
        setStep,
        setUrlVideo
    } = useContext(Context)
    const {
        Sections,
        SkillsSections,
        step
    } = State;

    const onHandleClick = () => {

        // addUsers({
        //     codigo: 1,
        //     colegio: "paulo freire",
        //     curso: 11,
        //     edad: 17,
        //     nombre: "john doe"
        // });

        const _stepReset = step === 1 ? 2 : step + 1

        let _video = '';
        if (_stepReset <= 8) {
            _video = `videos/000${_stepReset + 1}.mp4`
        } else {
            _video = `videos/00${_stepReset + 1}.mp4`
        }

        // console.log('_video', _video);

        const _storageRef = ref(storageRoot, _video)

        if (step >= 3 && step <= 13) {
            let countOption = 0;
            const totalAmount = Sections.map((interest) => {
                if (interest.isActived === true) countOption = countOption + 1;
                return interest.value
            }).reduce((previousValue, currentValue) => previousValue + currentValue);
            if (countOption >= Sections.length) {
                setStep(step + 1);
                addInterest(totalAmount);
                resetSection();
                getVideo(_storageRef).then((_videoUrl) => {
                    setUrlVideo(_videoUrl);
                });
            }
        } else if (step >= 29 && step <= 39) {
            let countOption = 0;
            const totalAmountSkill = SkillsSections.map((interest) => {
                if (interest.isActived === true) countOption = countOption + 1;
                return interest.value
            }).reduce((previousValue, currentValue) => previousValue + currentValue);
            if (countOption >= SkillsSections.length) {
                setStep(step + 1);
                addSkills(totalAmountSkill);
                resetSectionSkills();
                getVideo(_storageRef).then((_videoUrl) => {
                    setUrlVideo(_videoUrl);
                });
            }
        }
        else {
            setStep(step + 1);
            getVideo(_storageRef).then((_videoUrl) => {
                setUrlVideo(_videoUrl);
            })
        }
    }

    return (
        <Button
            style={{ marginTop: '1.5rem' }}
            type="primary"
            onClick={onHandleClick}
        >
            Continuar
        </Button>
    )
}