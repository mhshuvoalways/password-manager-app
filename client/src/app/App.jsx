import React, { useEffect } from "react";
import Axios from "../utils/axios";
import Context from "./Context";
import Router from "./Router";

const App = () => {
  useEffect(() => {
    Axios.get("/")
      .then(() => {})
      .catch(() => {});
  }, []);

  return (
    <Context>
      <Router />
    </Context>
  );
};

export default App;
