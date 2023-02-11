import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";

function NewCommentForm() {
    const [comment, setComment] = useState("")
    
    async function handleSubmit() {
        const res = await fetch("")

    }

    return (
        <Box container>
            <TextField />
        </Box>
    )
}

//TODO: finish comment form component