import Button from 'components/Button';
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon';
import * as Style from './styles';

export type BannerProps = {
    img: string;
    title: string;
    subtitle: string;
    buttonLabel: string;
    buttonLink: string;
    ribbon?: string;
    ribbonSize?: RibbonSizes;
    ribbonColor?: RibbonColors;
};

const Banner = ({
    img,
    title,
    subtitle,
    buttonLabel,
    buttonLink,
    ribbon,
    ribbonSize = 'normal',
    ribbonColor = 'primary'
}: BannerProps) => (
    <Style.Wrapper>
        {!!ribbon && (
            <Ribbon color={ribbonColor} size={ribbonSize}>
                {ribbon}
            </Ribbon>
        )}

        <Style.Image src={img} role="img" aria-label={title} />

        <Style.Caption>
            <Style.Title>{title}</Style.Title>
            <Style.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
            <Button as="a" href={buttonLink} size="large">
                {buttonLabel}
            </Button>
        </Style.Caption>
    </Style.Wrapper>
);

export default Banner;
