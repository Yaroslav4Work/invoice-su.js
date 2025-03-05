import * as types from './types';
export declare class InvoiceClient {
    private readonly baseUrl;
    private readonly apiKey;
    constructor(baseUrl: string, apiKey: string);
    private makeRequest;
    createPointOfSale(data: types.CreatePointOfSale): Promise<types.PointOfSale>;
    getPointOfSale(data: types.GetEntity): Promise<types.PointOfSale>;
    createTerminal(data: types.CreateTerminal): Promise<types.Terminal>;
    getTerminal(data: types.GetEntity): Promise<types.Terminal>;
    createPayment<T>(data: types.CreatePayment<T>): Promise<types.Payment<T>>;
    getPayment(id: string): Promise<types.Payment<unknown>>;
}
