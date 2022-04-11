describe("quiz", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("quiz_url"));
  });

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
  });

  it("가져온 퀴즈가 데이터베이스에 있는 데이터와 일치해야함", () => {
    cy.request("http://localhost:3000/quizs?category=0")
      .as("w")
      .then((res) => {
        console.log(res);
        for (const quiz of res.body.quizs) {
          cy.get(".quiz-item").contains(quiz.quizText).should("exist");
          cy.get(".quiz-item").contains(quiz.user[0].name).should("exist");
        }
      });
    // cy.wait("@w");
  });

  it("로그인 상태에선 퀴즈 추가 버튼이 보여야 함", () => {
    const addQuizButton = cy.get(".add-quiz");
    addQuizButton.should("exist");
  });

  it("퀴즈를 추가하면 퀴즈가 추가되고 추가한 문제, 총 문제가 1 증가해야 함", () => {
    cy.get(".my-quiz-count").then((count) => {
      cy.get(".quiz-total-count").then((totaCount) => {
        const quizCount1 = count.text();
        const quizTotalCount1 = totaCount.text();

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

        cy.visit(Cypress.env("quiz_url"));

        const quizText = cy.get(".open-quiz");
        quizText.eq(0).then((quizText) => {
          expect(quizText.text()).to.eq("test");
        });

        const myQuizCount = cy.get(".my-quiz-count");

        myQuizCount.then((count) => {
          const quizCount2 = count.text();
          expect(parseInt(quizCount1) + 1).to.eq(parseInt(quizCount2));
        });

        const quizTotalCount = cy.get(".quiz-total-count");
        quizTotalCount.then((totaCount) => {
          const quizTotalCount2 = totaCount.text();
          expect(parseInt(quizTotalCount1) + 1).to.eq(
            parseInt(quizTotalCount2),
          );
        });
      });
    });
  });

  it("퀴즈를 클릭하고 문제를 확인할 수 있어야함", () => {
    const openQuizButton = cy.get(".open-quiz").eq(0);
    openQuizButton.click();

    const openQuizAnswer = cy.get(".open-quiz-answer");
    openQuizAnswer.click();

    const quizAnswer = cy.get(".quiz-answer");
    quizAnswer.should("exist");
  });

  it("퀴즈를 업데이트하면 퀴즈가 변경되어야함.", () => {
    const optionModal = cy.get(".quiz-option-modal").eq(0);
    optionModal.click();

    const updateButton = cy.get(".update-quiz");
    updateButton.click();

    const quizTitle = cy.get(".quiz-body");
    quizTitle.clear();

    const quizAnswer = cy.get(".quiz-answer");
    quizAnswer.clear();

    const setQuizTitle = cy.get(".quiz-body");
    setQuizTitle.type("test1");

    const setQuizAnswer = cy.get(".quiz-answer");
    setQuizAnswer.type("test1");

    const sendButton = cy.get(".quiz-submit");
    sendButton.click();

    cy.visit(Cypress.env("quiz_url"));

    const openQuizButton = cy.get(".open-quiz").eq(0);
    openQuizButton.then((quizText) => {
      expect(quizText.text()).to.eq("test1");
    });
  });

  it("퀴즈를 좋아요하면 소장한 문제가 1 증가하고 소장한 문제에 쌓여야함", () => {
    cy.get(".like-quiz-count").then((count) => {
      const quizCount1 = count.text();

      const likeButton = cy.get(".like-quiz").eq(0);
      likeButton.click();

      const checkLikeButton = cy.get(".like-button");
      checkLikeButton.click();

      cy.visit(Cypress.env("quiz_url"));

      cy.get(".like-quiz-count").then((count) => {
        const quizCount2 = count.text();
        expect(parseInt(quizCount1) + 1).to.eq(parseInt(quizCount2));
      });
    });

    const getLikeQuizButton = cy.get(".get-like-quiz-button");
    getLikeQuizButton.click();

    const quizTitle = cy.get(".open-quiz");
    quizTitle.contains("test1");
  });

  it("퀴즈를 좋아요를 취소하면 소장한 문제가 -1 되고 소장한 문제에서 삭제되어야함", () => {
    cy.get(".like-quiz-count").then((count) => {
      const quizCount1 = count.text();

      const unLikeButton = cy.get(".unlike-quiz");
      unLikeButton.eq(0).click();

      const likeButton = cy.get(".like-button");
      likeButton.click();

      cy.visit(Cypress.env("quiz_url"));

      cy.get(".like-quiz-count").then((count) => {
        const quizCount2 = count.text();
        expect(parseInt(quizCount1) - 1).to.eq(parseInt(quizCount2));
      });
    });

    const getLikeQuizButton = cy.get(".get-like-quiz-button");
    getLikeQuizButton.click();

    const quizTitle = cy.get(".open-quiz");
    quizTitle.should("not.exist");
  });

  it("퀴즈를 삭제하면 내가 추가한 문제, 총 문제가 -1 감소하고 해당 퀴즈가 삭제되어야함", () => {
    cy.get(".my-quiz-count").then((count) => {
      cy.get(".quiz-total-count").then((totalCount) => {
        const quizCount1 = count.text();
        const quizTotalCount1 = totalCount.text();

        const optionModal = cy.get(".quiz-option-modal");
        optionModal.eq(0).click();

        const removeButton = cy.get(".remove-quiz");
        removeButton.click();

        cy.visit(Cypress.env("quiz_url"));

        cy.get(".my-quiz-count").then((count) => {
          const quizCount2 = count.text();
          expect(parseInt(quizCount1) - 1).to.eq(parseInt(quizCount2));
        });

        cy.get(".quiz-total-count").then((totalCount) => {
          const quizTotalCount2 = totalCount.text();
          expect(parseInt(quizTotalCount1) - 1).to.eq(
            parseInt(quizTotalCount2),
          );
        });
      });
    });
    const quizTitle = cy.get(".open-quiz");
    quizTitle.should("not.contain", "text1");
  });

  it("로그아웃 상태에선 퀴즈추가 버튼이 안보여야함.", () => {
    const logoutButton = cy.get(".logout");
    logoutButton.click();

    const addQuizButton = cy.get(".add-quiz");
    addQuizButton.should("not.exist");
  });
});
