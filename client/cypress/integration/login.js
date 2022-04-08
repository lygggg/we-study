describe("logintest", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url"));
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("로그인 버튼을 클릭하면 로그인 페이지로 가야 함", () => {
    const loginPageButton = cy.get(".login");
    loginPageButton.click();

    cy.location("pathname").should((loc) => {
      expect(loc).to.eq("/login");
    });
  });

  it("로그인을 성공하면 메인으로 와야 함", () => {
    const loginPageButton = cy.get(".login");
    loginPageButton.click();

    const idInput = cy.get(".user_id");
    idInput.type("baayoo92@gmail.com");

    const passwordInput = cy.get(".user_password");
    passwordInput.type("dl1532{enter}");

    cy.location("pathname").should((loc) => {
      expect(loc).to.eq("/");
    });
  });

  it("로그아웃을 성공하면 로그아웃 버튼이 로그인으로 바껴야 함. ", () => {
    const logoutButton = cy.get(".logout");
    logoutButton.click();

    cy.get(".login").should("exist");
  });

  it("로그인 실패 처리가 되어야 함", () => {
    const loginPageButton = cy.get(".login");
    loginPageButton.click();

    const idInput = cy.get(".user_id");
    idInput.type("NEVER_EXIST_ID@gmail.com");

    const passwordInput = cy.get(".user_password");
    passwordInput.type("asdfasdf{enter}", { force: true });

    cy.location("pathname").should((loc) => {
      expect(loc).to.eq("/login");
    });
  });
});
