import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Box } from '@mui/material';

export default function About() {
    return (
        <Box sx={{textAlign:'center'}}>
            <h1>About</h1>
            <p>
                QueryZone is my Phase 4 project for Flatiron School's Software Engineering program. It is a simple question and answer app that allows you to create an account, view a list of posted questions and post answers of your own.
                
            </p>
    
            <br />
            It is written in React and Ruby on Rails, and utilizes React Router (v6) and Material UI.
            <h1>Contact</h1>
            <div id="contact-info">
                <a href="https://github.com/jaguilar89/mixr-app">
                    <GitHubIcon 
                        fontSize="large"
                        sx={{
                            transition: "all .2s ease-in-out",
                            fontSize: "2.8rem",
                            paddingRight: "1.75rem",
                            "&:hover": {
                                transform: "scale(1.2)"
                            }
                        }}
                     />
                </a>
                <a href="mailto:jaguilarny@gmail.com">
                    <EmailIcon 
                        fontSize="large"
                        sx={{
                            transition: "all .2s ease-in-out",
                            fontSize: "2.8rem",
                            paddingRight: "1.75rem",
                            "&:hover": {
                                transform: "scale(1.2)"
                            }
                        }}
                     />
                </a>
                <a href="https://www.linkedin.com/in/jaguilar89/">
                    <LinkedInIcon 
                        fontSize="large" 
                        sx={{
                            transition: "all .2s ease-in-out",
                            fontSize: "2.8rem",
                            "&:hover": {
                                transform: "scale(1.2)"
                            }
                        }}
                    />
                </a>
            </div>
        </Box>
    )
};