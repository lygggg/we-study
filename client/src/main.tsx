import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { QueryClientProvider } from "react-query";
import "react-loading-skeleton/dist/skeleton.css";

import "./index.css";
import App from "./App";
import { queryClient } from "./queryClient";

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </QueryClientProvider>,
  document.getElementById("root"),
);
