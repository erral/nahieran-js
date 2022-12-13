import React from 'react';
import MenuAppBar from './Components/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Typography,
  CssBaseline,
  Toolbar,
  Box,
  Container
} from "@mui/material"
// import { getTVPrograms } from "http://127.0.0.1:3001/src/index.js";
import DocCard from './Components/DocCard';
import { TV_DOCS } from './Docs/tv';
import { GETTING_STARTED } from './Docs/general';
import './App.css';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        // default: "#222831",
        paper: "#1B2430"
      }
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      // primary: blueGrey,
      primary: { main: "#343C46" },
      text: {
        primary: "#343C46",
        secondary: "#343C46",
      },
      divider: "#343C46",
      background: {
        // default: "#222831",
        // paper: "#1B2430"
      }
    },
  });
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Container fixed>
        <MenuAppBar />
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />

          <DocCard
            title={GETTING_STARTED.title}
            markdown={GETTING_STARTED.description} />

          <Box id="TV">
            <Typography variant="h2" id="TV" color="text.secondary" gutterBottom sx={{ marginTop: 3 }}>
              TV
            </Typography>
            {
              TV_DOCS.map(doc => <Box sx={{ marginBottom: 3 }}>
                <DocCard
                  title={doc.title}
                  markdown={doc.description}
                  actionFunction={doc.actionFunction}
                  actionParam={doc.actionParam}
                />
              </Box>)
            }
          </Box>

        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
