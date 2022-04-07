describe("signuptest", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("회원가입에 성공하면 회원가입 성공페이지로 가야함", () => {
    cy.get(".login").click();
    cy.get(".signup").click();

    cy.get("signup_id").type("baayoo2@gmail.com");
    cy.get("signup_password").type("dl1532");
    cy.get("signup_check_password").type("di1532");
    cy.get("signup_name").type("이영규{enter}");
    cy.location("pathname").should((loc) => {
      expect(loc).to.eq("/signup/success");
    });
  });
});
