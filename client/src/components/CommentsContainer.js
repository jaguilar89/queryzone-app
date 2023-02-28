import Container from "@mui/material/Container";
import { useState } from "react";
import PostComment from "./PostComment";

function CommentsContainer({ postComments, setPostComments }) {
  const [lastDeletedComment, setLastDeletedComment] = useState(null)
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
              onDelete={setLastDeletedComment}
            />
          ))}
    </Container>
  )
}

export default CommentsContainer;