import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';
import { Close } from '@styled-icons/material-outlined/Close';

import { useState } from 'react';
import Slider, { SliderSettings } from 'components/Slider';
import * as Style from './styles';

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
                slidesToShow: 3.2,
                draggable: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                slidesToShow: 2.2,
                draggable: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 2.2,
                draggable: true
            }
        }
    ],
    nextArrow: <ArrowRight aria-label="next image" />,
    prevArrow: <ArrowLeft aria-label="previous image" />
};

export type GalleryImageProps = {
    src: string;
    label: string;
};

export type GalleryProps = {
    items: GalleryImageProps[];
};

const Gallery = ({ items }: GalleryProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Style.Wrapper>
            <Slider settings={settings}>
                {items.map((item, index) => (
                    <img
                        role="button"
                        key={`thumb-${index}`}
                        src={item.src}
                        alt={`Thumb - ${item.label}`}
                        onClick={() => {
                            setIsOpen(true);
                        }}
                    />
                ))}
            </Slider>

            <Style.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
                <Style.Close role="button" aria-label="close modal" onClick={() => setIsOpen(false)}>
                    <Close size={40} />
                </Style.Close>
            </Style.Modal>
        </Style.Wrapper>
    );
};
export default Gallery;
