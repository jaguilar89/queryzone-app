import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Post() {
    const [post, setPost] = useState([])
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/posts/${id}`)
            if (res.ok) {
                const post = await res.json()
                setPost(post)
                console.log(post)
            }
        })()
    }, []);

    return (
        <div className="post">
            <h1>{post.title}</h1>
            <cite>Asked By {post.user_account_name}</cite>
            <p>{post.body}</p>
        </div>
    )
}

export default Post;