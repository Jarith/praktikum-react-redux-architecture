import { addMinutes, format } from 'date-fns';

const MINUTES_IN_HOUR = 60;

export const getTimeFromDate = (date: string): string => format(new Date(date), 'HH:mm');

export const getEndDate = (date: string, duration: number): string => {
    const endDate = addMinutes(new Date(date), duration);

    return format(endDate, 'HH:mm');
};

export const convertMinutesToHours = (duration: number): string => {
    if (duration / MINUTES_IN_HOUR >= 1) {
        const hours = `${Math.trunc(duration / MINUTES_IN_HOUR)}ч`;
        const minutes =
            duration % MINUTES_IN_HOUR > 0
                ? `${duration % MINUTES_IN_HOUR}м`
                : ``;

        return `${hours} ${minutes}`;
    }

    return `${duration}м`;
};

export const getStopsCount = (stops: string[]): string => {
    const length = stops.length;
    const lastDigit = length % 10;

    if (lastDigit === 0) {
        return 'Без пересадок';
    }

    if (lastDigit === 1) {
        return `${length} пересадка`;
    }

    if (lastDigit > 1 && lastDigit < 5) {
        return `${length} пересадки`;
    }

    return `${length} пересадок`;
};

export const formatTicketPrice = (price: number): string => {
    const priceString = price.toString();

    return `${priceString.substring(
        0,
        priceString.length - 3
    )} ${priceString.substring(priceString.length, priceString.length - 3)}`;
};
