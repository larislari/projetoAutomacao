import { faker } from '@faker-js/faker/locale/pt_BR';

describe('Registrar Usuário', () => {

  // Antes de cada teste, abre a página inicial
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Cadastrar um usuário', () => {
    it('Deve iniciar o cadastro e preencher dados do usuário', () => {

      // Navega para a página de login/cadastro
      cy.get('a[href="/login"]').should('be.visible').click();
      cy.location('href').should('eq', 'https://automationexercise.com/login');
      cy.get('a > img').should('be.visible');
      cy.contains('New User Signup!').should('be.visible');

      //Cria nova conta
      cy.preencherFormularioCadastro();

      //Valida se conta foi criada com sucesso
      cy.contains('Account Created!').should('be.visible');
      cy.get('[data-qa="continue-button"]').should('be.visible').click();

      //Valida se usuário está logado
      cy.contains(' Logged in as ').should('be.visible');
      cy.get('.shop-menu > .nav > :nth-child(5) > a').should('be.visible').click();

      //Deleta conta
      cy.contains('Account Deleted!').should('be.visible');
      cy.get('[data-qa="continue-button"]').should('be.visible').click();

    });
  });
});
