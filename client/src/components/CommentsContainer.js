import Container from "@mui/material/Container";
import PostComment from "./PostComment";
import { useEffect } from "react";
/*
const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
  */

function CommentsContainer({ postComments }) {

  return (
    <Container sx={{ textAlign: 'center' }}>
      <h1>Comments</h1>
      {postComments && postComments.map((comment) => <PostComment key={comment.id} comment={comment} />)}
    </Container>
  )
}

export default CommentsContainer;