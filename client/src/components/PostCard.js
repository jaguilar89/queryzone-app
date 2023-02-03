import { CardHeader, Link } from "@mui/material";
import Card from "@mui/material/Card";

function PostCard({ postId, author, title }) {

    return (
        <Link href={`/posts/${postId}`} underline="none">
            <Card sx={{ width: 'auto' }}>
                <CardHeader title={title} subheader={author} />
            </Card>
        </Link>
    )
}

export default PostCard;