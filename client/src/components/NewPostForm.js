import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box'
import Button from "@mui/material/Button";
import { useState } from "react";


function NewPostForm() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()

        const res = await fetch('/api/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, body })
        })
        if (res.ok) {
            const post = await res.json()
            console.log(post)
        } else {
            const err = await res.json()
            console.log(err)
        }
    }
    return (
        <Container
            component='form'
            onSubmit={handleSubmit}
            sx={{ display: 'grid' }}
        >
            <TextField
                variant="filled"
                label="Title"
                onChange={(e) => setTitle(e.currentTarget.value)}
            />
            <hr />
            <TextField
                variant="filled"
                multiline
                label="Specify the details of your question..."
                rows={32}
                onChange={(e) => setBody(e.currentTarget.value)}
                inputProps={{
                    maxLength: 1000,
                }}
            />
            <hr />
            <Box
                component="div"
                sx={{ textAlign: 'center' }}>
                <Button
                    variant="contained"
                    type='submit'
                >
                    Submit
                </Button>
            </Box>
        </Container>
    )
}

export default NewPostForm;

