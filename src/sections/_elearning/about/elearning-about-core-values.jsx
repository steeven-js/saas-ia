import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const iconPath = (name) => `${CONFIG.assetsDir}/assets/icons/solid-64/${name}`;

const CORE_VALUES = [
  {
    title: 'Customer satisfaction',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: iconPath('ic-satisfaction.svg'),
  },
  {
    title: 'Transparency',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: iconPath('ic-transparency.svg'),
  },
  {
    title: 'Reputation',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: iconPath('ic-popularity.svg'),
  },
  {
    title: 'Cooperation',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: iconPath('ic-cooperate.svg'),
  },
];

// ----------------------------------------------------------------------

export function ElearningAboutCoreValues({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        overflow: 'hidden',
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Stack
          spacing={3}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          sx={{
            mb: { xs: 5, md: 15 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">Core values</Typography>

          <Typography sx={{ color: 'text.secondary', maxWidth: { md: 540 } }}>
            Etiam ultricies nisi vel augue. Suspendisse potenti. Sed mollis, eros et ultrices
            tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Phasellus viverra
            nulla ut metus varius laoreet.
          </Typography>
        </Stack>

        <Box
          display="grid"
          gap={{ xs: 5, md: 8 }}
          gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
        >
          {CORE_VALUES.map((item) => (
            <Box key={item.title} sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
              <SvgColor
                src={item.icon}
                width={64}
                sx={{
                  background: (theme) =>
                    `linear-gradient(to bottom, ${theme.vars.palette.primary.light}, ${theme.vars.palette.primary.main})`,
                }}
              />

              <Typography component="h6" variant="h5" sx={{ mt: 3, mb: 1 }}>
                {item.title}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}> {item.description} </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
