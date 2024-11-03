import { faker } from '@faker-js/faker/locale/pt_BR';

describe('Registrar Usuário', () => {
    // Antes de cada teste, abre a página inicial
    beforeEach(() => {
        cy.visit('/');
    });

    describe('Teste de Cadastro e Login', () => {

        it('Deve logar com o usuário cadastrado', () => {
            // Navega para a página de login/cadastro
            cy.get('a[href="/login"]').should('be.visible').click();
            cy.location('href').should('eq', 'https://automationexercise.com/login');
            cy.contains('Login to your account').should('be.visible');

            // Logar com cadastro efetuado
            cy.get('[data-qa="login-email"]').type('carol@bol.com.br');
            cy.get('[data-qa="login-password"]').type('12345');
            cy.get('[data-qa="login-button"]').click();

            //Valida se usuário está logado
            cy.contains(' Logged in as ').should('be.visible');

        });
    });
});
