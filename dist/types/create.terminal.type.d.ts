import * as types from './index';
export type CreateTerminal = Omit<types.Terminal, 'id' | 'link'> & {
    alias: string;
    pointId: string;
};
