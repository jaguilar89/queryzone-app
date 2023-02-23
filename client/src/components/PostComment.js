import { Grid, Paper, Avatar, Button, Box, ButtonGroup } from "@mui/material"
import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useContext, useState } from "react"
import { UserContext } from "./context/UserContext"
import EditCommentForm from "./EditCommentForm"

function PostComment({ comment, postComments, setPostComments }) {
    const { id, user_account_name, user_account_id, body, created_at } = comment
    const { user } = useContext(UserContext)
    const [open, setOpen] = useState(false)
    dayjs.extend(relativeTime)

    const canDelete = user.id === user_account_id //delete/edit button will only display if the post belongs to the logged in user
    const editDeleteButton = canDelete ?
        <Box m={1} display='flex' justifyContent='flex-end' alignContent='flex-end'>
            <ButtonGroup variant="contained">
                <Button onClick={handleClickEdit}>Edit</Button>
                <Button onClick={handleDelete}>Delete</Button>
            </ButtonGroup>
        </Box> : null

    function handleClickEdit() {
        setOpen(true)
    }

    function handleClickClose() {
        setOpen(false)
    }

    function handleDelete(e) {
        fetch(`/api/comments/${id}`, {
            method: 'DELETE'
        })
            .then(window.location.reload())
    }

    return (
        <>
            <Paper elevation={3} style={{ padding: "20px 10px", marginTop: 25 }}>
                <Grid container wrap="nowrap" spacing={2} direction='row'>
                    <Grid item>
                        <Avatar alt="" />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{ margin: 0, textAlign: "left" }}>{user_account_name}</h4>
                        <p style={{ textAlign: "left" }}>
                            {body}
                        </p>
                        <p style={{ textAlign: "left", color: "gray" }}>
                            Answered {dayjs(created_at).fromNow()}
                        </p>
                        {editDeleteButton}
                    </Grid>
                </Grid>
            </Paper>
            {open && <EditCommentForm
                id={id}
                open={open}
                setOpen={setOpen}
                onClose={handleClickClose}
                body={body}
                postComments={postComments}
                setPostComments={setPostComments}
            />}
        </>
    )
}

export default PostComment;

