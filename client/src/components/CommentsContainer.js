import { Avatar, Grid, Paper } from "@mui/material";
import PostComment from "./PostComment";
/*
const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
  */

function CommentsContainer({ comments }) {
  return (
    <div style={{ padding: 14 }} className="App">
      <h1>Comments</h1>
      {comments && comments.map((comment) => <PostComment comment={comment}/>)}
    </div>
    // TODO: add input for adding a new comment
  );
}

export default CommentsContainer;