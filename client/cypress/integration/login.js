/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("logintest", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("로그인 버튼을 클릭하면 로그인 페이지로 가야 함", () => {
    cy.get(".login").click();

    cy.location("pathname").should((loc) => {
      expect(loc).to.eq("/login");
    });
  });

  it("로그인을 성공하면 메인으로 와야 함", () => {
    cy.get(".login").click();

    cy.get(".user_id").type("baayoo92@gmail.com");
    cy.get(".user_password").type("dl1532{enter}");

    cy.location("pathname").should((loc) => {
      expect(loc).to.eq("/");
    });
  });

  it("로그인 실패 처리가 되어야 함", () => {
    cy.get(".login").click();

    cy.get(".user_id").type("NEVER_EXIST_ID@gmail.com");
    cy.get(".user_password").type("asdfasdf{enter}", { force: true });

    cy.location("pathname").should((loc) => {
      expect(loc).to.eq("/login");
    });
  });
});
