const request = require('supertest');
const expect = require('expect')
const app = require('./server').app;

describe('Server.test.js', () => {
    it('Should return testPassed', (done) => {
        request(app)
        .get('/test')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect({"testPassed": true})
        .end(done);
    })
    it('Should return car properties object from cars array', (done) => {
        request(app)
        .get('/cars')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect((response) => {
            // We are testing if first array object got correct data
            expect(response.body[0]).toHaveProperty('list_id', '1')
            expect(response.body[0]).toHaveProperty('list_name', 'Warehouse A')
            expect(response.body[0]).toHaveProperty('list_location_lat', '47.13111')
            expect(response.body[0]).toHaveProperty('list_location_long', '-61.54801')
        })
        .end(done)
    })
})