const request = require('supertest');
const app = require('../app');

describe('Testa rota GET /', () => {
  it('Deve responder com Olá, mundo!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Olá, mundo!');
  });
});
