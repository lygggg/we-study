const QuestionStore = {
  questions: [
    {
      id: 1,
      category: "자바스크립트",
      description: "문제1",
    },
    {
      id: 2,
      category: "자바스크립트",
      description: "문제2",
    },
    {
      id: 3,
      category: "자바스크립트",
      description: "문제3",
    },
    {
      id: 4,
      category: "자바스크립트",
      description: "문제4",
    },
  ],

  getQuestions() {
    return this.questions;
  },
};

export default QuestionStore;
