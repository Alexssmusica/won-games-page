import Buttom from 'components/Buttom';
import * as Style from './styles';

export type HighlightProps = {
    title: string;
    subtitle: string;
    backgroundImage: string;
    buttonLabel: string;
    buttonLink: string;
};

const Highlight = ({ title, subtitle, backgroundImage, buttonLabel, buttonLink }: HighlightProps) => (
    <Style.Wrapper backgroundImage={backgroundImage}>
        <Style.Content>
            <Style.Title>{title}</Style.Title>
            <Style.Subtitle>{subtitle}</Style.Subtitle>
            <Buttom as="a" href={buttonLink}>
                {buttonLabel}
            </Buttom>
        </Style.Content>
    </Style.Wrapper>
);

export default Highlight;
