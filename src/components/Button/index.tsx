import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react';
import * as Style from './styles';

type ButtonTypes = AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    minimal?: boolean;
    icon?: JSX.Element;
    as?: React.ElementType;
} & ButtonTypes;

const Button: React.ForwardRefRenderFunction<Style.WrapperProps, ButtonProps> = (
    { children, icon, size = 'medium', fullWidth = false, minimal = false, ...props },
    ref
) => (
    <Style.Wrapper ref={ref} size={size} fullWidth={fullWidth} hasIcon={!!icon} minimal={minimal} {...props}>
        {!!icon && icon}
        {!!children && <span>{children}</span>}
    </Style.Wrapper>
);

export default forwardRef(Button);
