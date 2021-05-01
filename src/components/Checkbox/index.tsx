import * as Style from './styles';

export type CheckboxProps = {
    label?: string;
    labelFor?: string;
    labelColor?: 'white' | 'black';
};

const Checkbox = ({ label, labelFor = '', labelColor = 'white' }: CheckboxProps) => (
    <Style.Wrapper>
        <Style.Input id={labelFor} type="checkbox" />
        {!!label && (
            <Style.Label htmlFor={labelFor} labelColor={labelColor}>
                {label}
            </Style.Label>
        )}
    </Style.Wrapper>
);

export default Checkbox;
