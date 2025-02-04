import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export function TravelOurClients({ brands, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        pt: { md: 5 },
        pb: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Typography variant="h2">Our clients</Typography>

          <div>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Enhance your life by having a sense of purpose
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Around the world, food-borne illnesses have become increasingly common. In the United
              States alone, millions of people get a food-related illness each year.
            </Typography>
          </div>
        </Box>

        <Box
          display="grid"
          columnGap={3}
          rowGap={{ xs: 4, md: 5 }}
          gridTemplateColumns={{
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          sx={{ mt: { xs: 5, md: 15 } }}
        >
          {brands.map((brand) => (
            <SvgColor
              key={brand.id}
              src={brand.image}
              width={106}
              height={32}
              sx={{
                color: 'text.disabled',
                mx: { xs: 'auto', md: 'unset' },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
