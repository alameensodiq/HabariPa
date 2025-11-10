import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./auth";
// import { adminApis } from "./admin";
// import { corporateApis } from "./corporate";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer
    // [adminApis.reducerPath]: adminApis.reducer,
    // [corporateApis.reducerPath]: corporateApis.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware
      //   adminApis.middleware,
      //   corporateApis.middleware
    )
});

setupListeners(store.dispatch);

export default store;
