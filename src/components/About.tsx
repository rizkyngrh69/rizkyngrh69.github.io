import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';

const experiences = [
  {
    year: '2024 - Present',
    title: 'Fullstack Developer',
    company: 'PT Kereta Api Indonesia',
    description: 'Developing GIS and mapping applications & dashboard. Working with spatial data visualization, interactive maps, and location-based services while building scalable fullstack solutions for railway infrastructure management.',
  },
  {
    year: '2024 - 2025',
    title: 'Machine Learning Cohort',
    company: 'Bangkit Academy',
    description: 'Participated in an intensive machine learning bootcamp focusing on data science, artificial intelligence, and deep learning. Gained hands-on experience with Python, TensorFlow, model training, and deployment while working on real-world ML projects.',
  },
  {
    year: '2023 - 2024',
    title: 'Research Assistant',
    company: 'BRIN - Bandung',
    description: 'Conducted scientific research and data analysis in support of national research initiatives. Collaborated with senior researchers on data collection, statistical analysis, and research documentation while contributing to ongoing scientific projects.',
  },
  {
    year: '2023',
    title: 'GIS Analyst Intern',
    company: 'MAPID - Bandung',
    description: 'Applied geospatial analysis and mapping techniques to solve real-world problems. Worked with GIS software, spatial databases, and remote sensing data to create detailed maps and perform spatial analysis for various mapping projects.',
  },
  {
    year: '2020 - 2024',
    title: 'Natural Science Student',
    company: 'Bogor Institute of Agriculture',
    description: 'Completed undergraduate studies in Natural Science with focus on analytical thinking, research methodology, and problem-solving. Developed strong foundation in mathematics, statistics, and scientific principles that support technical development work.',
  },
];

const About: React.FC = () => {
  return (
    <Box 
      component="section" 
      id="about" 
      sx={{ 
        pt: { xs: 4, md: 8 },
        pb: { xs: 12, md: 16 },
        bgcolor: 'transparent',
        position: 'relative'
      }}
    >
      <Container disableGutters maxWidth={false} sx={{ maxWidth: '1000px', mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: { xs: 8, md: 10 } }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 700, 
              fontSize: { xs: '2.2rem', md: '3rem' }, 
              color: 'white',
              letterSpacing: '-0.02em',
            }}
          >
            Experience
          </Typography>
          <Box
            component="a"
            href="mailto:rizkynugraha999@gmail.com?subject=CV Request"
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
              bgcolor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: 'rgba(255, 255, 255, 0.9)',
              px: 4,
              py: 1.5,
              borderRadius: '10px',
              fontSize: '0.9rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Request CV →
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 6, md: 7 } }}>
          {experiences.map((exp, index) => (
            <Box
              key={index}
              sx={{
                borderBottom: index < experiences.length - 1 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
                pb: index < experiences.length - 1 ? { xs: 5, md: 6 } : 0,
              }}
            >
              <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
                <Grid item xs={12} md={3}>
                  <Box
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '6px',
                      px: 2,
                      py: 1,
                      display: 'inline-block',
                    }}
                  >
                    <Typography 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.8)', 
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {exp.year}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontSize: { xs: '1.4rem', md: '1.7rem' }, 
                      fontWeight: 700, 
                      mb: 2,
                      color: 'white',
                      lineHeight: 1.15,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {exp.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.75)', 
                      lineHeight: 1.65,
                      fontSize: { xs: '1rem', md: '1.05rem' },
                    }}
                  >
                    {exp.description}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.9)', 
                      fontWeight: 600,
                      fontSize: { xs: '1rem', md: '1.05rem' },
                    }}
                  >
                    {exp.company}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default About;
