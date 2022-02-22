import { User } from "./user";

export interface Quiz {
  answerText: String;
  category: Number;
  img: String;
  quizText: String;
  user: Array<User>;
  __v: Number;
  _id: String;
}
