// LoginForm.js
import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const LoginForm = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" mt={4}>
        Login
      </Typography>
      <form>
        <TextField label="Username" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary" fullWidth mt={2}>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
