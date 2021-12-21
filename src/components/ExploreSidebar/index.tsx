import { useEffect, useState } from 'react';
import { ParsedUrlQueryInput } from 'querystring';
import { Close, FilterList } from '@styled-icons/material-outlined';

import xor from 'lodash.xor';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import Heading from 'components/Heading';
import Radio from 'components/Radio';
import * as Style from './styles';

export type ItemProps = {
	title: string;
	name: string;
	type: string;
	fields: Field[];
};

type Field = {
	label: string;
	name: string;
};

type Values = ParsedUrlQueryInput;

export type ExploreSidebarProps = {
	items: ItemProps[];
	initialValues?: Values;
	onFilter: (values: Values) => void;
};

const ExploreSidebar = ({ items, onFilter, initialValues = {} }: ExploreSidebarProps) => {
	const [values, setValues] = useState(initialValues);
	const [isOpen, setIsOpen] = useState(false);

	const handleCheckbox = (name: string, value: string) => {
		const currentList = (values[name] as []) || [];

		setValues((s) => ({ ...s, [name]: xor(currentList, [value]) }));
	};

	useEffect(() => {
		onFilter(values);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [values]);

	const handleRadio = (name: string, value: string | boolean) => {
		setValues((s) => ({ ...s, [name]: value }));
	};

	const handleFilterMenu = () => {
		setIsOpen(false);
	};

	return (
		<Style.Wrapper isOpen={isOpen}>
			<Style.Overlay aria-hidden={isOpen} />
			<Style.IconWrapper>
				<FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
				<Close aria-label="close filters" onClick={() => setIsOpen(false)} />
			</Style.IconWrapper>

			<Style.Content>
				{items.map((item) => (
					<Style.Items key={item.title}>
						<Heading lineBottom lineColor="secondary" size="small">
							{item.title}
						</Heading>

						{item.type === 'checkbox' &&
							item.fields.map((field) => (
								<Checkbox
									key={field.name}
									name={field.name}
									label={field.label}
									labelFor={field.name}
									isChecked={(values[item.name] as string[])?.includes(field.name)}
									onCheck={() => handleCheckbox(item.name, field.name)}
								/>
							))}

						{item.type === 'radio' &&
							item.fields.map((field) => (
								<Radio
									key={field.name}
									id={field.name}
									value={field.name}
									name={item.name}
									label={field.label}
									labelFor={field.name}
									defaultChecked={String(field.name) === String(values[item.name])}
									onChange={() => handleRadio(item.name, field.name)}
								/>
							))}
					</Style.Items>
				))}
			</Style.Content>

			<Style.Footer>
				<Button fullWidth size="medium" onClick={handleFilterMenu}>
					Filter
				</Button>
			</Style.Footer>
		</Style.Wrapper>
	);
};

export default ExploreSidebar;
