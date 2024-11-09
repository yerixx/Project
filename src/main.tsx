import { RecoilRoot } from "recoil";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";
import App from "./Root.tsx";

createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>
);
