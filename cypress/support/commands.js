import { faker } from '@faker-js/faker';


// Adiciona um comando Cypress para preencher automaticamente o formulário de cadastro
Cypress.Commands.add('preencherFormularioCadastro', () => {

    //Localidade escolhida
    const localidades = [
        { cidade: 'Toronto', estado: 'ON', codigoArea: '416' },
        { cidade: 'Vancouver', estado: 'BC', codigoArea: '604' },
        { cidade: 'Montreal', estado: 'QC', codigoArea: '514' }
    ];

    // Informações aleatorias
    const nomePerfil = faker.person.fullName();
    const email = faker.internet.email();
    const senha = faker.internet.password();
    const primeiroNome = faker.person.firstName();
    const sobrenome = faker.person.lastName();
    const company = faker.company.name();
    const dia = faker.number.int({ min: 1, max: 31 });
    const mes = faker.number.int({ min: 1, max: 12 });
    const ano = faker.number.int({ min: 1990, max: new Date().getFullYear() });
    const gender = faker.helpers.arrayElement(['#id_gender1', '#id_gender2']);
    const localidade = faker.helpers.arrayElement(localidades);
    const endereco = faker.location.streetAddress();
    const endereco2 = faker.location.secondaryAddress();
    const codigoPostal = faker.location.zipCode();
    const numeroCelular = faker.phone.number(`+1 ${localidade.codigoArea} 9####-####`);

    // Realiza as interações para preencher o formulário
    cy.get('[data-qa="signup-name"]').type(nomePerfil);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
    cy.contains('Enter Account Information').should('be.visible');

    // Preenche o formulário com informações adicionais
    cy.get(gender).check();
    cy.get('[data-qa="password"]').type(senha);
    cy.get('[data-qa="days"]').select(dia.toString());
    cy.get('[data-qa="months"]').select(mes.toString());
    cy.get('[data-qa="years"]').select(ano.toString());

    // Marca as opções de newsletter e ofertas
    cy.get('#newsletter').check();
    cy.get('#optin').check();

    // Preenche os detalhes de endereço
    cy.get('[data-qa="first_name"]').type(primeiroNome);
    cy.get('[data-qa="last_name"]').type(sobrenome);
    cy.get('[data-qa="company"]').type(company);
    cy.get('[data-qa="address"]').type(endereco);
    cy.get('[data-qa="address2"]').type(endereco2);
    cy.get('[data-qa="country"]').select('Canada');
    cy.get('[data-qa="state"]').type(localidade.estado);
    cy.get('[data-qa="city"]').type(localidade.cidade);
    cy.get('[data-qa="zipcode"]').type(codigoPostal);
    cy.get('[data-qa="mobile_number"]').type(numeroCelular);
    cy.get('[data-qa="create-account"]').click();
});
