import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as Style from './styles';

type ButtonTypes = AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    icon?: JSX.Element;
    as?: React.ElementType;
} & ButtonTypes;

const Buttom = ({ children, icon, size = 'medium', fullWidth = false, ...props }: ButtonProps) => (
    <Style.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
        {!!icon && icon}
        {!!children && <span>{children}</span>}
    </Style.Wrapper>
);

export default Buttom;
