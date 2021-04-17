import SlickSlider, { Settings } from 'react-slick';

import * as Style from './styles';

export type SliderSettings = Settings;

export type SliderProps = {
    children: React.ReactNode;
    settings: Settings;
};

const Slider = ({ children, settings }: SliderProps) => (
    <Style.Wrapper>
        <SlickSlider {...settings}>{children}</SlickSlider>
    </Style.Wrapper>
);

export default Slider;
