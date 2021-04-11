import Buttom from '../Buttom';
import * as Style from './styles';

export type BannerProps = {
    img: string;
    title: string;
    subtitle: string;
    buttonLabel: string;
    buttonLink: string;
};

const Banner = ({ img, title, subtitle, buttonLabel, buttonLink }: BannerProps) => (
    <Style.Wrapper>
        <Style.Image src={img} role="img" aria-label={title} />

        <Style.Caption>
            <Style.Title>{title}</Style.Title>
            <Style.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
            <Buttom as="a" href={buttonLink} size="large">
                {buttonLabel}
            </Buttom>
        </Style.Caption>
    </Style.Wrapper>
);

export default Banner;
