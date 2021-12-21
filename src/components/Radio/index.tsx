import { InputHTMLAttributes } from 'react';

import * as Style from './styles';

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
	onCheck?: (value?: RadioValue) => void;
	label?: string;
	labelColor?: 'white' | 'black';
	labelFor?: string;
	value?: RadioValue;
} & InputHTMLAttributes<HTMLInputElement>;

const Radio = ({ label, onCheck, labelColor = 'white', labelFor = '', value, ...props }: RadioProps) => {
	const onChange = () => {
		!!onCheck && onCheck(value);
	};

	return (
		<Style.Wrapper>
			<Style.Input id={labelFor} type="radio" value={value} onChange={onChange} {...props} />
			{!!label && (
				<Style.Label labelColor={labelColor} htmlFor={labelFor}>
					{label}
				</Style.Label>
			)}
		</Style.Wrapper>
	);
};

export default Radio;
