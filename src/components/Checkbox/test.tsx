import { screen, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import theme from 'styles/theme';
import Checkbox from '.';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<Checkbox />', () => {
    it('should render with label', () => {
        renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

        expect(screen.getByRole('checkbox')).toBeInTheDocument();
        expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
        expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
    });

    it('should render without label', () => {
        renderWithTheme(<Checkbox />);

        expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument();
    });

    it('should render with black label', () => {
        renderWithTheme(<Checkbox label="checkbox label" labelFor="check" labelColor="black" />);

        expect(screen.getByText(/checkbox label/i)).toHaveStyle({
            color: theme.colors.black
        });
    });

    it('should dispatch onCheck when status changes', async () => {
        const onCheck = jest.fn();

        renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} />);

        expect(onCheck).not.toHaveBeenCalled();

        userEvent.click(screen.getByRole('checkbox'));
        await waitFor(() => {
            expect(onCheck).toHaveBeenCalledTimes(1);
        });
        expect(onCheck).toHaveBeenCalledWith(true);
    });

    it('should dispatch onCheck when status changes', async () => {
        const onCheck = jest.fn();

        renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />);

        userEvent.click(screen.getByRole('checkbox'));
        await waitFor(() => {
            expect(onCheck).toHaveBeenCalledTimes(1);
        });
        expect(onCheck).toHaveBeenCalledWith(false);
    });
});
