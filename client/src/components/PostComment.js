import { Grid, Paper, Avatar } from "@mui/material"

function PostComment({ comment }) {
    const { user_account_name, body } = comment
    return (
        <>
            <Paper elevation={3} style={{ padding: "20px 10px", marginTop: 25 }}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar alt="" />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{ margin: 0, textAlign: "left" }}>{user_account_name}</h4>
                        <p style={{ textAlign: "left" }}>
                            {body}
                        </p>
                        <p style={{ textAlign: "left", color: "gray" }}>
                            posted 1 minute ago {/*TODO: change comment serializer to show when comment was posted also */}
                        </p>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default PostComment;

