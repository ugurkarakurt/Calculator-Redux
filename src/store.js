import { configureStore } from "@reduxjs/toolkit";
import calculatorRecuder from "./calculatorSlice";

export default configureStore({
  reducer: { calculator: calculatorRecuder  },
});
