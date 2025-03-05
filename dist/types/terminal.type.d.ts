import * as enums from '../enums';
export type Terminal = {
    id: string;
    link: string;
    name: string;
    description: string;
    type: enums.TerminalType;
    defaultPrice: number;
};
