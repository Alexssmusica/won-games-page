import React from 'react';
import * as Style from './styles';

export type ButtonProps = {
    children?: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    icon?: JSX.Element;
    onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Buttom = ({ children, icon, size = 'medium', fullWidth = false, ...props }: ButtonProps) => (
    <Style.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
        {!!icon && icon}
        {!!children && <span>{children}</span>}
    </Style.Wrapper>
);

export default Buttom;
