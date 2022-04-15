import { User } from "./user";

export interface Quiz {
  answerText: string;
  category: number;
  img: string;
  quizText: string;
  user: User[];
  __v: number;
  _id: string;
  like?: boolean;
  likeCount?: number;
  syncTime?: Date;
}
