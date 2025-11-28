import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Navigation: React.FC = () => {
  return (
    <Box
      component="nav"
      sx={{
        position: 'fixed',
        top: 20,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Container disableGutters maxWidth={false} sx={{ maxWidth: '1000px', mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            bgcolor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50px',
            px: { xs: 2, md: 3 },
            py: 1.5,
            gap: { xs: 2, md: 4 },
          }}
        >
          <Box
            component="img"
            src="/profile.jpeg"
            alt="Rizky Nugraha"
            sx={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              objectFit: 'cover',
            }}
          />
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
            <Typography 
              component="a" 
              href="#projects" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                textDecoration: 'none', 
                fontSize: '0.9rem',
                fontWeight: 400,
                transition: 'color 0.2s',
                '&:hover': { color: 'white' } 
              }}
            >
              Projects ↗
            </Typography>
            <Typography 
              component="a" 
              href="https://github.com/rizkyngrh23" 
              target="_blank" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                textDecoration: 'none', 
                fontSize: '0.9rem',
                fontWeight: 400,
                transition: 'color 0.2s',
                '&:hover': { color: 'white' } 
              }}
            >
              Github ↗
            </Typography>
            <Typography 
              component="a" 
              href="https://linkedin.com/in/rizkyngrh23" 
              target="_blank" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                textDecoration: 'none', 
                fontSize: '0.9rem',
                fontWeight: 400,
                transition: 'color 0.2s',
                '&:hover': { color: 'white' } 
              }}
            >
              LinkedIn ↗
            </Typography>
          </Box>
          
          <Box
            component="a"
            href="https://wa.me/6282126656097"
            target="_blank"
            sx={{
              bgcolor: 'white',
              border: 'none',
              color: 'black',
              px: 3,
              py: 1,
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 500,
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.2s',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
                transform: 'translateY(-1px)',
              },
            }}
          >
            Book a Call
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navigation;
