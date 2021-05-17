import { InputHTMLAttributes, useState } from 'react';
import * as Style from './styles';

export type CheckboxProps = {
    onCheck?: (status: boolean) => void;
    isChecked?: boolean;
    label?: string;
    labelFor?: string;
    labelColor?: 'white' | 'black';
    value?: string | ReadonlyArray<string> | number;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
    onCheck,
    isChecked = false,
    label,
    labelFor = '',
    labelColor = 'white',
    value,
    ...props
}: CheckboxProps) => {
    const [checked, setChecked] = useState(isChecked);

    const onChange = () => {
        const status = !checked; // true => false => true
        setChecked(status);

        !!onCheck && onCheck(status);
    };

    return (
        <Style.Wrapper>
            <Style.Input id={labelFor} type="checkbox" onChange={onChange} checked={checked} value={value} {...props} />
            {!!label && (
                <Style.Label htmlFor={labelFor} labelColor={labelColor}>
                    {label}
                </Style.Label>
            )}
        </Style.Wrapper>
    );
};

export default Checkbox;
