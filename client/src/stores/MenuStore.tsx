import { object } from "yup/lib/locale";

const MenuStore = {
  categories: [
    "운영체제",
    "네트워크",
    "자바스크립트",
    "React",
    "자료구조",
    "프론트엔드 질문",
  ],

  categoriesUri: [
    "../../../assets/imgs/windows.png",
    "../../../assets/imgs/internet.png",
    "../../../assets/imgs/js.png",
    "../../../assets/imgs/react.png",
    "../../../assets/imgs/data-list.png",
    "../../../assets/imgs/web.png",
  ],

  findCategories(id: number) {
    return this.categories[id];
  },

  findCategoriesUri(id: number) {
    return this.categoriesUri[id];
  },

  getCategories() {
    return this.categories;
  },
};

export default MenuStore;
