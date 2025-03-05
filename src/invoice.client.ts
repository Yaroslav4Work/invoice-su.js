import * as types from './types';

export class InvoiceClient {
  constructor(
    private readonly baseUrl: string,
    private readonly apiKey: string,
  ) {}

  private async makeRequest<T, K>(url: string, data: T): Promise<K> {
    const res = await fetch(`${this.baseUrl}/${url}`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${this.apiKey}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const data = await res.json();

      throw new Error(
        JSON.stringify({
          status: res.status,
          statusText: res.statusText,
          description: data.description,
          additions: data.additions,
        }),
      );
    }

    return res.json();
  }

  public createPointOfSale(
    data: types.CreatePointOfSale,
  ): Promise<types.PointOfSale> {
    return this.makeRequest('CreatePointOfSale', data);
  }

  public getPointOfSale(data: types.GetEntity): Promise<types.PointOfSale> {
    return this.makeRequest('GetPointOfSale', data);
  }

  public createTerminal(data: types.CreateTerminal): Promise<types.Terminal> {
    return this.makeRequest('CreateTerminal', data);
  }

  public getTerminal(data: types.GetEntity): Promise<types.Terminal> {
    return this.makeRequest('GetTerminal', data);
  }

  public createPayment<T>(
    data: types.CreatePayment<T>,
  ): Promise<types.Payment<T>> {
    return this.makeRequest('CreatePayment', data);
  }

  public getPayment(id: string): Promise<types.Payment<unknown>> {
    return this.makeRequest('GetPayment', { id });
  }
}
