import * as Style from './styles';

export type RibbonColors = 'primary' | 'secondary';
export type RibbonSizes = 'normal' | 'small';

export type RibbonProps = {
    children: React.ReactNode;
    color?: RibbonColors;
    size?: RibbonSizes;
};

const Ribbon = ({ children, color = 'primary', size = 'normal' }: RibbonProps) => (
    <Style.Wrapper color={color} size={size}>
        {children}
    </Style.Wrapper>
);

export default Ribbon;
