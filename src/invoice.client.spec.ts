import { describe } from '@jest/globals';
import * as dotenv from 'dotenv';
import { types, enums, InvoiceClient } from './index';

dotenv.config();

describe('invoice client', () => {
  const client = new InvoiceClient(process.env.BASE_URL, process.env.API_KEY);

  const baseIdentity = Date.now().toString();

  let pointOfSale: types.PointOfSale | undefined;

  test('create point of sale', async () => {
    pointOfSale = await client.createPointOfSale({
      address: 'Сантк-Петербург, Литейный пр',
      alias: baseIdentity,
      mail: 'example@mail.com',
      name: 'TEST_POINT_OF_SALE',
      phone: '89314254165',
      type: enums.PointOfSaleType.Online,
      website: 'https://example.com',
    });

    expect(pointOfSale).not.toBeUndefined();
    expect(pointOfSale.id).not.toBeUndefined();
  });

  test('get point of sale', async () => {
    const idBefore = pointOfSale.id;

    pointOfSale = await client.getPointOfSale({ alias: baseIdentity });

    expect(pointOfSale).not.toBeUndefined();
    expect(pointOfSale.id).toEqual(idBefore);
  });

  let terminal: types.Terminal | undefined;

  test('create terminal', async () => {
    terminal = await client.createTerminal({
      alias: baseIdentity,
      defaultPrice: 100,
      description: 'test terminal',
      name: 'TEST_TERMINAL',
      pointId: pointOfSale.id,
      type: enums.TerminalType.Dynamical,
    });

    expect(terminal).not.toBeUndefined();
    expect(terminal.id).not.toBeUndefined();
  });

  test('get terminal', async () => {
    const idBefore = terminal.id;

    terminal = await client.getTerminal({ alias: baseIdentity });

    expect(terminal).not.toBeUndefined();
    expect(terminal.id).toEqual(idBefore);
  });

  let payment: types.Payment<unknown> | undefined;

  test('create payment', async () => {
    payment = await client.createPayment<object>({
      custom_parameters: {},
      order: {
        currency: enums.Currency.RUB,
        amount: 100,
        description: 'test order',
        id: baseIdentity,
      },
      receipt: [
        {
          name: 'test receipt',
          price: 100,
          discount: 0,
          resultPrice: 100,
          quantity: 1,
        },
      ],
      settings: {
        terminal_id: terminal.id,
      },
      trtype: enums.Trtype.Once,
    });

    expect(payment).not.toBeUndefined();
    expect(payment.id).not.toBeUndefined();
  });

  test('get payment', async () => {
    const idBefore = payment.id;

    payment = await client.getPayment(payment.id);

    expect(payment).not.toBeUndefined();
    expect(payment.id).toEqual(idBefore);
  });
});
