import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { useState } from "react";

function NewCommentForm() {
    const [comment, setComment] = useState("")
    
    async function handleSubmit(e) {
        e.preventDefault()
        const res = await fetch("")

    }

    return (
        <Container 
        component="form" 
        sx={{textAlign: 'center', paddingTop: 8}}
        onSubmit={handleSubmit}
        >
            <h2>Add a comment</h2>
            <TextField
                onChange={(e) => setComment(e.currentTarget.value)}
                fullWidth
                multiline
                rows={5}
            />
        </Container>
    )
}

export default NewCommentForm;

//TODO: finish comment form component