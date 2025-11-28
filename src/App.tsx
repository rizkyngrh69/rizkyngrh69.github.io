import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Hero from './components/Hero';
import About from './components/About';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { WavyBackground } from './components/ui/wavy-background';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ffffff' },
    background: { default: '#0a0a0a', paper: '#111111' },
    text: { primary: '#ffffff', secondary: '#999999' },
  },
  typography: {
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: { fontSize: '4rem', fontWeight: 700, lineHeight: 1.1 },
    h2: { fontSize: '2.5rem', fontWeight: 600, lineHeight: 1.2 },
    body1: { fontSize: '1.1rem', lineHeight: 1.6 },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <WavyBackground 
          colors={[
            "#3b82f6",
            "#1d4ed8", 
            "#60a5fa",
            "#93c5fd",
            "#1e40af"
          ]}
          waveWidth={30}
          backgroundFill="#0a0a0a"
          blur={8}
          speed="fast"
          waveOpacity={0.4}
        />
        <Navigation />
        <Hero />
        <Banner />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
