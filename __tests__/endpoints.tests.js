const { app } = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);

it('it should respond with products', async done => {
    const myData = [
        {
            id: 1, 
            image: 'https://media2.giphy.com/media/aMO3eGc9frP9i24AqG/source.gif',
            name: 'Niacinamide 10%', 
            size: '16ml',
            price: '$15',
            type: 'Serum'
        }, 
        {
            id: 2, 
            image: 'https://media2.giphy.com/media/aMO3eGc9frP9i24AqG/source.gif',
            name: 'Retinol 0.5%', 
            size: '12ml',
            price: '$35',
            type: 'Exfoliant'
        },
        {
            id: 3, 
            image: 'https://media2.giphy.com/media/aMO3eGc9frP9i24AqG/source.gif',
            name: 'AHA+BHA Solution', 
            size: '12ml',
            price: '$50',
            type: 'Exfoliant'
        },
    ];
    const response = await request.get('/products');

    expect(response.status).toBe(200);
    
    expect(response.body).toEqual({ results: myData });
    
    done();
});

it('should return with selected product', async done => {
    const expectation = {

        results: {
            'id': 1, 
            'image': 'https://media2.giphy.com/media/aMO3eGc9frP9i24AqG/source.gif',
            'name': 'Niacinamide 10%', 
            'size': '16ml',
            'price': '$15',
            'type': 'Serum'
        }, 

    };
    const response = await request.get('/products/1');

    expect(response.status).toBe(200);
    
    expect(response.body).toEqual(expectation);
    done();
});