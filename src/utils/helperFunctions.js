export const getPostStats = (posts) => {
  if (!posts) {
    console.warn(
      "WARNING: helpFunctions.getPostStats: expected parameter posts missing; returning null."
    );
    return null;
  }
  let totalWords = 0,
    mostFrequentWords,
    wordCounts = {};

  posts.forEach((post) => {
    // Remove line breaks and split post into an array.
    const postWords = post.body.replaceAll("\n", " ").split(" ");

    // Iterate posts, count word occurances and sum words total.
    postWords.forEach((word) => {
      if (!wordCounts[word]) {
        wordCounts[word] = 1;
      } else {
        wordCounts[word]++;
      }
      totalWords++;
    });
  });

  // Convert the object to array and sort.
  const wordCountsArr = Object.entries(wordCounts);
  wordCountsArr.sort(([, a], [, b]) => b - a);

  // Pick the first five words.
  mostFrequentWords = wordCountsArr.splice(0, 5).reduce((acc, [word]) => {
    acc.push(word);
    return acc;
  }, []);

  return { totalWords, mostFrequentWords };
};
