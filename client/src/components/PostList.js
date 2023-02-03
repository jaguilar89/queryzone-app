import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";


function PostList({ postList, setPostList }) {
   const navigate = useNavigate();

   useEffect(() => {
      (async () => {
         const res = await fetch('/api/posts')
         if (res.ok) {
            const posts = await res.json()
            setPostList(posts)
         } else {
            const err = await res.json()
            console.log(err)
         }
      })()
   }, []);


   const postCards = postList.map((post) => (
      <PostCard
         key={post}
         postId={post.id}
         author={post.user_account_name}
         title={post.title}
         body={post.body}
      />
   ))

   const container = {
      width: '100%',
      height: '100%',
      display: 'inline-block',
      alignItems: 'center',
      textAlign: 'center',
      border: '1px solid black'
   }

   const content = {
      overflowY: 'scroll',
      width: '720px',
      margin: 'auto',
      textAlign: 'left',
      backgroundColor: 'white',
      color: 'blue',
      border: '1px solid red',
      overflowWrap: 'break-word',
   }


   return (
      <Box sx={container} component='div'>
         <Button
            variant="contained"
            sx={{ margin: '20px' }}
            onClick={() => navigate("/posts/new")}
         >
            Ask Question
         </Button>
         <Box sx={content}>
            <Stack spacing={3}>
               {postCards}
            </Stack>

         </Box>
      </Box>
   )
}

export default PostList;