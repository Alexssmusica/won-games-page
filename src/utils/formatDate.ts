import { format } from 'date-fns';

export function toDay() {
    return format(new Date(), 'yyyy-MM-dd');
}
