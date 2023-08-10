import { CardHeader, Link } from "@mui/material";
import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Card from "@mui/material/Card";

function PostCard({ postId, title, created_at, author }) {
    dayjs.extend(relativeTime)
    return (
        <Link href={`/posts/${postId}`} underline="none">
            <Card sx={{ width: 'auto', border: '1px solid gray' }}>
                <CardHeader title={title} subheader={`${author} asked ${dayjs(created_at).fromNow()}`} />
            </Card>
        </Link>
    )
}

export default PostCard;
