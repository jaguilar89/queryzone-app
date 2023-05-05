import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { Button } from "@mui/material";
import LoadingScreen from "./LoadingScreen";

function NewCommentForm({ postID, postComments, isLoading, setIsLoading, setPostComments }) {
    const [comment, setComment] = useState("")
    const [errors, setErrors] = useState([])

    async function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)

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
            setIsLoading(false)
            setPostComments([...postComments, comment])
            setComment(null)
            setErrors(null)
            e.target.reset()
        } else {
            const err = await res.json()
            setIsLoading(false)
            setErrors(err.errors)
        }

    }

    return (
        <Container
            component="form"
            sx={{ textAlign: 'center', paddingTop: 8 }}
            onSubmit={handleSubmit}
        >
            {isLoading && <LoadingScreen />}
            <h2>Add a comment</h2>
            <TextField
                onChange={(e) => setComment(e.target.value)}
                fullWidth
                multiline
                rows={5}
            />
            {errors && errors.map((err) => <Alert key={err} severity="error">{err}</Alert>)}
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
