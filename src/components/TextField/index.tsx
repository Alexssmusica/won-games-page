import { useState, InputHTMLAttributes } from 'react';

import * as Style from './styles';

export type TextFieldProps = {
    onInput?: (value: string) => void;
    label?: string;
    labelFor?: string;
    initialValue?: string;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
    icon,
    iconPosition = 'left',
    label,
    labelFor = '',
    initialValue = '',
    disabled = false,
    onInput,
    ...props
}: TextFieldProps) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setValue(newValue);

        !!onInput && onInput(newValue);
    };

    return (
        <Style.Wrapper disabled={disabled}>
            {!!label && <Style.Label htmlFor={labelFor}>{label}</Style.Label>}
            <Style.InputWrapper>
                {!!icon && <Style.Icon iconPosition={iconPosition}>{icon}</Style.Icon>}
                <Style.Input
                    type="text"
                    onChange={onChange}
                    value={value}
                    iconPosition={iconPosition}
                    disabled={disabled}
                    {...props}
                />
            </Style.InputWrapper>
        </Style.Wrapper>
    );
};

export default TextField;
