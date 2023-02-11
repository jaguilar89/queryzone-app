import Container from "@mui/material/Container";
import PostComment from "./PostComment";
/*
const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
  */

function CommentsContainer({ comments }) {
  return (
    <Container sx={{textAlign: 'center'}}>
      <h1>Comments</h1>
      {comments && comments.map((comment) => <PostComment comment={comment}/>)}
    </Container>
  )
}

export default CommentsContainer;