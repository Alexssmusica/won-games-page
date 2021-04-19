import * as Style from './styles';

export type CheckboxProps = {
    label?: string;
    labelFor?: string;
};

const Checkbox = ({ label, labelFor = '' }: CheckboxProps) => (
    <Style.Wrapper>
        <input id={labelFor} type="checkbox" />
        {!!label && <label htmlFor={labelFor}>{label}</label>}
    </Style.Wrapper>
);

export default Checkbox;
