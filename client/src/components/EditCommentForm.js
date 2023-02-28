import { TextField, Dialog, DialogActions, DialogContent, Container, Button } from "@mui/material";
import { useState } from "react";

function EditCommentForm({ id, open, onClose, body, postComments, setPostComments }) {
    const [newPostComment, setNewPostComment] = useState(body)
    //console.log(id)
    function updateComment(updatedComment) {
        const updatedCommentsList = postComments.map((comment) => {
            if (updatedComment.id === comment.id) {
                return updatedComment
            } else {
                return comment
            }
        });
        setPostComments(updatedCommentsList)
    }

    async function handleSubmitEdit(e) {
        e.preventDefault()
        const res = await fetch(`/api/comments/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                body: newPostComment
            })
        })
        if (res.ok) {
            const updatedComment = await res.json();
            updateComment(updatedComment)
            onClose()
        } else {
            const err = await res.json()
            console.log(err)
        }
    }

    return (
        <Dialog
            maxWidth='xl'
            open={open}
            onClose={onClose}
        >
            <DialogContent>
                <Container
                    component='form'
                    sx={{ display: 'grid' }}
                    onSubmit={handleSubmitEdit}
                >
                    <TextField
                        fullWidth
                        multiline
                        sx={{ width: '1000px' }}
                        size='large'
                        value={newPostComment}
                        maxRows={Infinity}
                        inputProps={{
                            maxLength: 1000,
                        }}
                        onChange={(e) => setNewPostComment(e.currentTarget.value)}

                    />
                <DialogActions>
                    <Button type="submit">Save</Button>
                    <Button onClick={onClose}>Close</Button>
                </DialogActions>
                </Container>
            </DialogContent>
        </Dialog>
    )
}

export default EditCommentForm;