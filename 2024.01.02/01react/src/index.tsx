import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
// 일관성있는 ui를 관리하기 위해서 프로젝트 공통 컴포넌트를 저장해놓고 프롭스형태로 가져가서 사용하기 위해 사용
import { darkTheme } from "./theme";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>
);
