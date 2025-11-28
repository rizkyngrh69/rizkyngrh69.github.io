import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: 'transparent',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Container disableGutters maxWidth={false} sx={{ maxWidth: '1000px', mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.55)',
              fontSize: '0.85rem',
              fontWeight: 400,
            }}
          >
            © {new Date().getFullYear()} Rizky Nugraha. All rights reserved.
          </Typography>
          <Typography 
            component="a"
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            sx={{ 
              color: 'rgba(255, 255, 255, 0.65)', 
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': { 
                color: 'white',
                transform: 'translateY(-1px)'
              }
            }}
          >
            Back to top ↑
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
