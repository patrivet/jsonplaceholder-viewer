import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";

// Custom components
import { removePost } from "../../store/actions/postsActions";

const useStyles = makeStyles({
  root: {
    width: "60%",
    display: "flex",
  },
  title: {
    fontWeight: 600,
  },
});

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleDelete = (id) => {
    dispatch(removePost(id));
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
