import { BaseOptionType } from "antd/es/select";

export const days = Array.from({ length: 31 }, (_, index) => {
    return {
        value: (index + 1).toString(),
        label: (index + 1).toString()
    } as BaseOptionType;
});

export const months = Array.from({ length: 12 }, (_, index) => {
    return {
        value: (index + 1).toString(),
        label: (index + 1).toString()
    } as BaseOptionType;
});

const currentYear = new Date().getFullYear();
export const years = Array.from({ length: currentYear - 1900 + 1 }, (_, index) => {
    return {
        value: (1900 + index).toString(),
        label: (1900 + index).toString()
    } as BaseOptionType;
});
