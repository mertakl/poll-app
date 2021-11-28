describe('Create Poll', function () {
  beforeEach(function () {
    cy.fixture('poll-data.json').as('testData')
  })

  it('Should fill form', function () {
    cy.visit('/');
    let data = this.testData;
    cy.get('#question').type(data.question);

    for (let i = 0; i < data.choices.length; i++) {
      cy.get('#choice-' + i).type(data.choices[i])

      if (i !== data.choices.length - 1) {
        cy.get('#addChoiceBtn').click();
      }
    }
  });

  it('Add choice button must not exist', function () {
    cy.get('#addChoiceBtn').should('not.exist');
  })

  it('Should vote one by one', function () {
    let data = this.testData;

    for (let i = 0; i < data.choices.length; i++) {
      cy.get('input[type="radio"]#choice-radio' + i).click();
      cy.get('#voteBtn').click();
    }
  });

  it('Should render graph', function () {
    let data = this.testData;

    for (let i = 0; i < data.choices.length; i++) {
      cy.get(`path[aria-label="${data.choices[i]} 1"]`).should('be.visible');
    }
  });

  it('Should reset whole app', function () {
    cy.get('#resetBtn').click();
    cy.get('#question').should('not.have.value');
    cy.get('#choice-0').should('not.have.value');
    cy.get('input[type="radio"]').should('not.exist');
    cy.get('path[aria-label="*"]').should('not.exist');
  });
})

describe('Create Poll with Disabled State', function () {
  beforeEach(function () {
    cy.fixture('poll-data-disable.json').as('testData')
  })

  it('Should disable all inputs', function () {
    cy.visit('/');
    let data = this.testData;
    let questionElement = cy.get('#question');
    questionElement.type(data.question, {force: true});
    questionElement.should('be.disabled');

    for (let i = 0; i < data.choices.length; i++) {
      let choiceElement = cy.get('#choice-' + i);
      choiceElement.type(data.choices[i], {force: true});
      choiceElement.should('be.disabled');

      if (i !== data.choices.length - 1) {
        cy.get('#addChoiceBtn').click();
      }
    }
  });
});

describe('Create Poll With One Element', function () {
  beforeEach(function () {
    cy.fixture('poll-data.json').as('testData')
  })

  it('Should not be able to vote', function () {
    cy.visit('/');
    let data = this.testData;
    cy.get('#question').type(data.question);

    cy.get('#choice-0').type(data.choices[0]);

    cy.get('#voteBtn').should('be.disabled');
  });
});
