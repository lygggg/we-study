const MenuStore = {
  categories: [
    "운영체제",
    "네트워크",
    "자바스크립트",
    "React",
    "자료구조",
    "프론트엔드 질문",
  ],

  categoriesUri: {
    0: "../../../assets/imgs/windows.png",
    1: "../../../assets/imgs/internet.png",
    2: "../../../assets/imgs/js.png",
    3: "../../../assets/imgs/react.png",
    4: "../../../assets/imgs/data-list.png",
    5: "../../../assets/imgs/web.png",
  },

  findCategories(id) {
    return this.categoriesUri[id];
  },

  getCategories() {
    return this.categories;
  },
};

export default MenuStore;
