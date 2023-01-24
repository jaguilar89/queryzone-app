import { CardContent,CardHeader, Link, Typography } from "@mui/material";
import Card from "@mui/material/Card";

function PostCard({ id, author, title, body }) {

    return (
       <Link href={`/posts/${id}`} underline="none">
         <Card sx={{ width: 'auto' }}>
            <CardHeader title={title} subheader={author} />
        </Card>
       </Link>
    )
}

export default PostCard;