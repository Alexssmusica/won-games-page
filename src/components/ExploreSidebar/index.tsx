import { Close, FilterList } from '@styled-icons/material-outlined';
import { useState } from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Heading from '../Heading';
import Radio from '../Radio';
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

type Values = {
    [field: string]: boolean | string;
};

export type ExploreSidebarProps = {
    items: ItemProps[];
    initialValues?: Values;
    onFilter: (values: Values) => void;
};

const ExploreSidebar = ({ items, onFilter, initialValues = {} }: ExploreSidebarProps) => {
    const [values, setValues] = useState(initialValues);
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (name: string, value: string | boolean) => {
        setValues((s) => ({ ...s, [name]: value }));
    };

    const handleFilter = () => {
        onFilter(values);
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
                                    isChecked={!!values[field.name]}
                                    onCheck={(v) => handleChange(field.name, v)}
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
                                    defaultChecked={field.name === values[item.name]}
                                    onChange={() => handleChange(item.name, field.name)}
                                />
                            ))}
                    </Style.Items>
                ))}
            </Style.Content>

            <Style.Footer>
                <Button fullWidth size="medium" onClick={handleFilter}>
                    Filter
                </Button>
            </Style.Footer>
        </Style.Wrapper>
    );
};

export default ExploreSidebar;
