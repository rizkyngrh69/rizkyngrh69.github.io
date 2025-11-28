import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Hero: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'transparent',
        position: 'relative',
        pt: { xs: 16, md: 20 },
        pb: { xs: 4, md: 6 },
      }}
    >
      <Container disableGutters maxWidth={false} sx={{ maxWidth: '1000px', mx: 'auto', px: { xs: 2, md: 4 }, position: 'relative', zIndex: 10 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: { xs: 3, md: 4 } }}>
          <Typography
            sx={{
              fontSize: { xs: '0.95rem', md: '1rem' },
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 500,
            }}
          >
            👋 Hi, I'm
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.95rem', md: '1rem' },
              color: 'white',
              fontWeight: 600,
            }}
          >
            Rizky Nugraha
          </Typography>
        </Box>
        
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '3rem', md: '5rem', lg: '6rem' },
            fontWeight: 800,
            mb: { xs: 4, md: 5 },
            lineHeight: { xs: 1.1, md: 1.15 },
            letterSpacing: '-0.035em',
            background: 'linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.9) 60%, rgba(255, 255, 255, 0.75) 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))',
          }}
        >
          Fullstack Dev, GIS Engineer.
        </Typography>
        
        <Box sx={{ mb: { xs: 5, md: 6 }, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                bgcolor: 'rgba(59, 130, 246, 0.8)',
                boxShadow: '0 0 8px rgba(59, 130, 246, 0.4)',
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                fontWeight: 600,
                color: 'white',
                letterSpacing: '-0.01em',
              }}
            >
              I focus on building your MVP.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                bgcolor: 'rgba(16, 185, 129, 0.8)',
                boxShadow: '0 0 8px rgba(16, 185, 129, 0.4)',
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                fontWeight: 600,
                color: 'white',
                letterSpacing: '-0.01em',
              }}
            >
              You focus on growing it fast.
            </Typography>
          </Box>
        </Box>
        
        <Typography
          sx={{
            fontSize: { xs: '1.05rem', md: '1.2rem' },
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: 1.7,
            fontWeight: 400,
            letterSpacing: '0.005em',
          }}
        >
          Developer with <Box component="span" sx={{ color: 'white', fontWeight: 600 }}>1+ years</Box> of experience building web and desktop applications, 
          focused on <Box component="span" sx={{ color: 'white', fontWeight: 600 }}>fast MVP delivery</Box> using modern tech to ensure 
          scalable, efficient solutions.
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
