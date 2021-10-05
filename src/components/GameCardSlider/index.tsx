import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';

import Slider, { SliderSettings } from 'components/Slider';
import GameCard, { GameCardProps } from 'components/GameCard';

import * as Style from './styles';

export type GameCardSliderProps = {
    items: GameCardProps[];
    color?: 'white' | 'black';
};

const settings: SliderSettings = {
    arrows: true,
    slidesToShow: 4,
    infinite: false,
    lazyLoad: 'ondemand',
    responsive: [
        {
            breakpoint: 1375,
            settings: {
                arrows: false,
                slidesToShow: 3.2
            }
        },
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                slidesToShow: 2.2
            }
        },
        {
            breakpoint: 570,
            settings: {
                arrows: false,
                slidesToShow: 1.2
            }
        },
        {
            breakpoint: 375,
            settings: {
                arrows: false,
                slidesToShow: 1.1
            }
        }
    ],
    nextArrow: <ArrowRight aria-label="Next Games" />,
    prevArrow: <ArrowLeft aria-label="Previous Games" />
};

const GameCardSlider = ({ items, color = 'white' }: GameCardSliderProps) => (
    <Style.Wrapper color={color}>
        <Slider settings={settings}>
            {items.map((item, index) =>
                item.price === 0 ? (
                    <GameCard key={index} {...item} ribbonColor="secondary" ribbon="Free of Charge" />
                ) : (
                    <GameCard key={index} {...item} />
                )
            )}
        </Slider>
    </Style.Wrapper>
);

export default GameCardSlider;
