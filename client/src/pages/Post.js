import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Button, ButtonGroup, Container, Divider } from "@mui/material";
import CommentsContainer from "../components/CommentsContainer";
import NewCommentForm from "../components/NewCommentForm";

function Post() {
    const [post, setPost] = useState([])
    const [postComments, setPostComments] = useState([])
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/posts/${id}`)
            if (res.ok) {
                const post = await res.json()
                setPost(post)
                setPostComments(post.comments)
            }
        })()
    }, [id]);

    return (
        <>
            <Container component='div'>
                <h1>{post.title}</h1>
                <cite>Asked by User</cite>
                <p>{post.body}</p>
                <Box
                    m={1}
                    display='flex'
                    justifyContent="flex-end"
                    alignItems="flex-end"
                >
                    {/* <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </ButtonGroup> */}
                </Box>
            </Container>
            <Divider />
            <CommentsContainer
                postComments={postComments}
                setPostComments={setPostComments}
            />
            <NewCommentForm
                postID={id}
                postComments={postComments}
                setPostComments={setPostComments}
            />
        </>
    )
}

export default Post;