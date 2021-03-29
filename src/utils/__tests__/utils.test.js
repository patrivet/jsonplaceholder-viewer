import { mockPosts } from "../../mocks/mocks";
import { getPostStats } from "../helperFunctions";
describe("utils", function () {
  describe("getPostStats", function () {
    it("should return word count across posts", function () {
      const { totalWords } = getPostStats(mockPosts);
      expect(totalWords).toBe(16);
    });
    it("should return most frequent words across posts", function () {
      const { mostFrequentWords } = getPostStats(mockPosts);
      expect(mostFrequentWords).toEqual(["a", "b", "c", "d", "e"]);
    });
  });
});
