import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "60%",
  },
  title: {
    fontWeight: 600,
  },
});

const Post = ({ post }) => {
  const classes = useStyles();

  const handleDelete = (postId) => {
    console.log("INFO: Will delete Post ID=", postId);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          User: {post.userId}
        </Typography>
        <Typography className={classes.title} variant="body2" component="p">
          {post.title}
        </Typography>
        <Typography variant="body2" component="p">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="delete"
          className={classes.margin}
          onClick={() => {
            handleDelete(post.id);
          }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
