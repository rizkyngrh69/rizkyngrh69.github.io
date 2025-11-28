import React, { useEffect, useRef, useState } from 'react';
import { Box, Container } from '@mui/material';

const Banner: React.FC = () => {
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
      sx={{
        pt: { xs: 0, md: 0 },
        pb: { xs: 2, md: 4 },
        bgcolor: 'transparent',
        position: 'relative'
      }}
    >
      <Container disableGutters maxWidth={false} sx={{ maxWidth: '1000px', mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Box
          ref={sectionRef}
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: '200px', md: '200px' },
            overflow: 'hidden',
            borderRadius: '0px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: 'all 0.8s ease-out 0.15s',
            backgroundImage: 'url(/banner.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </Container>
    </Box>
  );
};

export default Banner;