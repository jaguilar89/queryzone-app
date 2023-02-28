import Container from "@mui/material/Container";
import PostComment from "./PostComment";

function CommentsContainer({ postComments, setPostComments }) {

  return (
    <Container sx={{ textAlign: 'center' }}>
      <h1>Comments</h1>
      {postComments &&
        postComments
          .map((comment) => (
            <PostComment
              key={comment.id}
              comment={comment}
              postComments={postComments}
              setPostComments={setPostComments}
            />
          ))}
    </Container>
  )
}

export default CommentsContainer;