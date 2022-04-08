describe("signuptest", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url"));
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("회원가입에 성공하면 회원가입 성공페이지로 가야함", () => {
    const loginPageButton = cy.get(".login");
    loginPageButton.click();

    const signupButton = cy.get(".signup");
    signupButton.click();

    const inputId = cy.get(".signup_id");
    inputId.type("baayoo2@gmail.com");

    const inputPassword = cy.get(".signup_password");
    inputPassword.type("di1532");

    const inputCheck = cy.get(".signup_check_password");
    inputCheck.type("di1532");

    const inputName = cy.get(".signup_name");
    inputName.type("이영규{enter}");

    cy.location("pathname").should((loc) => {
      expect(loc).to.eq("/signup/success");
    });
  });
});
