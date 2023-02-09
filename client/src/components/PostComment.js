import { Grid, Paper, Avatar } from "@mui/material"

function PostComment({ comment }) {
    return (
        <>
            <Paper style={{ padding: "40px 20px", marginTop: 75 }}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar alt="Remy Sharp" />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{ margin: 0, textAlign: "left" }}>{comment.user_account_name}</h4> 
                        <p style={{ textAlign: "left" }}>
                            {comment.body}
                        </p>
                        <p style={{ textAlign: "left", color: "gray" }}>
                            posted 1 minute ago {/*change comment serializer to show when comment was posted also */}
                        </p>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default PostComment;

