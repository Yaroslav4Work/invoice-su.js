"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceClient = void 0;
class InvoiceClient {
    constructor(baseUrl, apiKey) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
    }
    async makeRequest(url, data) {
        const res = await fetch(`${this.baseUrl}/${url}`, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${this.apiKey}`,
            },
            body: JSON.stringify(data),
        });
        if (!res.ok) {
            const data = await res.json();
            throw new Error(JSON.stringify({
                status: res.status,
                statusText: res.statusText,
                description: data.description,
                additions: data.additions,
            }));
        }
        return res.json();
    }
    createPointOfSale(data) {
        return this.makeRequest('CreatePointOfSale', data);
    }
    getPointOfSale(data) {
        return this.makeRequest('GetPointOfSale', data);
    }
    createTerminal(data) {
        return this.makeRequest('CreateTerminal', data);
    }
    getTerminal(data) {
        return this.makeRequest('GetTerminal', data);
    }
    createPayment(data) {
        return this.makeRequest('CreatePayment', data);
    }
    getPayment(id) {
        return this.makeRequest('GetPayment', { id });
    }
}
exports.InvoiceClient = InvoiceClient;
//# sourceMappingURL=invoice.client.js.map