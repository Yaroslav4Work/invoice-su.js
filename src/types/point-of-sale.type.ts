import * as enums from '../enums';

export type PointOfSale = {
  id: string;
  name: string;
  address: string;
  phone: string;
  mail: string;
  alias: string;
  website?: string;
  type: enums.PointOfSaleType;
};
