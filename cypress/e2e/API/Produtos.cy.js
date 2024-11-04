

describe('API Produtos', () => {

    it('Realizar requisição para consultar lista de produtos', () => {
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/productsList'
        }).then((response) => {
            expect(response.status).to.eq(200);


        });
    });
});
