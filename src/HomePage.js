import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box } from '@mui/material';

class HomePage extends React.Component {
    render() {
      return (
        <Box sx={{ width: '100%' }}>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/password_generator">Algo-Based Password Generator</Link>
            </nav>
        </Box>
    );
  }
}

export default HomePage;