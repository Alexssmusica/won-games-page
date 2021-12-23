import { useState, InputHTMLAttributes } from 'react';

import * as Style from './styles';

export type TextFieldProps = {
	onInputChange?: (value: string) => void;
	label?: string;
	initialValue?: string;
	icon?: React.ReactNode;
	iconPosition?: 'left' | 'right';
	disabled?: boolean;
	error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
	icon,
	iconPosition = 'left',
	label,
	name,
	initialValue = '',
	error,
	disabled = false,
	onInputChange,
	...props
}: TextFieldProps) => {
	const [value, setValue] = useState(initialValue);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.currentTarget.value;
		setValue(newValue);

		!!onInputChange && onInputChange(newValue);
	};

	return (
		<Style.Wrapper disabled={disabled} error={!!error}>
			{!!label && <Style.Label htmlFor={name}>{label}</Style.Label>}
			<Style.InputWrapper>
				{!!icon && <Style.Icon iconPosition={iconPosition}>{icon}</Style.Icon>}
				<Style.Input
					type="text"
					onChange={onChange}
					value={value}
					iconPosition={iconPosition}
					disabled={disabled}
					name={name}
					{...(label ? { id: name } : {})}
					{...props}
				/>
			</Style.InputWrapper>
			{!!error && <Style.Error>{error}</Style.Error>}
		</Style.Wrapper>
	);
};

export default TextField;
