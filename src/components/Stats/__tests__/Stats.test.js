import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Stats from "../Stats";
describe("Stats", () => {
  const mockStore = configureStore();
  let store;
  test("renders correctly", () => {
    store = mockStore({
      posts: [],
      loading: false,
    });

    const { container } = render(
      <Provider store={store}>
        <Stats />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
