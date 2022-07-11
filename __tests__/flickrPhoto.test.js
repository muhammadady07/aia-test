const request = require('supertest');
const express = require('express');
const app = express();
require('../routes/flickrPhoto/index')(app);

describe('GET /api/flickr-photos', function () {
  it('response to /api/flickr-photos', async () => {
    const res = await request(app)
    .get('/api/flickr-photos')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/);

    expect(res.statusCode).toEqual(200);
  });

  it('response search with tags to /api/flickr-photos', async () => {
    const res = await request(app)
    .get('/api/flickr-photos?tags="cars"')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/);
    expect(res.statusCode).toEqual(200);
  });
});