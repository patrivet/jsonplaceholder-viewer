import { render, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Post from "../Post";

const mockStore = configureStore();
let store;
it("should dispatch an action on button click", () => {
  store = mockStore({
    posts: [],
    loading: false,
  });

  store.dispatch = jest.fn();

  const { getByRole } = render(
    <Provider store={store}>
      <Post post={{}} />
    </Provider>
  );

  fireEvent.click(getByRole("button"));
  expect(store.dispatch).toHaveBeenCalledTimes(1);
});
