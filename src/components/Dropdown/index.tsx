import { useState } from 'react';
import * as Style from './styles';

export type DropdownProps = {
    title: React.ReactNode;
    children: React.ReactNode;
};

const Dropdown = ({ title, children }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Style.Wrapper isOpen={isOpen}>
            <Style.Title onClick={() => setIsOpen(!isOpen)}>{title}</Style.Title>
            <Style.Content aria-hidden={!isOpen}>{children}</Style.Content>
        </Style.Wrapper>
    );
};

export default Dropdown;
