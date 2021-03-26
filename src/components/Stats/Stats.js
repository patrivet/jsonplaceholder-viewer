import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Custom components
import { getPostStats } from "../../utils/helperFunctions";

const Stats = () => {
  const [totalWords, setTotalWords] = useState(0);
  const [mostFrequentWords, setMostFrequentWords] = useState([]);

  const posts = useSelector((state) => state.posts.list);
  const loading = useSelector((state) => state.posts.loading);

  useEffect(() => {
    // Only compute when not loading & posts to process
    if (!loading && posts) {
      const { totalWords, mostFrequentWords } = getPostStats(posts);
      setTotalWords(totalWords);
      setMostFrequentWords(mostFrequentWords);
    }
  }, [posts, loading]);

  return (
    <>
      <div>The word count is {totalWords}</div>
      <div>
        The most frequently used words are: {mostFrequentWords.toString()}
      </div>
    </>
  );
};

export default Stats;
