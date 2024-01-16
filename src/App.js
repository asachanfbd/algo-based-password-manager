import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className="App">
      <div className='theme-rounded'>
        <Container maxWidth="lg" disableGutters="true" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <AppRoutes />
        </Container>
      </div>
    </div>
  );
}


export default App;