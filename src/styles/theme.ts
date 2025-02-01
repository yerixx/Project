export type Theme = {
  mainColor: string;
  subColor: string;
  grayColor: string;
  lightGrayColor: string;
  fontColor: string;
  typography: {
    fontFamily: string;
  };
};

export const defaultTheme: Theme = {
  mainColor: "#000",
  subColor: "#fff",
  grayColor: "#999",
  lightGrayColor: "#f0f0f0",
  fontColor: "#fff",
  typography: {
    fontFamily: '"Neue Haas Grotesk", sans-serif',
  },
};
export const darkTheme: Theme = {
  mainColor: "#000",
  subColor: "#000",
  grayColor: "#999",
  lightGrayColor: "#f0f0f0",
  fontColor: "#fff",
  typography: {
    fontFamily: '"Neue Haas Grotesk", sans-serif',
  },
};
