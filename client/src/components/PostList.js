import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from '@mui/material/Card'
import { CardContent, Typography } from "@mui/material";

function MainContent() {
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
      backgroundColor: 'white',
      color: 'blue',
      border: '1px solid red',
      overflowWrap: 'break-word',
   }

   return (
      <Box sx={container}>
         <Box sx={content}>
            <Stack spacing={3}>
              <Card sx={{width: 'auto'}}>
               <CardContent>
                  <Typography variant="h5">
                     something 
                  </Typography>
                  <Typography variant="body2">
                     Post Preview
                  </Typography>
               </CardContent>
              </Card>
              <Card sx={{width: 'auto'}}>
               <CardContent>
                  <Typography variant="h5">
                     Post Titleeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddd
                  </Typography>
                  <Typography variant="body2">
                     Post Preview
                  </Typography>
               </CardContent>
              </Card>
              <Card sx={{width: 'auto'}}>
               <CardContent>
                  <Typography variant="h5">
                     Post Titleeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddd
                  </Typography>
                  <Typography variant="body2">
                     Post Preview
                  </Typography>
               </CardContent>
              </Card>
              <Card sx={{width: 'auto'}}>
               <CardContent>
                  <Typography variant="h5">
                     Post Titleeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddd
                  </Typography>
                  <Typography variant="body2">
                     Post Preview
                  </Typography>
               </CardContent>
              </Card>
            </Stack>

         </Box>
      </Box>
   )
}

export default MainContent;