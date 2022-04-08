describe("search", () => {
  before(() => {
    cy.visit(Cypress.env("url"));

    const loginButton = cy.get(".login");
    loginButton.click();

    const idInput = cy.get(".user_id");
    idInput.type("baayoo92@gmail.com");

    const passwordInput = cy.get(".user_password");
    passwordInput.type("dl1532{enter}");

    cy.location("pathname").should((loc) => {
      expect(loc).to.eq("/");
    });

    cy.visit(Cypress.env("quiz_url"));

    const addQuizButton = cy.get(".add-quiz");
    addQuizButton.click();

    const osButton = cy.get(".add-menu-os");
    osButton.click();

    const quizTitle = cy.get(".quiz-body");
    quizTitle.type("test");

    const quizAnswer = cy.get(".quiz-answer");
    quizAnswer.type("test");

    const sendButton = cy.get(".quiz-submit");
    sendButton.click();
  });

  it("검색하면 검색한 퀴즈가 나와야함.", async () => {
    const inputSerach = cy.get(".quiz-search");
    inputSerach.type("test{enter}");

    const quizTitle = cy.get(".open-quiz");
    quizTitle.contains("test");

    cy.location("pathname").should((loc) => {
      expect(loc).to.eq("/search");
    });
  });

  it("검색한 퀴즈를 삭제할 수 있어야함.", async () => {
    const optionModal = cy.get(".quiz-option-modal");
    optionModal.eq(0).click();

    const removeButton = cy.get(".remove-quiz");
    removeButton.click();
  });
});
