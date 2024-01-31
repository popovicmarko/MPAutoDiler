// RegisterForm.js
import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const RegisterForm = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" mt={4}>
        Register
      </Typography>
      <form>
        <TextField label="Username" fullWidth margin="normal" />
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary" fullWidth mt={2}>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default RegisterForm;
