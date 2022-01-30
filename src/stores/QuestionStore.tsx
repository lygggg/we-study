const QuestionStore = {
  questions: [
    {
      id: 1,
      category: "자바스크립트",
      description: "문제1문제1문제1문제1문제1문제1문제1문제1문제1문제1",
      user: "이영규",
    },
    {
      id: 2,
      category: "자바스크립트",
      description: "문제1문제1문제1문제1문제1문제1문제1문제1문제1문제1",
      user: "제프 베조스",
    },
    {
      id: 3,
      category: "자바스크립트",
      description: "문제3문제1문제1문제1문제1문제1문제1문제1문제1문제1문제1",
      user: "은가누",
    },
    {
      id: 4,
      category: "자바스크립트",
      description: "문제4문제1문제1문제1문제1문제1문제1문제1문제1문제1문제1",
      user: "마이클 조던",
    },
  ],

  getQuestions() {
    return this.questions;
  },
};

export default QuestionStore;
