import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Link, { linkClasses } from '@mui/material/Link';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function ElearningLandingCategories({ categories, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Grid
          container
          disableEqualOverflow
          spacing={{ xs: 5, lg: 3 }}
          justifyContent={{ lg: 'space-between' }}
        >
          <Grid
            xs={12}
            lg={4}
            sx={{
              textAlign: { xs: 'center', lg: 'unset' },
            }}
          >
            <Typography variant="h2">Featured category</Typography>

            <Typography sx={{ color: 'text.secondary', mt: 2, mb: 5 }}>
              Since wire-frame renderings are relatively simple and fast to calculate, they are
              often used in cases
            </Typography>

            <Button
              variant="contained"
              size="large"
              color="inherit"
              endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
            >
              Explore more
            </Button>
          </Grid>

          <Grid xs={12} lg={7}>
            <Box
              gap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              }}
            >
              {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function CategoryItem({ category }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        minWidth: 0,
        display: 'flex',
        borderRadius: 1.5,
        cursor: 'pointer',
        bgcolor: 'transparent',
        flexDirection: 'column',
        transition: (theme) =>
          theme.transitions.create('all', {
            duration: theme.transitions.duration.enteringScreen,
          }),
        '&:hover': {
          bgcolor: 'background.paper',
          boxShadow: (theme) => theme.customShadows.z24,
          [`& .${linkClasses.root}`]: { color: 'primary.main' },
        },
      }}
    >
      <Link color="inherit" variant="h6" noWrap>
        {category.name}
      </Link>

      <Typography variant="body2" sx={{ mt: 1, color: 'text.disabled' }}>
        {category.totalStudents} students
      </Typography>
    </Paper>
  );
}
