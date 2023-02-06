import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Divider } from "@mui/material";
import Comments from "../components/Comments";

function Post() {
    const [post, setPost] = useState([])
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/posts/${id}`)
            if (res.ok) {
                const post = await res.json()
                setPost(post)
            }
        })()
    }, [id]);

    return (
       <>
        <Container component='div' sx={{border: '1px solid red'}}>
            <h1>{post.title}</h1>
            <cite>Asked by {post.user_account_name}</cite>
            <p>{post.body}</p>
        </Container>
        <Divider />
        <Comments />
       </>
    )
}

export default Post;