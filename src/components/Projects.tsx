import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';

const projects = [
  {
    year: '2025',
    title: 'WhatsApp Sticker Bot',
    description: 'A bot that converts incoming WhatsApp images into stickers and sends them back to the user.',
    link: 'https://github.com/rizkyngrh23/whatsapp-sticker',
    status: 'Live',
    image: '/whatsapp.avif',
    tags: ['TypeScript', 'WhatsApp API', 'Bot', 'Image Processing']
  },
  {
    year: '2024',
    title: 'ConvLSTM Climate Prediction',
    description: 'ConvLSTM for climate prediction using machine learning models to analyze weather patterns and forecast future climate conditions.',
    link: 'https://github.com/rizkyngrh23/ConvLSTM_Climate',
    status: 'Live',
    image: '/Skill%20Score.png',
    tags: ['Python', 'Machine Learning', 'TensorFlow', 'Climate Analysis']
  },
  {
    year: '2024',
    title: 'Threat Scanner',
    description: 'A comprehensive Java-based web vulnerability scanner that detects common security vulnerabilities including SQL Injection, XSS, and CSRF.',
    link: 'https://github.com/rizkyngrh23/threat-scanner',
    status: 'Live',
    image: '/Threat.png',
    tags: ['Java', 'Security', 'Vulnerability Scanner', 'Web Security']
  },
  {
    year: '2024',
    title: 'Finance Tracker',
    description: 'A web app that helps users manage income, expenses, and visualize their financial health over time with interactive charts and analytics.',
    link: 'https://github.com/rizkyngrh23/finance_tracker',
    status: 'Live',
    image: '/finance.png',
    tags: ['TypeScript', 'Financial Management', 'Charts', 'Web App']
  },
  {
    year: '2024',
    title: 'Shopee Flash Sale Bot',
    description: 'Bot that automates the process of purchasing items during Shopee flash sales using Puppeteer with 2 stars and 1 fork.',
    link: 'https://github.com/rizkyngrh23/shopee-flashsale-bot',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=entropy',
    tags: ['JavaScript', 'Puppeteer', 'Automation', 'E-commerce']
  },
  {
    year: '2024',
    title: 'DeployMate',
    description: 'A zero-config CI/CD tool to automatically deploy Node.js apps to Vercel, Netlify, or DigitalOcean with a single command.',
    link: 'https://github.com/rizkyngrh23/DeployMate',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop&crop=entropy',
    tags: ['JavaScript', 'DevOps', 'CI/CD', 'Deployment Automation']
  },
  {
    year: '2024',
    title: 'Web GIS Application',
    description: 'A React-based web GIS application featuring interactive map layers, user authentication, and customizable basemaps with GeoJSON support.',
    link: 'https://github.com/rizkyngrh23/web-gis',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop&crop=entropy',
    tags: ['JavaScript', 'GIS', 'React', 'Mapping']
  },
  {
    year: '2024',
    title: 'Teralink Generator',
    description: 'Terabox direct download link generator with 2 stars and 2 forks. Simplifies file sharing and downloading from Terabox.',
    link: 'https://github.com/rizkyngrh23/teralink-generator',
    status: 'Live',
    image: '/teralink.png',
    tags: ['JavaScript', 'Link Generator', 'File Sharing', 'Utility']
  },
];

const Projects: React.FC = () => {
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
      id="projects" 
      ref={sectionRef}
      sx={{ 
        pt: { xs: 4, md: 8 },
        pb: { xs: 12, md: 16 },
        bgcolor: 'transparent',
        position: 'relative',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'all 0.8s ease-out 0.1s',
      }}
    >
      <Container disableGutters maxWidth={false} sx={{ maxWidth: '1000px', mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Typography 
          variant="h2" 
          sx={{ 
            mb: { xs: 8, md: 10 }, 
            fontWeight: 700, 
            fontSize: { xs: '2.2rem', md: '3rem' }, 
            color: 'white',
            letterSpacing: '-0.02em',
          }}
        >
          Projects
        </Typography>
        
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: { xs: 8, md: 10 } }}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                component="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'block',
                  textDecoration: 'none',
                  color: 'inherit',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  bgcolor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    zIndex: 0,
                  },
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    bgcolor: 'rgba(255, 255, 255, 0.06)',
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                    '&:before': {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: 180, md: 200 },
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                  }}
                >

                </Box>

                <Box sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, position: 'relative', zIndex: 1 }}>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        fontSize: '1.3rem', 
                        fontWeight: 700, 
                        color: 'white',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Box
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.08)',
                        borderRadius: '4px',
                        px: 1.5,
                        py: 0.5,
                      }}
                    >
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.8rem', fontWeight: 600 }}>
                        {project.year}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.75)', 
                      lineHeight: 1.65,
                      fontSize: '1rem',
                      mb: 3,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, position: 'relative', zIndex: 1 }}>
                    {project.tags.map((tag, tagIndex) => (
                      <Box
                        key={tagIndex}
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.08)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          color: 'rgba(255, 255, 255, 0.85)',
                          px: 2,
                          py: 0.7,
                          borderRadius: '8px',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            bgcolor: 'rgba(255, 255, 255, 0.12)',
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                          },
                        }}
                      >
                        {tag}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Box
            component="a"
            href="https://github.com/rizkyngrh23?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 2,
              textDecoration: 'none',
              bgcolor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: 'rgba(255, 255, 255, 0.9)',
              px: 6,
              py: 2,
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              position: 'relative',
              overflow: 'hidden',
              '&:before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
                transform: 'translateX(-100%)',
                transition: 'transform 0.4s ease',
              },
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                transform: 'translateY(-3px)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                '&:before': {
                  transform: 'translateX(0)',
                },
              },
            }}
          >
            <Typography sx={{ position: 'relative', zIndex: 1 }}>View all projects</Typography>
            <Box sx={{ position: 'relative', zIndex: 1 }}>↗</Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
