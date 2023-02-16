import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { useState } from "react";
import { Button } from "@mui/material";

function NewCommentForm({ postID, postComments, setPostComments }) {
    const [comment, setComment] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        const res = await fetch("/api/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                body: comment,
                post_id: postID
            })
        })
        if (res.ok) {
            const comment = await res.json()
            setPostComments([...postComments, comment])
        } else {
            const err = await res.json()
            console.log(err)
        }

    }

    return (
        <Container
            component="form"
            sx={{ textAlign: 'center', paddingTop: 8 }}
            onSubmit={handleSubmit}
        >
            <h2>Add a comment</h2>
            <TextField
                onChange={(e) => setComment(e.currentTarget.value)}
                fullWidth
                multiline
                rows={5}
            />
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3 }}
            >
                Submit
            </Button>
        </Container>
    )
}

export default NewCommentForm;

//TODO: finish comment form component