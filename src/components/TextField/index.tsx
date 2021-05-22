import { useState, InputHTMLAttributes } from 'react';

import * as Style from './styles';

export type TextFieldProps = {
    onInput?: (value: string) => void;
    label?: string;
    labelFor?: string;
    initialValue?: string;
    icon?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({ icon, label, labelFor = '', initialValue = '', onInput, ...props }: TextFieldProps) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setValue(newValue);

        !!onInput && onInput(newValue);
    };

    return (
        <Style.Wrapper>
            {!!label && <Style.Label htmlFor={labelFor}>{label}</Style.Label>}
            <Style.InputWrapper>
                {!!icon && <Style.Icon>{icon}</Style.Icon>}
                <Style.Input type="text" onChange={onChange} value={value} {...props} />
            </Style.InputWrapper>
        </Style.Wrapper>
    );
};

export default TextField;
