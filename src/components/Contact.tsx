import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box 
      component="section" 
      id="contact" 
      ref={sectionRef}
      sx={{ 
        pt: { xs: 4, md: 8 },
        pb: { xs: 12, md: 16 },
        bgcolor: 'transparent',
        position: 'relative',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'all 0.8s ease-out 0.3s',
      }}
    >
      <Container disableGutters maxWidth={false} sx={{ maxWidth: '1000px', mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Typography 
          variant="h2" 
          sx={{ 
            mb: { xs: 6, md: 8 }, 
            fontWeight: 700, 
            fontSize: { xs: '2.2rem', md: '3rem' }, 
            color: 'white',
            letterSpacing: '-0.02em',
          }}
        >
          Let's Connect
        </Typography>
        
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.8)', 
              mb: 3,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6,
              fontWeight: 500,
            }}
          >
            Ready to build something amazing together?
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.75)', 
              fontSize: { xs: '1rem', md: '1.15rem' },
              lineHeight: 1.65,
            }}
          >
            Drop me a line at{' '}
            <Typography
              component="a"
              href="mailto:rizkynugraha999@gmail.com"
              sx={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 600,
                borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  borderBottomColor: 'white',
                  color: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              rizkynugraha999@gmail.com
            </Typography>
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, md: 3 } }}>
          <Typography
            component="a"
            href="https://github.com/rizkyngrh23"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              color: 'rgba(255, 255, 255, 0.8)',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              px: 4,
              py: 2.2,
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '10px',
              bgcolor: 'rgba(255, 255, 255, 0.04)',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.3s ease',
              '&:hover': { 
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.25)',
                bgcolor: 'rgba(255, 255, 255, 0.08)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            Github
            <Box component="span" sx={{ opacity: 0.7 }}>↗</Box>
          </Typography>
          <Typography
            component="a"
            href="https://linkedin.com/in/rizkyngrh23"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'rgba(255, 255, 255, 0.75)',
              textDecoration: 'none',
              fontSize: '0.95rem',
              px: 3,
              py: 1.8,
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              '&:hover': { 
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                bgcolor: 'rgba(255, 255, 255, 0.08)',
                transform: 'translateY(-1px)',
              },
            }}
          >
            LinkedIn ↗
          </Typography>
          <Typography
            component="a"
            href="https://twitter.com/rizkyngrh23"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'rgba(255, 255, 255, 0.75)',
              textDecoration: 'none',
              fontSize: '0.95rem',
              px: 3,
              py: 1.8,
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              '&:hover': { 
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                bgcolor: 'rgba(255, 255, 255, 0.08)',
                transform: 'translateY(-1px)',
              },
            }}
          >
            Twitter ↗
          </Typography>
          <Typography
            component="a"
            href="https://instagram.com/rizkyngrh23"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'rgba(255, 255, 255, 0.75)',
              textDecoration: 'none',
              fontSize: '0.95rem',
              px: 3,
              py: 1.8,
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              '&:hover': { 
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                bgcolor: 'rgba(255, 255, 255, 0.08)',
                transform: 'translateY(-1px)',
              },
            }}
          >
            Instagram ↗
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
