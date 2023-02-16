import { Grid, Paper, Avatar, Button } from "@mui/material"
import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useContext } from "react"
import { UserContext } from "./context/UserContext"

function PostComment({ comment }) {
    const { id, user_account_name, user_account_id, body, created_at } = comment
    const { user } = useContext(UserContext)
    dayjs.extend(relativeTime)

    const canDelete = user.id === user_account_id
    const deleteButton = canDelete ? <Grid item container direction='column' alignItems='flex-start'><Button size='small' variant='contained' onClick={handleDelete}>DELETE</Button></Grid> : null

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
                            Posted {dayjs(created_at).fromNow()}
                        </p>
                    </Grid>
                </Grid>
                {deleteButton}
            </Paper>
        </>
    )
}

export default PostComment;

