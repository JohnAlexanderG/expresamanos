
import type { DatePickerProps } from 'antd';
import { Form, Input, DatePicker, Select, Button, Alert } from 'antd';
import { ref } from 'firebase/storage';
import { useContext, useState } from 'react';
import { Context } from '../context/Context';
import { getVideo, storageRoot } from '../utils/firebase';
const { Item } = Form;
const { Option } = Select;



function FormDataUser() {
    const [showAlertError, setShowAlertError] = useState(false);
    const { addUserData, setStep, setUrlVideo } = useContext(Context)

    /**
     * TODO:
     * en onHandleChange controlar el estado showAlertError
     * cuando esté en el rango de edad permitida.
     * */
    const onHandleChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setShowAlertError(false);
    };

    const onFinish = (values: any) => {
        const _storageRef = ref(storageRoot, 'videos/0002.mp4')
        const currentDate: number = new Date().getFullYear()
        const date: number = new Date(values.age._d).getFullYear();
        const age: number = currentDate - date;

        if (age < 5 || age > 99) {
            setShowAlertError(true);
        } else {
            setShowAlertError(false);
            addUserData({ ...values, age })
            getVideo(_storageRef).then((_videoUrl) => {
                setUrlVideo(_videoUrl);
            });
            setStep(1);
        }
    };

    return (
        <Form
            name="control-hooks"
            onFinish={onFinish}
            layout="vertical"
        >
            <Item
                label="Nombre"
                name="name"
                rules={[{ required: true, message: 'Campo requerido!' }]}
            >
                <Input />
            </Item>
            <Item
                label="Año de Nacimiento"
                name="age"
                rules={[{ required: true, message: 'Campo requerido!' }]}
            >
                <DatePicker picker="year" onChange={onHandleChange} />
            </Item>
            <Item
                label="Colegio"
                name="school"
                rules={[{ required: true, message: 'Campo requerido!' }]}
            >
                <Input />
            </Item>
            <Item
                label="Curso"
                name="course"
                rules={[{ required: true, message: 'Campo requerido!' }]}
            >
                <Select allowClear>
                    <Option value="primero">01° Primero</Option>
                    <Option value="segundo">02° Segundo</Option>
                    <Option value="tercero">03° Tercero</Option>
                    <Option value="cuarto">04° Cuarto</Option>
                    <Option value="quinto">05° Quinto</Option>
                    <Option value="sexto">06° Sexto</Option>
                    <Option value="septimo">07° Septimo</Option>
                    <Option value="octavo">08° Octavo</Option>
                    <Option value="noveno">09° Noveno</Option>
                    <Option value="decimo">10° Decimo </Option>
                    <Option value="undecimo">11° Undecimo </Option>
                </Select>
            </Item>
            <Item
                label="Correo"
                name="email"
                rules={[{ required: true, message: 'Campo requerido!' }]}
            >
                <Input type='mail' />
            </Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Continuar
                </Button>
            </Form.Item>
            {showAlertError && (
                <Alert
                    message="Age Error"
                    description="Please set an age valid!"
                    type="error"
                    closable
                    onClose={onClose}
                />
            )}
        </Form>
    );
}

export default FormDataUser
