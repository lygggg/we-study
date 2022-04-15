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
    "https://firebasestorage.googleapis.com/v0/b/we-study-6b4fd.appspot.com/o/windows.png?alt=media&token=0460eae5-2883-479b-8e1e-0f681fb6a46a",
    "https://firebasestorage.googleapis.com/v0/b/we-study-6b4fd.appspot.com/o/internet.png?alt=media&token=d5641aab-5978-453f-aad7-6b34ae32c042",
    "https://firebasestorage.googleapis.com/v0/b/we-study-6b4fd.appspot.com/o/js.png?alt=media&token=6685ccf1-f133-4449-8597-7e96e0cf29fd",
    "https://firebasestorage.googleapis.com/v0/b/we-study-6b4fd.appspot.com/o/react.png?alt=media&token=c2ff1256-9745-4dab-99ac-10f8ce77bad0",
    "https://firebasestorage.googleapis.com/v0/b/we-study-6b4fd.appspot.com/o/data-list.png?alt=media&token=324aed06-fa1a-41cf-a082-986ed42e15fb",
    "https://firebasestorage.googleapis.com/v0/b/we-study-6b4fd.appspot.com/o/web.png?alt=media&token=195fa84e-8330-4da2-a6e5-7bf45b0b0a5d",
  ],

  findCategories(category: string) {
    const data = this.categories.indexOf(category);
    if (data !== -1) {
      return data;
    }
  },

  findCategoriesUri(id: number) {
    return this.categoriesUri[id];
  },

  getCategories() {
    return this.categories;
  },
};

export default MenuStore;
