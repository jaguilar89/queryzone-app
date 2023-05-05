import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress  from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext, useState } from 'react';
import { UserContext } from '../components/context/UserContext';
import logo from '../../src/logo-transparent.png'
import { useNavigate } from 'react-router-dom';


function LoginForm({ loading, setLoading, setShowLogin }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const theme = createTheme();
  
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });
    if (res.ok) {
      const user = await res.json();
      setUser(user)
      setLoading(false)
      navigate('/home')
    } else {
      const err = await res.json();
      setLoading(false)
      setErrors(err.errors)
    }

  }

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
            Sign in
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

            {errors && errors.map((err) => <Alert key={err} severity="error">{err}</Alert>)}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href='#' onClick={() => setShowLogin(false)} >
                  Don't have an account? Sign up here
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

export default LoginForm;