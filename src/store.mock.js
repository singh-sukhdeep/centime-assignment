import configureStore from "redux-mock-store";

export const mockStore = configureStore([]);

export const mockedStore = mockStore({
  reducer: {
    transaction: {
      transactions: [],
      status: "idle",
      error: null,
    },
    appState: {
      appMode: "light",
      appLanguage: "en",
    },
  },
});
