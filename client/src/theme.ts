export interface ITheme {
  body: string;
  text: string;
  mainColor: string;
  toggleBackground: string;
  header: string;
}

export const lightTheme = {
  body: "#FFFFFF",
  text: "#353535",
  mainColor: "#7038d4",
  toggleBackground: "#F6F6F6",
  header: "#4C4C4C",
} as ITheme;

export const darkTheme = {
  body: "#282c35",
  text: "#eee",
  mainColor: "#7038d4",
  toggleBackground: "#333333",
  header: "#3A3A3A",
} as ITheme;

export type Theme = typeof lightTheme;
