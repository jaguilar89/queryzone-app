import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box'
import Button from "@mui/material/Button";
import { useState } from "react";

function NewPostForm() {
    return (
        <Container
            component='div'
            sx={{ display: 'grid' }}
        >
            <TextField
                variant="filled"
                label="Title"
            />
            <hr />
            <TextField
                variant="filled"
                multiline
                label="Specify the details of your question..."
                rows={32}
                inputProps={{
                    maxLength: 1000,
                }}
            />
            <hr />
            <Box
                component="div"
                sx={{ textAlign: 'center' }}>
                <Button variant="contained">Submit</Button>
            </Box>
        </Container>
    )
}

export default NewPostForm;

