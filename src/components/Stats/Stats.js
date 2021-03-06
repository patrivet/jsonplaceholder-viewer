import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Stats.css";

// Custom components
import { getPostStats } from "../../utils/helperFunctions";

const Stats = () => {
  const useStyles = makeStyles({
    root: {
      width: "30%",
      margin: 20,
    },
    statsValue: {
      fontWeight: 600,
    },
  });

  const [totalWords, setTotalWords] = useState(0);
  const [mostFrequentWords, setMostFrequentWords] = useState([]);

  const posts = useSelector((state) => state.posts.list);
  const ready = useSelector((state) => state.posts.ready);

  useEffect(() => {
    // Only compute when app is ready & posts to process
    if (ready && posts) {
      const { totalWords, mostFrequentWords } = getPostStats(posts);
      totalWords && setTotalWords(totalWords);
      mostFrequentWords && setMostFrequentWords(mostFrequentWords);
    }
  }, [posts, ready]);

  const classes = useStyles();

  return (
    <div className="stats">
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Total Word Count:
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            className={classes.statsValue}
          >
            {totalWords}
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Top 5 Most Frequent Words:
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            className={classes.statsValue}
          >
            {mostFrequentWords.toString()}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Stats;
