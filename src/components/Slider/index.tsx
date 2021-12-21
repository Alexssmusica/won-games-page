import { forwardRef } from 'react';
import SlickSlider, { Settings } from 'react-slick';

import * as Style from './styles';

export type SliderSettings = Settings;

export type SliderProps = {
	children: React.ReactNode;
	settings: SliderSettings;
};

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = ({ children, settings }, ref) => (
	<Style.Wrapper>
		<SlickSlider ref={ref} {...settings}>
			{children}
		</SlickSlider>
	</Style.Wrapper>
);

export default forwardRef(Slider);
