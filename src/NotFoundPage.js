import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Typography } from '@mui/material';

class NotFoundPage extends React.Component {
    render() {
      return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h1" gutterBottom>
                404 Page Not Found
            </Typography>
        </Box>
    );
  }
}

export default NotFoundPage;