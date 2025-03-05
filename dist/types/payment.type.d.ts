import * as types from './index';
import * as enums from '../enums';
export type Payment<T> = {
    id: string;
    order: types.Order;
    status: enums.PaymentStatus;
    status_description: string;
    payment_method: types.PaymentMethod;
    custom_parameters: T;
    create_date: string;
    update_date: string;
    expire_date?: string;
    payment_url: string;
};
