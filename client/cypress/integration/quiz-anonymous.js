describe("quiz", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url"));
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("로그인 되지 않은 상태에서는 퀴즈 추가 버튼이 보이지 않아야 함", () => {
    cy.visit(Cypress.env("quiz_url"));
    const addQuizButton = cy.get(".add-quiz");
    addQuizButton.should("not.exist");
  });
});
