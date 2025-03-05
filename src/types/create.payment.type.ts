import * as types from './index';
import * as enums from '../enums';

export type CreatePayment<T> = Omit<
  types.Payment<T>,
  | 'id'
  | 'status'
  | 'status_description'
  | 'payment_method'
  | 'create_date'
  | 'update_date'
  | 'expire_date'
  | 'payment_url'
> & {
  settings: types.Settings;
  receipt: types.Receipt[];
  phone?: string;
  mail?: string;
  trtype: enums.Trtype;
};
