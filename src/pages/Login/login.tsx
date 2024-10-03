import React from 'react';
import { Box, Button, TextField, Typography, Container } from '@mui/material';

const Login = () => {
    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Logging in...");
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box>
                <title>Login</title>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 8,
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '16px',
                }}
            >
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
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
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;