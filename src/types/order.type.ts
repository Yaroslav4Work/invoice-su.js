import * as enums from '../enums';

export type Order = {
  currency: enums.Currency;
  amount: number;
  description: string;
  id: string;
};
