import React from "react";
import Router from "./routes";
import { ThemeComponent } from "./theme";

const App = () => {
  return (
    <ThemeComponent>
      <Router />
    </ThemeComponent>
  );
};

export default App;
