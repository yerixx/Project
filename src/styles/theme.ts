export type Theme = {
  mainColor: string;
  subColor: string;
  grayColor: string;
  fontColor: string;
  typography: {
    fontFamily: string;
  };
};

export const defaultTheme: Theme = {
  mainColor: "#000",
  subColor: "#fff",
  grayColor: "#999",
  fontColor: "#fff",
  typography: {
    fontFamily: '"Neue Haas Grotesk", sans-serif',
  },
};
export const darkTheme: Theme = {
  mainColor: "#000",
  subColor: "#000",
  grayColor: "#999",
  fontColor: "#fff",
  typography: {
    fontFamily: '"Neue Haas Grotesk", sans-serif',
  },
};
