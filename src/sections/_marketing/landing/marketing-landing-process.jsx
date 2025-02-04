import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const iconPath = (name) => `${CONFIG.assetsDir}/assets/icons/solid-64/${name}`;

const COLORS = ['primary', 'secondary', 'warning', 'success'];

const STEPS = [
  { name: 'Planning', icon: iconPath('ic-sketch.svg') },
  { name: 'Research', icon: iconPath('ic-research.svg') },
  { name: 'Optimizing', icon: iconPath('ic-system-optimization.svg') },
  { name: 'Results', icon: iconPath('ic-report-results.svg') },
];

// ----------------------------------------------------------------------

export function MarketingLandingProcess({ sx, ...other }) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 10 },
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Stack
          spacing={3}
          sx={{
            mb: 5,
            maxWidth: 480,
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Workflow
          </Typography>

          <Typography variant="h2">Working process</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
          </Typography>
        </Stack>

        <Box
          gap={4}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          sx={{ alignItems: 'flex-end' }}
        >
          {STEPS.map((item, index) => (
            <ServiceItem key={item.name} item={item} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function ServiceItem({ item, index }) {
  return (
    <Card
      sx={(theme) => ({
        p: 2,
        color: theme.vars.palette[COLORS[index]].darker,
        bgcolor: theme.vars.palette[COLORS[index]].light,
        boxShadow: `-8px 12px 32px 0px ${varAlpha(theme.vars.palette[COLORS[index]].mainChannel, 0.2)}`,
        ...(index > 0 && {
          mb: { md: index * 2.5 },
        }),
      })}
    >
      <SvgColor src={item.icon} width={64} sx={{ opacity: 0.48 }} />

      <Typography component="h6" variant="h5" sx={{ mt: 3, textAlign: 'right' }}>
        {item.name}
      </Typography>
    </Card>
  );
}
