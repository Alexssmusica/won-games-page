import * as Style from './styles';

export type DropdownProps = {
    title: React.ReactNode;
    children: React.ReactNode;
};

const Dropdown = ({ title, children }: DropdownProps) => (
    <Style.Wrapper>
        <Style.Title>{title}</Style.Title>
        <Style.Content>{children}</Style.Content>
    </Style.Wrapper>
);

export default Dropdown;
