import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import PostList from "../PostList";
import { mockPosts } from "../../../mocks/mocks";
describe("PostList", () => {
  const mockStore = configureStore();
  const store = mockStore({
    posts: [],
    loading: false,
  });
  // let component;
  test("renders correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <PostList posts={mockPosts} />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
