import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";

function MainContent() {
   const [postList, setPostList] = useState([])

   useEffect(() => {
      (async () => {
         const res = await fetch('/api/posts')
         if (res.ok) {
            const posts = await res.json()
            setPostList(...postList, posts)
         } else {
            const err = await res.json()
            console.log(err)
         }
      })()
   }, []);

   const container = {
      width: '100%',
      height: '100%',
      display: 'inline-block',
      alignItems: 'center',
      textAlign: 'left',
      border: '1px solid black'
   }

   const content = {
      overflowY: 'scroll',
      width: '720px',
      margin: 'auto',
      backgroundColor: 'white',
      color: 'blue',
      border: '1px solid red',
      overflowWrap: 'break-word',
   }

   return (
      <Box sx={container}>
         <Box sx={content}>
            <Stack spacing={3}>
               {postList.map((post) => (
                  <PostCard
                     key={post.id}
                     id={post.id}
                     author={post.user_account_name}
                     title={post.title}
                     body={post.body}
                  />
               ))}
            </Stack>

         </Box>
      </Box>
   )
}

export default MainContent;