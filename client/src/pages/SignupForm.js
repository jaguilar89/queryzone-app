import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext, useState } from 'react';
import { UserContext } from '../components/context/UserContext';
import logo from '../../src/logo-transparent.png'
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/jaguilar89">
          Jose Aguilar
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  } 

function SignupForm({loading, setLoading, setShowLogin }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const theme = createTheme()

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)

        const res = await fetch("/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation
            })
        })

        if (res.ok) {
            const user = await res.json()
            setLoading(false)
            setUser(user)
            navigate('/home')
        } else {
            const err = await res.json()
            setLoading(false)
            setErrors(err.errors)
        }

    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
            {loading && 
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          }
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <img src={logo} width="300px" height="40px" alt='logo'/>
                    <br />
                    <Typography component="h1" variant="h5">
                        Sign Up For An Account
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            onChange={(e) => setUsername(e.currentTarget.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.currentTarget.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password-confirmation"
                            label="Password Confirmation"
                            type="password"
                            id="password-confirmation"
                            onChange={(e) => setPasswordConfirmation(e.currentTarget.value)}
                        />

                        {errors.map((err) => <Alert key={err} severity="error">{err}</Alert>)}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Create Account
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href='#' onClick={() => setShowLogin(true)} >
                                    Already have an account? Log in here.
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
            <br />
            {Copyright()}
        </ThemeProvider>
    );
}

export default SignupForm;