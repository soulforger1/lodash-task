import React from "react";
import { ToastProvider } from "./provider";
import Router from "./routes";
import { ThemeComponent } from "./theme";

const App = () => {
  return (
    <ThemeComponent>
      <ToastProvider>
        <Router />
      </ToastProvider>
    </ThemeComponent>
  );
};

export default App;
